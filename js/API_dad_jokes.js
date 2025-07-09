async function getDadJoke() {

    const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json'
        }
    });

    const dadJoke = await response.json();
    
    return dadJoke;
}

const medinisBajerisButton = document.getElementById('medinis-bajeris');
const pagrindinisSkyrius = document.getElementById('pagrindinis-skyrius');

medinisBajerisButton.addEventListener('click', async () => {
    const joke = await getDadJoke();
    pagrindinisSkyrius.textContent = joke.joke;
});