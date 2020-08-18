import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-secondary);
  /* margin-left: 20px;   */
  margin: 50px 20px;
`

export const Title = styled.h1`
  color: var(--color-secondary);
`

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 30px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    padding: 18px;    
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-primary); 
    border-radius: 10px;
  }

`

export const RowPoster = styled.div `
  width: 100%; 
  
  img {
    object-fit: contain;
    max-width: 250px;
    transition: transform 450ms;
  }

  img:hover {
    transform: scale(1.20);
  }

  .row-posterLarge {
    max-height: 350px;
  }

  .row-posterLarge:hover {
    transform: scale(1.10);
  } 
`
