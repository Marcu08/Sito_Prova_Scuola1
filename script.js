const button = document.getElementById("button");

if (button) {
    button.addEventListener("click", function () {
        mostraStatisticheMonumenti();
    });
}

// Inizializza la mappa centrata su Roma
const mappa = L.map("mappa").setView([41.9028, 12.4964], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mappa);

aggiungiMonumenti(mappa);
// L'array monumenti si trova nel file monumenti.js

document.getElementById("formMonumento").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const lat = parseFloat(document.getElementById("lat").value);
    const lon = parseFloat(document.getElementById("lon").value);

    const nuovoMonumento = {
        nome: nome,
        lat: lat,
        lon: lon
    };

    monumenti.push(nuovoMonumento);

    // opzionale: aggiornare la mappa subito
    L.marker([lat, lon])
        .addTo(mappa)
        .bindPopup(nome);
});