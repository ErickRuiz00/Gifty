import { useState, useEffect } from "react";
import "./App.css";
import GifList from "./components/GifList";
import SearchNav from "./components/SearchNav";
import { getRandomGif } from "./services/getGif";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getRandomGif().then((gif) => setGifs(gif));
  }, []);

  return (
    <section className="App-content">
      <h1>gif search</h1>
      <SearchNav setGifs={setGifs} />
      <GifList gifs={gifs} />
    </section>
  );
}

export default App;
