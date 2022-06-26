
const CALLINGJOKES = "https://icanhazdadjoke.com/";

const loadApi = async() =>{
    try{
const response = await fetch(CALLINGJOKES, {
    headers: {
        'Accept': "application/json"
    }
    });
const data = await response.json();
console.log (data.joke);

} catch(error){
    console.log(error);
}
}