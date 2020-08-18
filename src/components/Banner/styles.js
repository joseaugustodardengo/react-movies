import styled from 'styled-components';

export const Container = styled.header`
  color: #fff;
  object-fit: contain;
  height: 648px;
  background-size: "cover";
  background-image: url(
    "https://image.tmdb.org/t/p/original${props => props.background.image}"
  );
  background-position: "center top";
`

export const Content = styled.div`
  margin-left: 150px;
  padding-top: 140px;
  height: 190px;  
`

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  padding-bottom: 0.3rem;
`

export const Description = styled.h2`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 400;
  font-size: 1rem;
  max-width: 360px;
  height: 80;
`

export const Info = styled.div`
  max-width: 360px;
  left: 0;  
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  div {
    display: flex;    
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 16px;
  }

  span {
    font-size: 22px;
    font-weight: 700;
  }
`

export const BannerButton = styled.button`
  width: fit-content;
  display: flex;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.5vw;
  padding: 1rem 2rem;  
  margin: 20px 1rem;
  font-size: 20px;
  background-color: var(--color-primary);
  justify-content: space-between;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  /* &:hover {
    color: var(--color-primary);
    background-color: var(--color-secondary);
    transition: all 0.2s;
  } */
`

export const FadeButton = styled.div`
  height: 29rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`

