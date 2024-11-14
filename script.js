async function fetchCountryData() {
  const capital = document.getElementById("capitalInput").value;
  const response = await fetch(
    `https://restcountries.com/v3.1/capital/${capital}`,
  );
  const data = await response.json();

  const countryTable = document
    .getElementById("countryTable")
    .getElementsByTagName("tbody")[0];
  countryTable.innerHTML = ""; // Clear existing data

  data.forEach((country) => {
    const row = countryTable.insertRow();
    row.insertCell(0).innerText = country.name.common;
    row.insertCell(1).innerText = country.capital[0];
    row.insertCell(2).innerText = country.population;
    row.insertCell(3).innerText = country.region;
    row.insertCell(4).innerText = country.subregion;
  });
}
