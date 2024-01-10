var citySearchHTML = document.querySelector('citySearch');
var searchButtonHTML = document.querySelector('#searchButton');
var userCityHTML = document.querySelector('#userCity');
var cityNameHTML = document.querySelector('#cityName');
var fiveDayForecastHTML = document.querySelector('#fiveDayForecast');
var apiKey = "b06c4b04aa915b047a4528bccb03cad5";

function weatherAPI(cityName) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

    fetch(weatherUrl)
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }

      return response.json();
    })
    .then(function (cityResults) {
      // write query to page so user knows what they are viewing
      //fiveDayForecastHTML.textContent = fiveDay.search.query;
      console.log(cityResults);
      var lat = cityResults.coord.lat;
      var lon = cityResults.coord.lon;
      fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey) 
      .then (function(response2) {
        if (!response2.ok) {
          throw response2.json();
        }
        return response2.json();
      })
      .then(function(fiveDay) {
        console.log(fiveDay);
      })
    })
}
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#searchInput').value;
  
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
    weatherAPI(searchInputVal);
  }
  
  searchButtonHTML.addEventListener("click", handleSearchFormSubmit);

  function displayUserCity (response2) {
    var userCity = response2.coord.name;
    cityNameHTML.textContent = userCity;
  }

  displayUserCity(response2);