let currentPage = 1;

function FetchMovie(page) {
    let url = `https://dashboard.ucqire.com/api/all-movies`;
    if (page > 1) {
        url += `?page=${page}`;
    }

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            return response.json();
        })
        .then(data => {
            let movieDiv = document.querySelector('.movie-card');
            data.forEach(movie => {
                const movieElement = createMovieElement(movie);
                movieDiv.appendChild(movieElement);
            });

            
            if (data.length > 0) {
                currentPage++;
            }
        })
        .catch(error => {
            console.log("Can't fetch data:", error);
        });
}

function createMovieElement(movie) {
    const movieId = document.createElement("div");
    movieId.classList.add('MovieId');
    const firstTwoGenres = movie.janri.replace(/[\[\]']+/g, '').split(',').slice(0, 2).join(', ');
    movieId.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title_geo}">
        <div class="MovieId-info">
            <h1 class="title_geo">${movie.title_geo}</h1>
            <p class="title_eng">${movie.title_eng}</p>
            <p class="janro">${firstTwoGenres}</p>
        </div>
    `;
    return movieId;
}

window.addEventListener('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        FetchMovie(currentPage);
    }
});

document.addEventListener("DOMContentLoaded", () => FetchMovie(currentPage));