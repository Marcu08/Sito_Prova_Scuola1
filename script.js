let button = document.getElementById("button");

button.addEventListener("click", function(){
    alert("ciao");

});

const luoghiFirenze = [
  {
    nome: "Duomo di Firenze",
    latitudine: 43.7731,
    longitudine: 11.2560
  },
  {
    nome: "Galleria degli Uffizi",
    latitudine: 43.7678,
    longitudine: 11.2553
  },
  {
    nome: "Ponte Vecchio",
    latitudine: 43.7680,
    longitudine: 11.2531
  },
  {
    nome: "Palazzo Pitti",
    latitudine: 43.7652,
    longitudine: 11.2502
  },
  {
    nome: "Galleria dell'Accademia",
    latitudine: 43.7761,
    longitudine: 11.2589
  }
  
];
// Inizializza la mappa centrata su Firenze
const mappa = L.map('mappa').setView([43.7696, 11.2558], 13);

 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mappa);

luoghiFirenze.forEach(function(luogo) {
    L.marker([luogo.latitudine, luogo.longitudine])
        .addTo(mappa)
        .bindPopup(luogo.nome); // mostra il nome al click
});