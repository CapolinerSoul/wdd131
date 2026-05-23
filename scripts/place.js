let temp = 4;
let cond = "Cloudy";
let wind = 4.9;
let windc = 1;

document.getElementById("temp").textContent= `${temp} ℃`;
document.getElementById("cond").textContent= cond;
document.getElementById("wind").textContent= `${wind} km/h`;
function calculateWindChill(wind, temp){

windc = (13.12 + 0.6215 * temp - 11.37 * wind ** 0.16 + 0.3965 * temp * wind **0.16).toFixed(2)
}
if (temp <= 10 && wind > 4.8){
    calculateWindChill(wind, temp)
}

document.getElementById("windc").textContent= `${windc} ℃`;