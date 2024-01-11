var citySearchHTML = document.querySelector('citySearch');
var searchButtonHTML = document.querySelector('#searchButton');
var userCityHTML = document.querySelector('#userCity');
var cityNameHTML = document.querySelector('#cityName');
var cityTempHTML = document.querySelector('#temp');
var cityWindHTML = document.querySelector('#wind');
var cityHumidityHTML = document.querySelector('#humidity');
var fiveDayForecastHTML = document.querySelector('#fiveDayForecast');
var day1HTML = document.querySelector('#day1');
var day2HTML = document.querySelector('#day2');
var day3HTML = document.querySelector('#day3');
var day4HTML = document.querySelector('#day4');
var day5HTML = document.querySelector('#day5');
var day1HTMLTemperatureTemp = document.querySelector('#day1TemperatureTemp');
var day1HTMLWindTemp = document.querySelector('#day1WindTemp');
var day1HTMLHumidityTemp = document.querySelector('#day1HumidityTemp');
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
        // for (let i = 0; i <= fiveDay.list.length; i+=8) {
          // console.log("in the first loop");
          // console.log("in the second loop, if statement");
          //Day 1
          var userCityTemp = fiveDay.list[0].temp;
          day1HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[0].wind.speed;
          day1HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[0].main.humidity;
          day1HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";

          // //Day 2
          // var userCityTemp = fiveDay.list[7].temp;
          // day2HTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          // var userCityWind = fiveDay.list[7].wind.speed;
          // day2HTML.textContent = "Wind: " + userCityWind + " MPH";
        
          // var userCityHumidity = fiveDay.list[7].main.humidity;
          // day2HTML.textContent = "Humidity: " + userCityHumidity + " %";

          // //Day 3
          // var userCityTemp = fiveDay.list[14].temp;
          // day3HTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          // var userCityWind = fiveDay.list[14].wind.speed;
          // day3HTML.textContent = "Wind: " + userCityWind + " MPH";
        
          // var userCityHumidity = fiveDay.list[14].main.humidity;
          // day3HTML.textContent = "Humidity: " + userCityHumidity + " %";
          
          // //Day 4
          // var userCityTemp = fiveDay.list[21].temp;
          // day4HTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          // var userCityWind = fiveDay.list[21].wind.speed;
          // day4HTML.textContent = "Wind: " + userCityWind + " MPH";
        
          // var userCityHumidity = fiveDay.list[21].main.humidity;
          // day4HTML.textContent = "Humidity: " + userCityHumidity + " %";

          // //Day 5
          // var userCityTemp = fiveDay.list[28].temp;
          // day5HTML.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          // var userCityWind = fiveDay.list[28].wind.speed;
          // day5HTML.textContent = "Wind: " + userCityWind + " MPH";
        
          // var userCityHumidity = fiveDay.list[28].main.humidity;
          // day5HTML.textContent = "Humidity: " + userCityHumidity + " %";
          // for(let j = 0; j <5; j++) {
          //   if (j === 1) {

          //   }
          // }
        //}
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
