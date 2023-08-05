let weatherLoc = document.querySelector("#location");
let submit = document.querySelector("#submit");


submit.addEventListener("click", function(event) {

event.target.matches("button");

let location = weatherLoc.value;


fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0dffd273a14a316064e1b544e7c8e115`)
    .then(response => response.json())
    .then(cities => {
        let firstCity = cities[0];
            
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&units=imperial&appid=0dffd273a14a316064e1b544e7c8e115`)
    })

    .then(response => response.json())
    .then(weatherInfo => {

       
        let realDate = dayjs.unix(weatherInfo.list[0].dt).format("MM/DD/YYYY hh:mm:ss");

        console.log(weatherInfo)
        console.log(realDate)
        console.log(weatherInfo.list[0].main.humidity)
        console.log(weatherInfo.list[0].main.temp)
        console.log(weatherInfo.list[0].wind.speed)
        console.log(weatherInfo.list[0].weather[0].icon)
    
    })

})


    //dayjs.unix(1691668800).format("MM/DD/YYYY hh:mm:ss") to get time stamps for each day. 
    // city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed. 