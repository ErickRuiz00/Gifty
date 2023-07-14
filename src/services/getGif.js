const apiKey = "Vk2pVQMRism3OCzqFe8hh7rfAsnuwaLT";

export async function getRandomGif(keyword) {
  const apiURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${keyword}&rating=g`;
  const res = await fetch(apiURL);
  const response = await res.json();
  if (response.data.length === 0) return [];

  const { images, title, id } = response.data;
  const { url } = images.fixed_width_downsampled;
  return [{ title, id, url }];
}

export async function getGifList(keyword = "panda") {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=35&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const res = await fetch(apiURL);
  const response = await res.json();
  const gifList = response.data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.fixed_width_downsampled;
    return { title, id, url };
  });
  return gifList;
}

export async function getTrending() {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=35&offset=0&rating=g&bundle=messaging_non_clips`;
  const res = await fetch(apiURL);
  const response = await res.json();
  const gifList = response.data.map((gif) => {
    const { images, title, id } = gif;
    const { url } = images.fixed_width_downsampled;
    return { title, id, url };
  });
  return gifList;
}
