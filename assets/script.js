let weatherLoc = document.querySelector("#location");
let submit = document.querySelector("#submit");
let city = document.querySelector("#currentCity");
let date = document.querySelector("#currentDate");
let temp = document.querySelector("#currentTemp")
let humidity = document.querySelector("#currentHum");
let wind = document.querySelector("#currentWind");
let firstCity = "";
let iconLink = document.querySelector("img");
let realDate = "";
let icon = "";
let fiveDayForcast = document.querySelector("#forecast");
let cityBtn = document.querySelector("#cityList");
let newBtn = document.createElement("button")
let citiesSearched = localStorage.getItem || [];




submit.addEventListener("click", function (event) {

    event.target.matches("submit");

    let location = weatherLoc.value;


    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0dffd273a14a316064e1b544e7c8e115`)
        .then(response => response.json())
        .then(cities => {
            let firstCity = cities[0];
            city.textContent = firstCity.name;

            return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&units=imperial&appid=0dffd273a14a316064e1b544e7c8e115`)



        })

        .then(response => response.json())
        .then(response => {
            console.log(response.list)
        
            let weatherInfo = response.list

            console.log(weatherInfo);
            
            realDate = dayjs.unix(weatherInfo[0].dt).format("MM/DD/YYYY");
            date.textContent = realDate;
            humidity.textContent = "Humidity: " + weatherInfo[0].main.humidity + " %"
            temp.textContent = "Temp: " + weatherInfo[0].main.temp + "\u00B0F";
            wind.textContent = " Wind: " + weatherInfo[0].wind.speed + " MPH";

            icon = weatherInfo[0].weather[0].icon;

            iconLink.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

            weatherInfo = response.list;
            

                for (let i = 0; i < weatherInfo.length; i+=8) {
                    

                    let containerDiv = document.createElement("div");
                    let contentDiv = document.createElement("div");
                    let fiveDayDate = document.createElement("h5");
                    let fiveDayIcon = document.createElement("img");
                    let fiveDayTemp = document.createElement("p");
                    let fiveDayWind = document.createElement("p");
                    let fiveDayHum = document.createElement("p");

                    
                    containerDiv.classList.add("card", "card-width", "row", "col-9");
                    containerDiv.classList.add("card-body");
                    fiveDayDate.classList.add("card-title");            
                    fiveDayTemp.classList.add("card-text")         
                    fiveDayWind.classList.add("card-text")
                    fiveDayHum.classList.add("card-text")

                    fiveDayForcast.appendChild(containerDiv)
                    containerDiv.appendChild(contentDiv);
                    contentDiv.appendChild(fiveDayDate);
                    contentDiv.appendChild(fiveDayTemp);
                    contentDiv.appendChild(fiveDayWind);
                    contentDiv.appendChild(fiveDayHum);
                    contentDiv.appendChild(fiveDayIcon);
                  
               
                    fiveDayDate.textContent = dayjs.unix(weatherInfo[i].dt).format("MM/DD/YYYY");
                    fiveDayTemp.textContent = "Temp: " + weatherInfo[i].main.temp + "\u00B0F";
                    fiveDayWind.textContent = " Wind: " + weatherInfo[i].wind.speed + " MPH";
                    fiveDayHum.textContent = "Humidity: " + weatherInfo[i].main.humidity + " %";

                    icon = weatherInfo[i].weather[0].icon;

                    fiveDayIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

                   console.log(fiveDayWind, fiveDayHum, fiveDayTemp)
                  
               
                  
                }
        })
   })

    
 function cityHistory(event) {
    if (event.target.matches("submit")) {

        localStorage.setItem(citiesSearched, weatherLoc.value);
    }
       
 }




