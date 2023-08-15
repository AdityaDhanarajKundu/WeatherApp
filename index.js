const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const inputEl = document.getElementById("input-city");
const buttonEl = document.querySelector(".search button");

const apiKey = "b60fb16966d8bbb8d84562d84c6706d2";
async function checkWeather(){
    let city = inputEl.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try{
        let data = await fetch(apiUrl).then(response=>{return response.json();});
        cityEl.textContent = data.name;
        tempEl.textContent = Math.round(data.main.temp)+"°C";
        humidEl.textContent = data.main.humidity+"%";
        windEl.textContent = data.wind.speed+" kmph";

        console.log(data);
    }catch(error){
        console.error(error);
    }
}

buttonEl.addEventListener("click",checkWeather);