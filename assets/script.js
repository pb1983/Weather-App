let weatherLoc = document.querySelector("#location");
let submit = document.querySelector("#submit");
let cityNow = document.querySelector("#currentCity");
let dateNow = document.querySelector("#currentDate");
let tempNow = document.querySelector("#currentTemp")
let humidityNow = document.querySelector("#currentHum");
let windNow = document.querySelector("#currentWind");
let firstCity = "";
let iconLink = document.querySelector("img");


submit.addEventListener("click", function (event) {

    event.target.matches("submit");

    let location = weatherLoc.value;


    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0dffd273a14a316064e1b544e7c8e115`)
        .then(response => response.json())
        .then(cities => {
            let firstCity = cities[0];
            cityNow.textContent = firstCity.name;

            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&units=imperial&appid=0dffd273a14a316064e1b544e7c8e115`)



        })

        .then(response => response.json())
        .then(weatherInfo => {

            
            let realDate = dayjs.unix(weatherInfo.list[0].dt).format("MM/DD/YYYY");
            console.log(weatherInfo);
            dateNow.textContent = realDate;
            humidityNow.textContent = "Humidity: " + weatherInfo.list[0].main.humidity + " %"
            tempNow.textContent = "Temp: " + weatherInfo.list[0].main.temp + "\u00B0F";
            windNow.textContent = " Wind " + weatherInfo.list[0].wind.speed + " MPH";

            let icon = weatherInfo.list[0].weather[0].icon;

            iconLink.src = `https://openweathermap.org/img/wn/${icon}@2x.png`


            

        })


})




