const token = "VnDgecQmoYEfqneEqYkaeFUkaRyEzgwT";

async function fetchDatasets() {
  const response = await fetch(
    "https://www.ncei.noaa.gov/cdo-web/api/v2/datasets",
    {
      headers: {
        token: token,
      },
    },
  );

  const data = await response.json();
  const datasetsTable = document
    .getElementById("datasetsTable")
    .getElementsByTagName("tbody")[0];
  datasetsTable.innerHTML = ""; // Clear existing data

  data.results.forEach((dataset) => {
    const row = datasetsTable.insertRow();
    row.insertCell(0).innerText = dataset.id;
    row.insertCell(1).innerText = dataset.name;
    row.insertCell(2).innerText = dataset.datacoverage;
    row.insertCell(3).innerText = dataset.mindate;
    row.insertCell(4).innerText = dataset.maxdate;
  });
}

// Fetch the datasets data when the page loads
window.onload = fetchDatasets;
