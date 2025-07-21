const { default: axios } = require("axios");

const naujaUzduotis = {
    userID: 1,
    id: 101,
    title: 'Mano nauja uzduotis',
    body: 'Reikia uzsakyti picos',
    completed: false,
    jonas: 'petras'
};

axios.post('https://jsonplaceholder.typicode.com/posts', naujaUzduotis)
    .then(response => {console.log('Response: ', response.data) })
    .catch(error => {console.error('Error:', error) })
