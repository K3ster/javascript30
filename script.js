const apiKey = "MoagLlguAnOp4i6PnC22FBWKST7fHw9d";

async function fetchRandomGif() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`,
  );
  const data = await response.json();
  const gifUrl = data.data.images.original.url;

  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random GIF">`;
}
