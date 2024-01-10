var citySearchHTML = document.querySelector('citySearch');
var searchButtonHTML = document.querySelector('#searchButton');
var userCityHTML = document.querySelector('#userCity');
var cityNameHTML = document.querySelector('#cityName');
var cityTempHTML = document.querySelector('#temp');
var cityWindHTML = document.querySelector('#wind');
var cityHumidityHTML = document.querySelector('#humidity');
var fiveDayForecastHTML = document.querySelector('#fiveDayForecast');
var apiKey = "b06c4b04aa915b047a4528bccb03cad5";

function displayUserCity (cityResults) {
  var userCity = cityResults.name;
  cityNameHTML.textContent = userCity;
}

function weatherAPI(cityName) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';

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
      //play with city results
      var userCityTemp = cityResults.main.temp;
      cityTempHTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
      var userCityWind = cityResults.wind.speed;
      cityWindHTML.textContent = "Wind: " + userCityWind + " MPH";
    
      var userCityHumidity = cityResults.main.humidity;
      cityHumidityHTML.textContent = "Humidity: " + userCityHumidity + " %";

      //call to display user's city entered
      displayUserCity(cityResults);

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
        //array of 40 for loop
        // for (let i = 0; i <= cityResults.length; i+8) {
        //   var userCityTemp = cityResults.main.temp;
        //   cityTempHTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
        
        //   var userCityWind = cityResults.wind.speed;
        //   cityWindHTML.textContent = "Wind: " + userCityWind + " MPH";
        
        //   var userCityHumidity = cityResults.main.humidity;
        //   cityHumidityHTML.textContent = "Humidity: " + userCityHumidity + " %";
        // }
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
