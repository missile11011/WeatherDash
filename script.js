let apiKey = "ae94fa84f4b9b7fef0b6dcc494ea6507"
let locationEl = document.getElementById("city")
let inputel = document.getElementById("input")
document.getElementById("searchbtn").addEventListener("click", function (event) {
    event.preventDefault();
    let inputel = document.getElementById("input").value
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputel}&appid=${apiKey}`;
    localStorage.setItem("city",inputel)
    api(url)
    
});
let city = localStorage.getItem("city")
var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
api(url)
function api(url){
    fetch(url)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData)
            document.getElementById("location").textContent= weatherData.city.name
            let lat = weatherData.city.coord.lat;
            let lon =  weatherData.city.coord.lon;
            let urlone = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=&appid=${apiKey}`
            fetch(urlone)
            .then(headers => headers.json())
            .then(weatherData =>{
            console.log(weatherData)
            document.getElementById("temperture").textContent = Math.floor(weatherData.current.temp);
            let iconUrl = weatherData.current.weather[0].icon
            let icon = `http://openweathermap.org/img/wn/${iconUrl}@2x.png`
            document.getElementById("conditons").textContent = weatherData.current.weather[0].description
            document.getElementById("icon").src = icon
            document.getElementById("time").textContent = "1:00"
            document.getElementById("UVindex").textContent = "UV Index "+weatherData.current.uvi;
            document.getElementById("windspeed").textContent = "windseed "+weatherData.current.wind_speed
            document.getElementById("humidity").textContent = "humidity" + weatherData.current.humidity + "%"
            for (let i = 0; i < weatherData.daily.length; i++) {
                let dailyforcast = document.getElementById("daily"+i)
                let icon = weatherData.daily[i].weather[0].icon
                let iconurl=`http://openweathermap.org/img/wn/${icon}@2x.png`
                dailyforcast.getElementsByTagName("h3")[0].textContent = moment.unix(weatherData.daily[i].dt).utc().format("MM/DD/YYYY")
                dailyforcast.getElementsByTagName("img")[0].src = iconurl
                dailyforcast.getElementsByClassName("hi")[0].textContent = "hi "+Math.floor(weatherData.daily[i].temp.max);
                dailyforcast.getElementsByClassName("lo")[0].textContent = "lo " +Math.floor(weatherData.daily[i].temp.min);
                dailyforcast.getElementsByClassName("wind")[0].textContent = "windspeed "+ weatherData.daily[i].wind_speed;
                dailyforcast.getElementsByClassName("humidity")[0].textContent = "humidity" + weatherData.daily[i].humidity + "%"
                console.log(dailyforcast.getElementsByClassName("wind"))
                //console.log(weatherData.daily[i].wind_speed)
                console.log()
            }
            })
        })
}


