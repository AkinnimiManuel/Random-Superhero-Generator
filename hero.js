const SUPERHERO_TOKEN = '6681899525193539';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const bodyTag = document.querySelector('body');
const button = document.getElementById('button');
const HeroimgDiv = document.getElementById('hero-image');
const SearchHero = document.getElementById('Search-button');
const searchInput = document.getElementById('input');

const ShowHeroInfo = (character) => {
	const name = `<h2>${character.name}</h2>`;
	const img = `<img src = "${character.image.url}" height = 300 weight = 300/>`;

	const stats = Object.keys(character.powerstats).map((stat) => {
		return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`;
	});

	HeroimgDiv.innerHTML = `${name}${img} ${stats} `;
};

const GetRandomHero = (id, name) => {
	fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json())
		.then((json) => {
			const superhero = json;
			ShowHeroInfo(superhero);
		});
};

const GetSearchedHero = (name) => {
	fetch(`${BASE_URL}/search/${name}`)
		.then((response) => response.json())
		.then((json) => {
			const hero = json.results[0];
			ShowHeroInfo(hero);
		});
};
SearchHero.onclick = () => GetSearchedHero(searchInput.value);

const randomHero = () => {
	let random = Math.floor(Math.random() * 731) + 1;
	return random;
};

button.onclick = () => {
	GetRandomHero(randomHero());
};
