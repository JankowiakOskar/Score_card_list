import React, {useContext} from 'react'
import { RatingsContext } from "../../context/RatingsContext";
import styled from 'styled-components';

const Container = styled.div`
max-width: 1200px;
padding: 20px;
display:flex;
justify-content:center;
align-items:center;
`

const ShowButtonStyled = styled.button`
display: flex;
justify-content: center;
align-items:center;
color: #fff;
width: 250px;
height: 30px;
padding: 20px;
border-radius: 5px;
background-color: #3c0e56;
border: 2px solid #5e1d93;
box-shadow: 0 2px 5px #000;
font-weight:bold;
text-transform: uppercase;
cursor: pointer;
transition: 0.2s all ease-out;
outline: none;

@media (min-width: 1200px) {
  &:hover {
    background-color: rgb(27, 30, 45);
  }
}
`

const ShowButton = () => {
  const { dispatch } = useContext(RatingsContext);

  const showCards = () => {
    dispatch({ type: 'GET_TEN_RATINGS'})
  }
  return ( 
    <Container>
      <ShowButtonStyled onClick={showCards}>Display Cards</ShowButtonStyled>
    </Container>
   );
}
 
export default ShowButton;