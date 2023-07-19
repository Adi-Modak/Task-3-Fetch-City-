async function fetchCityData() {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json'
      );
      return await response.json();
    } catch (error) {
      console.error('Error!', error);
      return [];
    }
  }
  
  function displayFilteredCities(cities, userInput) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; 
  
    const filteredCities = cities.filter(city =>
      city.name.toLowerCase().includes(userInput.toLowerCase())
    );
  
    if (filteredCities.length === 0) {
      resultContainer.textContent = 'Result not found!';
    } else {
      filteredCities.forEach(city => {
        const cityElement = document.createElement('p');
        cityElement.textContent = city.name + ', ' + city.state;
        resultContainer.appendChild(cityElement);
      });
    }
  }
  
  document.getElementById('filterInput').addEventListener('input', async event => {
    const userInput = event.target.value.trim();
    const cityData = await fetchCityData();
    displayFilteredCities(cityData, userInput);
  });
  