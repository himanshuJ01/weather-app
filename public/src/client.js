
const form  = document.querySelector('form');
const search = document.querySelector('input');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
const degree = document.getElementById('degree');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const wind_dir = document.getElementById('wind_dir');
const img = document.getElementById('img');
const text = document.getElementById('text');
// const img = document.getElementById('img');
// const img = document.getElementById('img');




const url = 'https://api.weatherapi.com/v1/current.json?key=1dab3192516640cda17124106240801&q=';

form.addEventListener('submit', (e)=>{
e.preventDefault();

const location = search.value;

fetch(url + location + `&aqi=yes`)
.then( response => {
    if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(data => {
    if(data.error){
          console.log("Error occure"+ data.error);
    }
    else{
        state.textContent = data.location.region+"  ,   ";
        date.textContent =new Date(data.location.localtime).getDate()+"/";
        month.textContent =new Date(data.location.localtime).getMonth()+1+"/";
        year.textContent =new Date(data.location.localtime).getFullYear();
        city.textContent = data.location.name;
        country.textContent = data.location.country;
        degree.textContent = data.current.temp_c;
        humidity.textContent = "  "+data.current.humidity;
        wind.textContent = "  "+data.current.wind_kph;
        wind_dir.textContent = "  "+data.current.wind_dir;
        img.src = data.current.condition.icon;
        text.textContent = data.current.condition.text;

    }
})
.catch(error => console.log('Error', error));

})
