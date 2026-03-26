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