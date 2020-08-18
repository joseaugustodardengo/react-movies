import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container, Title, RowPosters, RowPoster } from './styles';

const base_url = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await api.get(fetchUrl);
      setMovies(request.data.results);      
      return request;
    };

    fetchData();
  }, [fetchUrl]);    
  
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(urlParams.get("v"));
  //       }).catch(error => console.log(error));
  //   }
  // }

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <RowPosters>
          {movies.map(movie => (
            <RowPoster key={movie.id}>
            <img
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
            </RowPoster>
          ))}
        </RowPosters>        
      </Container>
    </>
  );
}

export default Row;