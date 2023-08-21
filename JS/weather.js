alert(globalVariable.x);

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${globalVariable.x}&units=metric`;
    console.log(url);
    fetch(url).then((response) => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerHTML = data.name;
        city.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    console.log(hello);
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);