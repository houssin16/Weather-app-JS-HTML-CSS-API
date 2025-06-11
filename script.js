const IPAkey  = "5bf88a0582822b955dfecda7dbf032dd"
const APIURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const InPUt = document.querySelector('.search input')
const Serachbtn = document.querySelector('.search button')
const iCon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
async function Aksour(Aksour) {;
    const response = await  fetch(APIURL + (Aksour) + `&appid=${IPAkey}`);
    var Aksour = await response.json();    

console.log(Aksour);

document.querySelector('.city').innerHTML =( Aksour.name)
document.querySelector('.temp').innerHTML = (Math.round(Aksour.main.temp) + "°c")
document.querySelector('.humidity').innerHTML = (Aksour.main.humidity) + "%"
document.querySelector('.wind').innerHTML =( Aksour.wind.speed + " km/h")


              if (Aksour.weather[0].main == "Clouds") {

                iCon.src = "clouds.PNG"
              }
              else if (Aksour.weather[0].main == "Clear") {
                iCon.src = "the sun.jpg"
              }
              else if (Aksour.weather[0].main == "Rain") {
                iCon.src = "rain.WEBP "
                
              }
              else if (Aksour.weather[0].main == "Drizzle") {
                iCon.src = "Drizzle.PNG"
              }
              else if (Aksour.weather[0].main =="Mist") {
          
             iCon.src = "mist.png"
                
              }
            

                weather.style.display = "block" 
                
            
} 


Serachbtn.addEventListener('click' , ()=>{
Aksour(InPUt.value)


setTimeout(() => {
  weather.style.display = "none" 
}, 3000);

})
var real = document.getElementById('real')
document.getElementById('button').onclick = function(){

 setTimeout(() => {
   real.value =""
 }, 2000);
}
































