import { pokemons } from './pakemons.js';

const container = document.getElementById('pokemonsContainer');
const searchInput = document.getElementById('searchInput');

function renderPokemons(list) {
    if (list.length === 0) {
        container.innerHTML = '<div class="no-results">Ничего не найдено</div>';
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="card">
            <div class="red-badge">${item.id}</div>
            <div class="name">${item.name}</div>
            <img src="${item.img}" alt="${item.name}">
            <div class="type">${item.type}</div>
            <div class="info">Candy count: ${item.candy}</div>
            <div class="info">${item.weight}</div>
            <div class="weaknesses">${item.weaknesses}</div>
            <div class="time">${item.time}</div>
        </div>
    `).join('');
}

// Живой поиск при вводе текста
searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase().trim();
    const filtered = pokemons.filter(item => 
        item.name.toLowerCase().includes(text) ||
        item.type.toLowerCase().includes(text)
    );
    renderPokemons(filtered);
});

// Первоначальный вывод всех карточек
renderPokemons(pokemons);