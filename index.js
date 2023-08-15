const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const inputEl = document.getElementById("input-city");
const buttonEl = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apiKey = "b60fb16966d8bbb8d84562d84c6706d2";
async function checkWeather(){
    let city = inputEl.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    try{
        let data = await fetch(apiUrl).then(response=>{return response.json();});

        //update the display content based on the data fetched from the api response as a json file
        cityEl.textContent = data.name;
        tempEl.textContent = Math.round(data.main.temp)+"°C";
        humidEl.textContent = data.main.humidity+"%";
        windEl.textContent = data.wind.speed+" kmph";

        //update the weather icon based on the weather forcast of the api response
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src="images/mist.png";
        }
        
        console.log(data);
    }catch(error){
        console.error(error);
    }
}

buttonEl.addEventListener("click",checkWeather);