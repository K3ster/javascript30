const apiKey = "MoagLlguAnOp4i6PnC22FBWKST7fHw9d";

async function searchGifs() {
  const query = document.getElementById("searchQuery").value;
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&rating=g`,
  );
  const data = await response.json();
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; // Clear existing data

  data.data.forEach((gif) => {
    const gifUrl = gif.images.original.url;
    gifContainer.innerHTML += `<img src="${gifUrl}" alt="GIF" style="margin: 10px;">`;
  });
}
