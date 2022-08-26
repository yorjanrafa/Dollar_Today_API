import { data } from "./data.js";

console.log(data);
let trend = document.querySelector("#trend");
let price = document.querySelector("#price");

let parent = document.querySelector("table");

function createNode(origin, price) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let b   = document.createElement("b");
  let td2 = document.createElement("td");

  b.appendChild(document.createTextNode(origin))
  td2.appendChild(document.createTextNode(price))
  td1.appendChild(b)
  tr.appendChild(td1)
  tr.appendChild(td2)
  return tr;
}

let sites = {
  "enparalelovzla":function () { return createNode(this.id, this.format.rate)},
  "bcv": function () { return createNode(this.id, this.format.rate)},
  "monitor-dolar": function () { return createNode(this.id, this.format.rate)},
  "banco-de-venezuela": function () { return createNode(this.id, this.format.rate)},
  "dolartoday": function () { return createNode(this.id, this.format.rate)},
  "banco-mercantil": function () { return createNode(this.id, this.format.rate)},
  "banco-bbva-provincial": function () { return createNode(this.id, this.format.rate)},
  "banco-banesco": function () { return createNode(this.id, this.format.rate)},
  "monedero-paypal": function () { return createNode(this.id, this.format.rate)},
  "reserve": function () { return createNode(this.id, this.format.rate)},
} 

async function apiDollarFetch() {
  return await fetch(
    "https://exchangemonitor.net/api/ve?user=YORJAN_200822&token=JHtygv65g5j8w0fy1DoP&currency=USD&filter-group"
  )
    .then((res) => res.json())
    .then((response) =>
      response.data.forEach((e) => {
        console.log(response)
        if (sites[e.id]){ 
        parent.appendChild(createNode(e.id, e.format.rate));

}})
    ) // convertir a json
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores
}

apiDollarFetch()
// let datajson = apiDollarFetch();
// console.log(datajson);
// setTimeout(function () {
//   console.log(datajson["USD"]);
// }, 2000);

// let parent = document.querySelector("table");

// function createNode(origin, price) {
//   let tr = document.createElement("tr");
//   let td1 = document.createElement("td");
//   let b   = document.createElement("b");
//   let td2 = document.createElement("td");

//   b.appendChild(document.createTextNode(origin))
//   td2.appendChild(document.createTextNode(price))
//   td1.appendChild(b)
//   tr.appendChild(td1)
//   tr.appendChild(td2)
//   return tr;
// }

// data.forEach((e) => {
//   parent.appendChild(createNode(e.id, e.format.rate));
// });

// let parent = document.querySelector("table");

// function createNode(origin, price) {
//   let tr = document.createElement("tr");
//   let td1 = document.createElement("td");
//   let b   = document.createElement("b");
//   let td2 = document.createElement("td");

//   b.appendChild(document.createTextNode(origin))
//   td2.appendChild(document.createTextNode(price))
//   td1.appendChild(b)
//   tr.appendChild(td1)
//   tr.appendChild(td2)
//   return tr;
// }

// data.forEach((e) => {
//   parent.appendChild(createNode(e.id, e.format.rate));
// });
