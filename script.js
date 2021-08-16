let apiKey = "ae94fa84f4b9b7fef0b6dcc494ea6507"
let locationEl = document.getElementById("city")
let inputel = document.getElementById("input")
//let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputel.value}&appid=${apiKey}`

document.getElementById("searchbtn").addEventListener("click", function (event) {
    event.preventDefault();
    let inputel = document.getElementById("input").value
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputel}&appid=${apiKey}`;
    fetch(url)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData)
            document.getElementById("location").textContent= weatherData.city.name
            let lat = weatherData.city.coord.lat;
            let lon =  weatherData.city.coord.lon;
            let urlone = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=${apiKey}`
            fetch(urlone)
            .then(headers => headers.json())
            .then(weatherData =>{
            console.log(weatherData)
            document.getElementById("temperture").textContent = Math.floor(weatherData.current.temp*1.8-459.67);
            document.getElementById("conditons").textContent = weatherData.current.weather[0].description
            document.getElementById("time").textContent = "1:00"
            })
        })
});


    

