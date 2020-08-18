import React, { useState, useEffect } from 'react';
import { AiFillLike, AiOutlineInfoCircle } from 'react-icons/ai';
import api from '../../services/api';
import requests from '../../services/requests'
import { Container, Content, Title, BannerButton, Description, FadeButton, Info } from './styles';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  const backgroundImage = {
    image: movie?.backdrop_path,
  }

  return (
    <Container background={backgroundImage}>
      <Content>
        <Title>
          {movie?.title || movie?.name || movie?.original_name}
        </Title>
        
        <Description>
          {movie?.overview}
        </Description>

        <Info>
          <div>
            <p>IMDB: <span> {movie?.vote_average}</span> </p>
          </div>
          <div>
            <p>Popularity: <span>{ Math.ceil(movie?.popularity)}%</span></p>
          </div>
          <div>
            <p><AiFillLike size={30} /> <span>{movie?.vote_count}</span></p>
          </div>          
        </Info>

        <BannerButton>
          <AiOutlineInfoCircle size={30} />
          <span>More info</span>          
        </BannerButton>
        
      </Content>
      <FadeButton />
    </Container>
  )
}

export default Banner;