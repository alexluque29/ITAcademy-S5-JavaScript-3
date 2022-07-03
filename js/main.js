
const CALLINGJOKES = "https://icanhazdadjoke.com/";
const CALLINGWEATHER = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/307297?apikey=jDRJs43fxDcQlMD5etovQZTl7GXiJozS";
const CALLINGCHUCK = "https://api.chucknorris.io/jokes/random"
let reportJokes = [];
let printJoke, printIcon, printTemp;
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
    document.getElementById("rateok").style.visibility = "visible";
    document.getElementById("rateok").innerHTML = `Thanks for rating (<b>${score}</b>)`;
    console.table(reportJokes)
}

// Llamada a la API Meteo
let loadApiWeather = async() =>{
    try{
let response = await fetch(CALLINGWEATHER);
const data = await response.json();
let tempF = data.DailyForecasts[0].Temperature.Maximum.Value;
printIcon = data.DailyForecasts[0].Day.Icon;
printTemp = ((tempF - 32) * 5/9).toFixed(1);
let icono =  `<img src="./image/${printIcon}.png">`;
document.getElementById("icono").innerHTML = icono;
document.getElementById("temp").innerHTML = `Max ºC: <b>${printTemp} </b>`;
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
    document.getElementById("rateok").style.visibility = "hidden";
    toggle ? loadApi() : loadChuck();
    toggle = !toggle;
}
