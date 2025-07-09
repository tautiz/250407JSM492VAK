async function fetchMovies(movieName = 'girls') {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${movieName}`)
    const movies = response.data;
    if (!movies || movies.length === 0) {
        throw new Error('Movie not found');
    }

    return movies;
}

function generateMovieElement(movie) {
    return `
        <div class="bg-white rounded-lg shadow p-4 mb-4">
            <h3 class="text-xl font-bold mb-2">${movie.name}</h3>
            <img src="${movie.image ? movie.image.medium : 'https://via.placeholder.com/210x295'}" alt="${movie.name}" class="mb-2">
            <p>${movie.summary ? movie.summary.replace(/<[^>]+>/g, '') : 'No summary available.'}</p>
            <p><strong>Language:</strong> ${movie.language || 'N/A'}</p>
            <p><strong>Premiered:</strong> ${movie.premiered || 'N/A'}</p>
        </div>
    `;
}

const movieButton = document.getElementById('tv-maze-button');
const mainSection = document.getElementById('tv-maze-content');

movieButton.addEventListener('click', async () => {
    const movies = await fetchMovies(document.getElementById('tv-maze-input').value);
    console.log(movies);
    mainSection.innerHTML = movies.map((movie) => generateMovieElement(movie.show) ).join('');
});
