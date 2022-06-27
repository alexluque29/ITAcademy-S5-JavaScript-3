
const CALLINGJOKES = "https://icanhazdadjoke.com/";
let printJoke;

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