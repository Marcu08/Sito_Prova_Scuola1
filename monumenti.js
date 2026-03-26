// Array globale di monumenti (Roma)
const monumenti = [
    { nome: "Colosseo", lat: 41.8902, lon: 12.4922 },
    { nome: "Fontana di Trevi", lat: 41.9009, lon: 12.4833 },
    { nome: "Pantheon", lat: 41.8986, lon: 12.4769 },
    { nome: "Piazza di Spagna", lat: 41.9059, lon: 12.4823 },
    { nome: "San Pietro", lat: 41.9022, lon: 12.4539 }
];

// Funzione per aggiungere i monumenti alla mappa
function aggiungiMonumenti(mappa) {
    monumenti.forEach(monumento => {
        L.marker([monumento.lat, monumento.lon])
            .addTo(mappa)
            .bindPopup(monumento.nome);
    });
}

// Funzione per mostrare le statistiche
function mostraStatisticheMonumenti() {
    alert("Numero di monumenti: " + monumenti.length);
}