import "./Gif.css";

function Gif({ title, id, url }) {
  return (
    <section className="gif-container">
      <h4>{title}</h4>
      <img src={url} alt={title} key={id} />
    </section>
  );
}

export default Gif;
