var apiKey = "b06c4b04aa915b047a4528bccb03cad5";
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
var day2HTMLTemperatureTemp = document.querySelector('#day2TemperatureTemp');
var day2HTMLWindTemp = document.querySelector('#day2WindTemp');
var day2HTMLHumidityTemp = document.querySelector('#day2HumidityTemp');
var day3HTMLTemperatureTemp = document.querySelector('#day3TemperatureTemp');
var day3HTMLWindTemp = document.querySelector('#day3WindTemp');
var day3HTMLHumidityTemp = document.querySelector('#day3HumidityTemp');
var day4HTMLTemperatureTemp = document.querySelector('#day4TemperatureTemp');
var day4HTMLWindTemp = document.querySelector('#day4WindTemp');
var day4HTMLHumidityTemp = document.querySelector('#day4HumidityTemp');
var day5HTMLTemperatureTemp = document.querySelector('#day5TemperatureTemp');
var day5HTMLWindTemp = document.querySelector('#day5WindTemp');
var day5HTMLHumidityTemp = document.querySelector('#day5HumidityTemp');
var cardBodyHTML = document.querySelector('#card-body');
var day0DateHTML = document.querySelector('.day0Date');
var cardDay1HTML = document.querySelector('.cardDate1');
var cardDay2HTML = document.querySelector('.cardDate2');
var cardDay3HTML = document.querySelector('.cardDate3');
var cardDay4HTML = document.querySelector('.cardDate4');
var cardDay5HTML = document.querySelector('.cardDate5');


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
      // var day0DateHTML = cityResults.list[0].dt_txt.split(` `);
      // console.log(day0DateHTML);
      // console.log(day0DateHTML[0]);
      // cardDay1HTML.textContent = day0DateHTML[0];  

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
      
      fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + '&units=imperial') 
      .then (function(response2) {
        if (!response2.ok) {
          throw response2.json();
        }
        return response2.json();
      })
      //fetch(weatherUrl) 
      .then(function (fiveDay) {
        console.log(fiveDay);
        //array of 40 for loop
        // for (let i = 0; i <= fiveDay.list.length; i+=8) {
          // console.log("in the first loop");
          // console.log("in the second loop, if statement");

          //Day 1
          var day1Date = fiveDay.list[0].dt_txt.split(` `);
          console.log(day1Date);
          console.log(day1Date[0]);
          cardDay1HTML.textContent = day1Date[0];   

          var userCityTemp = fiveDay.list[0].main.temp;
          day1HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[0].wind.speed;
          day1HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[0].main.humidity;
          day1HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";

          //Day 2
          var day2Date = fiveDay.list[8].dt_txt.split(` `);
          console.log(day2Date);
          console.log(day2Date[0]);
          cardDay2HTML.textContent = day2Date[0];  

          var userCityTemp = fiveDay.list[8].main.temp;
          day2HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[8].wind.speed;
          day2HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[8].main.humidity;
          day2HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";

          //Day 3
          var day3Date = fiveDay.list[16].dt_txt.split(` `);
          console.log(day3Date);
          console.log(day3Date[0]);
          cardDay3HTML.textContent = day3Date[0];  

          var userCityTemp = fiveDay.list[16].main.temp;
          day3HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[16].wind.speed;
          day3HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[16].main.humidity;
          day3HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";
          
          //Day 4
          var day4Date = fiveDay.list[24].dt_txt.split(` `);
          console.log(day4Date);
          console.log(day4Date[0]);
          cardDay4HTML.textContent = day1Date[0];  

          var userCityTemp = fiveDay.list[24].main.temp;
          day4HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[24].wind.speed;
          day4HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[24].main.humidity;
          day4HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";

          //Day 5
          var day5Date = fiveDay.list[32].dt_txt.split(` `);
          console.log(day5Date);
          console.log(day5Date[0]);
          cardDay5HTML.textContent = day5Date[0];  

          var userCityTemp = fiveDay.list[32].main.temp;
          day5HTMLTemperatureTemp.textContent = "Temperature: " + userCityTemp + "\u00B0 F";  
    
          var userCityWind = fiveDay.list[32].wind.speed;
          day5HTMLWindTemp.textContent = "Wind: " + userCityWind + " MPH";
        
          var userCityHumidity = fiveDay.list[32].main.humidity;
          day5HTMLHumidityTemp.textContent = "Humidity: " + userCityHumidity + " %";
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
