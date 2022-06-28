
const CALLINGJOKES = "https://icanhazdadjoke.com/";
const CALLINGWEATHER = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/307297?apikey=jDRJs43fxDcQlMD5etovQZTl7GXiJozS";
const CALLINGCHUCK = "https://api.chucknorris.io/jokes/random"
let reportJokes = [];
let printJoke, printWeather, printTemp;
let date = new Date();

// Llamada a la API Chistes
let loadApi = async() =>{
    try{
let response = await fetch(CALLINGJOKES, {
    headers: {
        'Accept': "application/json"
    }
    });
const data = await response.json(); 
printJoke = data.joke;
console.log (printJoke);
document.getElementById("writeJoke").innerHTML = printJoke;
 
} catch(error){
    console.log(error);
}
}

// Creación de la clase Register
class Register {
    constructor(joke, score, date) {
        this.joke = joke;
        this.score = score;
        this.date = date;
    }
}
// Obtención de la puntuación del chiste y creación de la instancia que se añade al array.
function rate(id){
    let joke = printJoke;
    let score = id;
    let dateIso = date.toISOString();
    let newRegister = new Register (joke, score, dateIso);
    reportJokes.push(newRegister);
    console.table(reportJokes)
}

// Llamada a la API Meteo
let loadApiWeather = async() =>{
    try{
let response = await fetch(CALLINGWEATHER);
const data = await response.json();
let tempF = data.DailyForecasts[0].Temperature.Maximum.Value;
printWeather = data.DailyForecasts[0].Day.IconPhrase;
printTemp = ((tempF - 32) * 5/9).toFixed(1);
document.getElementById("meteo").innerHTML = `Barcelona, today's weather: <b>${printWeather}</b> Temp màx: <b>${printTemp} ºC.</b>`;
 
} catch(error){
    console.log(error);
}
}
// Llamada a la API Chuck Norris
let loadChuck = async() =>{
    try{
let response = await fetch(CALLINGCHUCK);  
const data = await response.json(); 
printJoke= data.value;
document.getElementById("writeJoke").innerHTML = printJoke;
 
} catch(error){
    console.log(error);
}
} 
// Intercambio de funciones al pulsar el botón de nuevo chiste
let toggle = true;
function changeFunc(){
    toggle ? loadApi() : loadChuck();
    toggle = !toggle;
}
