const weather = document.querySelector(".js-weather");

const COORDS_LS = "coords";
const apiKey = "8cffe9424e070bec4cc0b2103545c44b";

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}` 
    });
};

function saveCoords(coordsObj){
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }; 
    saveCoords(coordsObj);   
    getWeather(latitude, longitude);
}

function handleGeoErr(){
    console.log(`위치 정보를 불러 올 수 없습니다.`);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErr);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null){
        askForCoords()
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();