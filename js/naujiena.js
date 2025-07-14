// naujiena.js
// Atvaizduoja vieną naujieną, leidžia šalinti ir redaguoti
const endpoint = 'http://195.14.173.10:3000/naujienos';

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

import { NaujienaTitle } from '../components/NaujienaTitle.js';
import { NaujienaContent } from '../components/NaujienaContent.js';
import { RedaguotiButton } from '../components/RedaguotiButton.js';
import { SalintiButton } from '../components/SalintiButton.js';

function renderNaujiena(naujiena) {
  const div = document.getElementById('naujiena');
  div.innerHTML = `
    ${NaujienaTitle({ title: naujiena.title})}
    ${NaujienaContent({ content: naujiena.content })}
    ${RedaguotiButton({ id: naujiena.id })}
    ${SalintiButton()}
  `;
  document.getElementById('salinti').onclick = function() {
    if (confirm('Ar tikrai norite pašalinti šią naujieną?')) {
      axios.delete(`${endpoint}/${naujiena.id}`)
        .then(() => {
          window.location.href = 'naujienos.html';
        })
        .catch(() => alert('Nepavyko pašalinti naujienos.'));
    }
  };
}

const id = getIdFromUrl();

if (id) {
  axios.get(`${endpoint}/${id}`)
    .then(res => renderNaujiena(res.data))
    .catch(() => {
      document.getElementById('naujiena').innerHTML = '<p class="text-red-600">Naujiena nerasta.</p>';
    });
} else {
  document.getElementById('naujiena').innerHTML = '<p class="text-red-600">Nenurodytas naujienos ID.</p>';
}
