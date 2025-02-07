import React, { useState, useEffect } from 'react'; // Importa React e useState
import axios from 'axios'; 
import './MovieGallery.css';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  const fetchMovies = async (searchTerm) => {
    try {
      setLoading(true);
      setError(null); /
      const response = await axios.get(`https://www.omdbapi.com/?apikey=fd237fa1&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError('No movies found');
      }
    } catch (error) {  
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchMovies('Harry Potter');  
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <h5>{movie.Title}</h5>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './MovieGallery.css';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  const fetchMovies = async (searchTerm) => {
    try {
      setLoading(true);
      setError(null); // Reset error
      const response = await axios.get(`https://www.omdbapi.com/?apikey=fd237fa1&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError('No movies found');
      }
    } catch (error) {  
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchMovies('Harry Potter');  
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <h5>{movie.Title}</h5>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
