import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

function AboutMovies() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const { title, opening_crawl, release_date, director, producer } = data;

        const movie = {
          id,
          title,
          director,
          producer,
          sinopse: opening_crawl,
          image:
            'https://t.ctcdn.com.br/nk5I-7PNdu6QZCLisf7ws6M5DiE=/512x288/smart/filters:format(webp)/i571972.jpeg',
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <div className='movie'>
      <img className='movie-img' src={movie.image} alt={movie.sinopse} />
      <div className='sobre'>
        <h1 className='sobre-title'>{movie.title}</h1>
        <span className='sobre-sinopse'>Sinopse: {movie.sinopse}</span>
        <span className='sobre-director'>Director: {movie.director}</span>
        <span className='sobre-producer'>Producer: {movie.producer}</span>
        <span className='sobre-date'>Realease Date: {movie.releaseDate}</span>

        <Link to='/movies'>
          <button className='sobre-button'>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default AboutMovies;
