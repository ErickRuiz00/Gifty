import "./SearchNav.css";
import { useState} from "react";
import { getRandomGif, getGifList, getTrending } from "../services/getGif";

function SearchNav({ setGifs}) {
  const [search, setSearch] = useState("panda");

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => getRandomGif(search).then((gif) => setGifs(gif))}>
        Random Gif
      </button>
      <button
        onClick={() => getGifList(search).then((gifList) => setGifs(gifList))}
      >
        Gif List
      </button>
      <button onClick={() => getTrending().then((trend) => setGifs(trend))}>
        Trending Gifs
      </button>
    </div>
  );
}

export default SearchNav;
