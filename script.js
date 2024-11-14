const token = "VnDgecQmoYEfqneEqYkaeFUkaRyEzgwT";

async function fetchClimateData() {
  const datasetId = document.getElementById("datasetId").value;
  const locationId = document.getElementById("locationId").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const response = await fetch(
    `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=${datasetId}&locationid=${locationId}&startdate=${startDate}&enddate=${endDate}`,
    {
      headers: {
        token: token,
      },
    },
  );

  const data = await response.json();
  const climateDataTable = document
    .getElementById("climateDataTable")
    .getElementsByTagName("tbody")[0];
  climateDataTable.innerHTML = ""; // Clear existing data

  data.results.forEach((record) => {
    const row = climateDataTable.insertRow();
    row.insertCell(0).innerText = record.date;
    row.insertCell(1).innerText = record.station;
    row.insertCell(2).innerText = record.value;
  });
}

// Fetch data on button click
