import { useState } from "react";
import "./App.css";
import { light, dark, type Card, getSymbol } from "./data";
import { QRCodeSVG } from "qrcode.react";

function getSeed() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  if (params.has("seed")) {
    return Number(params.get("seed"));
  }
  return Math.floor(Math.random() * 10000);
}

function getPlayerNumber() {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  if (params.has("player")) {
    return Number(params.get("player"));
  }
  return 0;
}

const seed: number = getSeed();
const playerNumber: number = getPlayerNumber();

function mulberry32(seed: number) {
  // coerce to 32-bit unsigned
  let a = seed >>> 0;
  return function () {
    a += 0x6d2b79f5;
    let t = Math.imul(a ^ (a >>> 15), a | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Deterministic shuffle (returns a new array)
function seededShuffle<T>(arr: T[], seed: number) {
  const rnd = mulberry32(Number(seed) || 0);
  const a = arr.slice(); // copy to avoid mutating original
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const lightShuffled = seededShuffle(light, seed);
const darkShuffled = seededShuffle(dark, seed >> 2);

function JoinQrCode(props: { player: number }) {
  const [zoom, setZoom] = useState(false);
  const url = new URL(window.location.href);
  url.searchParams.set("seed", seed.toString());
  url.searchParams.set("player", props.player.toString());
  return (
    <div className={zoom ? "qr qr--zoom" : "qr"} onClick={() => setZoom(!zoom)}>
      <QRCodeSVG value={url.toString()} size={256} />
      <span>Player {props.player}</span>
    </div>
  );
}

function repeat(n: number) {
  return new Array(n).fill(0).map((_, i) => i);
}

function CardDisplay(props: { c: Card; color: "light" | "dark" }) {
  return (
    <div className={`card card--${props.color}`}>
      <img className="card__icon" src={getSymbol(props.c.symbol)} alt="" />
      <span className="card__pts">{props.c.points}PTS</span>
      <span className="card__text">{props.c.text}</span>
    </div>
  );
}

function App() {
  const [playing, setPlaying] = useState(false);
  const [playerCount, setPlayerCount] = useState(2);
  if (playing) {
    return (
      <div className="cards">
        <CardDisplay c={lightShuffled[playerNumber]} color="light" />
        <CardDisplay c={darkShuffled[playerNumber]} color="dark" />
      </div>
    );
  }

  return (
    <>
      <button className="btn" onClick={() => setPlaying(!playing)}>
        Play
      </button>
      <input
        type="range"
        min={2}
        max={5}
        step={1}
        value={playerCount}
        onChange={(e) => setPlayerCount(Number(e.target.value))}
      />
      <input
        type="number"
        min={2}
        max={5}
        value={playerCount}
        step={1}
        onChange={(e) => setPlayerCount(Number(e.target.value))}
      />
      <div className="qrs">
        {repeat(playerCount - 1).map((p) => (
          <JoinQrCode key={p} player={p + 1} />
        ))}
      </div>
    </>
  );
}

export default App;
