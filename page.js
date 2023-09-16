<!DOCTYPE html>
<html>
<head>
  <title>Movie Website</title>
  <link rel="stylesheet" href="styles.css">
  <script src="script.js"></script>
</head>
<body>
  <h1>Top 10 Movies</h1>
  <div class="movie-grid" id="movieGrid"></div>

  <script>
    // Function to fetch movie data from TMDB API
    async function fetchMovies() {
      const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=YOUR_API_KEY');
      const data = await response.json();
      return data.results;
    }

    // Function to populate the movie grid
    async function populateMovieGrid() {
      const movies = await fetchMovies();
      const movieGrid = document.getElementById('movieGrid');

      movies.slice(0, 10).forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const moviePoster = document.createElement('img');
        moviePoster.classList.add('movie-poster');
        moviePoster.src =   https://image.tmdb.org/t/p/w500${movie.poster_path}   ;
        moviePoster.alt = movie.title;

        const movieTitle = document.createElement('h2');
        movieTitle.classList.add('movie-title');
        movieTitle.textContent = movie.title;

        const movieReleaseDate = document.createElement('p');
        movieReleaseDate.classList.add('movie-release-date');
        movieReleaseDate.textContent =   Release Date: ${movie.release_date}  ;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);
        movieCard.appendChild(movieReleaseDate);

        movieGrid.appendChild(movieCard);
      });
    }

    // Call the function to populate the movie grid
    populateMovieGrid();
  </script>
</body>
</html>
