// Rest of your JavaScript code

async function populateMovieGrid() {
  try {
    const movies = await fetchMovies();
    const movieGrid = document.getElementById('movieGrid');

    movies.slice(0, 10).forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.setAttribute('data-testid', 'movie-card');

      const moviePoster = document.createElement('img');
      moviePoster.classList.add('movie-poster');
      moviePoster.src =   https://image.tmdb.org/t/p/w500${movie.poster_path}   ;
      moviePoster.alt = movie.title;
      moviePoster.setAttribute('data-testid', 'movie-poster');

      const movieTitle = document.createElement('h2');
      movieTitle.classList.add('movie-title');
      movieTitle.textContent = movie.title;
      movieTitle.setAttribute('data-testid', 'movie-title');

      const movieReleaseDate = document.createElement('p');
      movieReleaseDate.classList.add('movie-release-date');
      movieReleaseDate.textContent =   Release Date: ${movie.release_date}  ;
      movieReleaseDate.setAttribute('data-testid', 'movie-release-date');

      movieCard.appendChild(moviePoster);
      movieCard.appendChild(movieTitle);
      movieCard.appendChild(movieReleaseDate);

      movieGrid.appendChild(movieCard);
    });
  } catch (error) {
    // Rest of your error handling code
  }
}

// Call the function to populate the movie grid
populateMovieGrid();
