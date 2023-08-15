const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

const apiKey = "b60fb16966d8bbb8d84562d84c6706d2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Bengaluru&appid=${apiKey}`;

async function checkWeather(){
    let city = 
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

checkWeather();