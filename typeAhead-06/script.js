const jsonData =
	'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(jsonData)
	.then((info) => info.json())
	.then((data) => cities.push(...data));

const searchInput = document.querySelector('.search');
const list = document.querySelector('.list');

function findMatches(wordToMatch, cities) {
	return cities.filter((place) => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
}

function displayMatches() {
	const matches = findMatches(this.value, cities);
	const html = matches
		.map((place) => {
			return `<li>
        <span>city: ${place.city}, state: ${place.state}</span>
        </li>`;
		})
		.join('');
	list.innerHTML = html;
}

searchInput.addEventListener('keyup', displayMatches);
