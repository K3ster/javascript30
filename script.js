const apiKey = "MoagLlguAnOp4i6PnC22FBWKST7fHw9d";
let currentPage = 1;

async function searchGifs(page) {
  const query = document.getElementById("searchQuery").value;
  const offset = (page - 1) * 10;
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=1&offset=${offset}&rating=g`,
  );
  const data = await response.json();
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = ""; // Clear existing data

  data.data.forEach((gif) => {
    const gifUrl = gif.images.original.url;
    gifContainer.innerHTML += `<img src="${gifUrl}" alt="GIF" style="margin: 10px;">`;
  });

  currentPage = page;
}

function nextPage() {
  searchGifs(currentPage + 1);
}

function previousPage() {
  if (currentPage > 1) {
    searchGifs(currentPage - 1);
  }
}
