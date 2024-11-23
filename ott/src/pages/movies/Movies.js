import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const [heroMovie, setHeroMovie] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [categories, setCategories] = useState({});
  const [moviesByLanguage, setMoviesByLanguage] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3004/movies/list')
      .then(response => response.json())
      .then(data => {
        setHeroMovie(data.hero);
        setTrendingMovies(data.trending);
        setCategories(data.categories);
        setMoviesByLanguage(data.movies);
        setIsLoading(false);
      })
      .catch(err => {
        setError('Error fetching movie data');
        setIsLoading(false);
      });
  }, []);

  const handlePlayClick = (videoURL) => {
    navigate('/video-player', { state: { url: videoURL } });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {/* Hero Movie Section */}
      {heroMovie && (
        <div className="hero-movie" style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
          <h1>{heroMovie.title}</h1>
          <img src={heroMovie.thumbnail} alt={heroMovie.title} style={{ width: "300px" }} />
          <p>{heroMovie.description}</p>
          <p><strong>Category:</strong> {heroMovie.category}</p>
          <p><strong>Rating:</strong> {heroMovie.rating}</p>
          <p><strong>Release Year:</strong> {heroMovie.releaseYear}</p>
          <button onClick={() => handlePlayClick(heroMovie.videoURL)}>Play</button>
        </div>
      )}

      {/* Trending Movies Section */}
      <div className="trending-movies">
        <h2>Trending Movies</h2>
        <ul>
          {trendingMovies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.thumbnail} alt={movie.title} style={{ width: "200px" }} />
              <p>{movie.description}</p>
              <p><strong>Category:</strong> {movie.category}</p>
              <p><strong>Rating:</strong> {movie.rating}</p>
              <p><strong>Release Year:</strong> {movie.releaseYear}</p>
              <button onClick={() => handlePlayClick(movie.videoURL)}>Play</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Category-wise Movies Section */}
      <div className="categories">
        <h2>Movies by Category</h2>
        {Object.keys(categories).map((category) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {categories[category].map((movie) => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img src={movie.thumbnail} alt={movie.title} style={{ width: "200px" }} />
                  <p>{movie.description}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                  <button onClick={() => handlePlayClick(movie.videoURL)}>Play</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Movies by Language Section */}
      <div className="movies-by-language">
        <h2>Movies by Language</h2>
        {Object.keys(moviesByLanguage).map((language) => (
          <div key={language}>
            <h3>{language.charAt(0).toUpperCase() + language.slice(1)}</h3>
            <ul>
              {moviesByLanguage[language].map((movie) => (
                <li key={movie.id}>
                  <h3>{movie.title}</h3>
                  <img src={movie.thumbnail} alt={movie.title} style={{ width: "200px" }} />
                  <p>{movie.description}</p>
                  <p><strong>Rating:</strong> {movie.rating}</p>
                  <p><strong>Release Year:</strong> {movie.releaseYear}</p>
                  <button onClick={() => handlePlayClick(movie.videoURL)}>Play</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
