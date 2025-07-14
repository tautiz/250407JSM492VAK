// naujienos_kurimas.js
// Sukuria arba redaguoja naujieną
const endpoint = 'http://195.14.173.10:3000/naujienos';

function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

const form = document.getElementById('naujiena-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const formTitle = document.getElementById('form-title');
const id = getIdFromUrl();

if (id) {
  // Redagavimas
  formTitle.textContent = 'Redaguoti naujieną';
  axios.get(`${endpoint}/${id}`)
    .then(res => {
      titleInput.value = res.data.title;
      contentInput.value = res.data.content;
    })
    .catch(() => alert('Nepavyko gauti naujienos duomenų.'));
}

form.onsubmit = function(e) {
  e.preventDefault();
  const data = {
    title: titleInput.value,
    content: contentInput.value
  };
  if (id) {
    // Redaguoti
    axios.put(`${endpoint}/${id}`, data)
      .then(() => window.location.href = `naujiena.html?id=${id}`)
      .catch(() => alert('Nepavyko atnaujinti naujienos.'));
  } else {
    // Kurti
    axios.post(endpoint, data)
      .then(() => window.location.href = 'naujienos.html')
      .catch(() => alert('Nepavyko sukurti naujienos.'));
  }
};
