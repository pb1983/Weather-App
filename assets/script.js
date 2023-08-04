let weatherLoc = document.querySelector("#location");
let submit = document.querySelector("#submit");


fetch("api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=")
    .then(response => response.json())
    .then(cities => {
        let firstCity = cities[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
        
        return fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key")
    })

    .then(response => response.json())
    .then(data => {

        console.log(data)
    })
