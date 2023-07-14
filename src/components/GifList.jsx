import Gif from "./Gif";
import "./GifList.css";
import { Link, Route } from "wouter";

export default function GifList({ gifs }) {
  return (
    <section className="gifs-container">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} id={id} title={title} url={url} />
      ))}
    </section>
  );
}
