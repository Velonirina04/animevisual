const animeData = [
    {
        title: "Solo Leveling Saison 2",
        image: "images/sololeveling.jpg",
        synopsis:
            "Sung Jin-Woo poursuit son ascension et affronte des ennemis toujours plus puissants."
    },
    {
        title: "Chainsaw Man - Film",
        image: "images/chain.jpg",
        synopsis:
            "Denji reprend du service dans une nouvelle aventure explosive adaptée de l'arc Reze."
    },
    {
        title: "Jujutsu Kaisen Saison 3",
        image: "images/jjk.jpg",
        synopsis:
            "Les exorcistes affrontent de nouvelles menaces après les événements de Shibuya."
    },
    {
        title: "Dandadan Saison 2",
        image: "images/dandan.jpg",
        synopsis:
            "Momo et Okarun continuent leurs aventures paranormales pleines d'action et d'humour."
    }
];

const animeContainer = document.getElementById("animeContainer");
const searchInput = document.getElementById("searchInput");

function displayAnime(list) {
    animeContainer.innerHTML = "";

    list.forEach(anime => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="card-content">
                <h2>${anime.title}</h2>
                <p>${anime.synopsis}</p>
            </div>
        `;

        animeContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = animeData.filter(anime =>
        anime.title.toLowerCase().includes(value)
    );

    displayAnime(filtered);
});

displayAnime(animeData);