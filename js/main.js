
const CALLINGJOKES = "https://icanhazdadjoke.com/";
let reportJokes = [];
let printJoke;
let date = new Date();

// Llamada a la API
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