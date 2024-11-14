const token = "VnDgecQmoYEfqneEqYkaeFUkaRyEzgwT";

async function fetchStations() {
  const response = await fetch(
    "https://www.ncei.noaa.gov/cdo-web/api/v2/stations",
    {
      headers: {
        token: token,
      },
    },
  );

  const data = await response.json();
  const stationsTable = document
    .getElementById("stationsTable")
    .getElementsByTagName("tbody")[0];
  stationsTable.innerHTML = ""; // Clear existing data

  data.results.forEach((station) => {
    const row = stationsTable.insertRow();
    row.insertCell(0).innerText = station.id;
    row.insertCell(1).innerText = station.name;
    row.insertCell(2).innerText = station.state;
    row.insertCell(3).innerText = station.latitude;
    row.insertCell(4).innerText = station.longitude;
  });
}

// Fetch the stations data when the page loads
window.onload = fetchStations;
