let apiKey = "ae94fa84f4b9b7fef0b6dcc494ea6507"
let locationEl = document.getElementById("city")
let inputel = document.getElementById("input")
let queryUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${inputel.value}&appid=${apiKey}`

document.getElementById("searchbtn").addEventListener("click", function (event) {
    event.preventDefault();
    let inputel = document.getElementById("input").value
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${inputel}&appid=${apiKey}`;
    fetch(url)
        .then(headers => headers.json())
        .then(weatherData => {
            console.log(weatherData)
        })
});
