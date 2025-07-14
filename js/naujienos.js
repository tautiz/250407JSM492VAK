import { NaujienaContent } from '../components/NaujienaContent.js';
import { NaujienaTitle } from '../components/NaujienaTitle.js';

// Atvaizduoja visas naujienas ir nuorodas į peržiūrą
const endpoint = 'http://195.14.173.10:3000/naujienos';
const list = document.getElementById('naujienos-list');

function renderNaujiena(naujienaDuomenys) {
    const div = document.createElement('div');

    div.className = 'bg-white p-4 rounded shadow flex justify-between items-center';

    div.innerHTML = `
      <div>
        ${NaujienaTitle({title: naujienaDuomenys.title, type: 2})}
        ${NaujienaContent({ content: naujienaDuomenys.content })}
      </div>
      <a href="naujiena.html?id=${naujienaDuomenys.id}" class="text-blue-600 hover:underline">Peržiūrėti</a>
    `;

    list.appendChild(div);
}

function renderNaujienos(naujienos) {
  list.innerHTML = '';
  naujienos.forEach(renderNaujiena);
}

axios.get(endpoint)
  .then(res => renderNaujienos(res.data))
  .catch(() => {
    document.getElementById('naujienos-list').innerHTML = '<p class="text-red-600">Nepavyko gauti naujienų.</p>';
  });
