let trend = document.querySelector("#trend");
let price = document.querySelector("#price");

console.log()

const up = "⬆⬆⬆";
const down = "⬇⬇⬇";

if (trend.textContent === up) {
  trend.classList.add("trend-up");
}
if (trend.textContent === down) {
  trend.classList.add("trend-down");
}

trend.textContent = "Bajando 👇👇🏻";

async function apiDollarFetch() {
  return await fetch("https://s3.amazonaws.com/dolartoday/data.json")
    .then((res) => res.json())
    .then(response => (price.textContent = response.USD.sicad1))// convertir a json
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
}

let datajson =  apiDollarFetch()
console.log(datajson)
setTimeout(function(){
    console.log(datajson['USD']);
}, 2000);

