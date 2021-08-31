// SELECT ELEMENTS
const locationElement = document.querySelector(".location p");

const timeElement0 = document.querySelector("time-0");
const iconElement0 = document.querySelector(".weather-icon-0");
const tempElement0 = document.querySelector(".temperature-value-0 p");
const descElement0 = document.querySelector(".description-0 p");

const timeElement1 = document.querySelector("time-1");
const iconElement1 = document.querySelector(".weather-icon-1");
const tempElement1 = document.querySelector(".temperature-value-1 p");
const descElement1 = document.querySelector(".description-1 p");

const timeElement2 = document.querySelector("time-2");
const iconElement2 = document.querySelector(".weather-icon-2");
const tempElement2 = document.querySelector(".temperature-value-2 p");
const descElement2 = document.querySelector(".description-2 p");

const timeElement3 = document.querySelector("time-3");
const iconElement3 = document.querySelector(".weather-icon-3");
const tempElement3 = document.querySelector(".temperature-value-3 p");
const descElement3 = document.querySelector(".description-3 p");

const timeElement4 = document.querySelector("time-4");
const iconElement4 = document.querySelector(".weather-icon-4");
const tempElement4 = document.querySelector(".temperature-value-4 p");
const descElement4 = document.querySelector(".description-4 p");


// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
const location = 'hanoi';
// API KEY
const key = "";

// GET WEATHER FROM API WEATHER
function getWeather(){
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value[0] = Math.floor(data.list[6].main.temp - KELVIN);
            weather.temperature.value[1] = Math.floor(data.list[12].main.temp - KELVIN);
            weather.temperature.value[2] = Math.floor(data.list[18].main.temp - KELVIN);
            weather.temperature.value[3] = Math.floor(data.list[24].main.temp - KELVIN);
            weather.temperature.value[4] = Math.floor(data.list[30].main.temp - KELVIN);

            weather.description[0] = data.list[6].weather[0].description;
            weather.description[1] = data.list[12].weather[0].description;
            weather.description[2] = data.list[18].weather[0].description;
            weather.description[3] = data.list[24].weather[0].description;
            weather.description[4] = data.list[30].weather[0].description;

            weather.iconId[0] = data.list[6].weather[0].icon;
            weather.iconId[1] = data.list[12].weather[0].icon;
            weather.iconId[2] = data.list[18].weather[0].icon;
            weather.iconId[3] = data.list[24].weather[0].icon;
            weather.iconId[4] = data.list[30].weather[0].icon;
            
            weather.time[0] = data.list[6].dt_txt;
            weather.time[1] = data.list[12].dt_txt;
            weather.time[2] = data.list[18].dt_txt;
            weather.time[3] = data.list[24].dt_txt;
            weather.time[4] = data.list[30].dt_txt;

            
            //Location
            weather.city = data.city.name;
            weather.country = data.city.country;
        })
        .then(function(){
            displayWeather();
        })
}
// DISPLAY WEATHER 
function displayWeather(){
    timeElement0.innerHTML = `${weather.time[0]}`;
    timeElement1.innerHTML = `${weather.time[1]}`;
    timeElement2.innerHTML = `${weather.time[2]}`;
    timeElement3.innerHTML = `${weather.time[3]}`;
    timeElement4.innerHTML = `${weather.time[4]}`;

    iconElement0.innerHTML = `<img src="icons/${weather.iconId[0]}.png"/>`;
    iconElement1.innerHTML = `<img src="icons/${weather.iconId[1]}.png"/>`;
    iconElement2.innerHTML = `<img src="icons/${weather.iconId[2]}.png"/>`;
    iconElement3.innerHTML = `<img src="icons/${weather.iconId[3]}.png"/>`;
    iconElement4.innerHTML = `<img src="icons/${weather.iconId[4]}.png"/>`;

    tempElement0.innerHTML = `${weather.temperature.value[0]}°<span>C</span>`;
    tempElement1.innerHTML = `${weather.temperature.value[1]}°<span>C</span>`;
    tempElement2.innerHTML = `${weather.temperature.value[2]}°<span>C</span>`;
    tempElement3.innerHTML = `${weather.temperature.value[3]}°<span>C</span>`;
    tempElement4.innerHTML = `${weather.temperature.value[4]}°<span>C</span>`;

    descElement0.innerHTML = weather.description[0];
    descElement1.innerHTML = weather.description[1];
    descElement2.innerHTML = weather.description[2];
    descElement3.innerHTML = weather.description[3];
    descElement4.innerHTML = weather.description[4];

    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
