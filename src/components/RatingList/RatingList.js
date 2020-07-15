import React, { useContext, useRef, useEffect } from "react";
import { RatingsContext } from "../../context/RatingsContext";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import AverageScore from "../AverageScore/AverageScore";
import ShowButton from '../Buttons/ShowButton';
import gsap from 'gsap';

const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const CardsWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`

const RatingList = () => {
  const { ratings } = useContext(RatingsContext);
  const cardsRef = useRef();

  

  useEffect(() => {
    if(ratings.length) {
      const cardsWrapper = cardsRef.current;
      const cardsArr = [...cardsWrapper.children];
      const tl = gsap.timeline();
      gsap.set(cardsArr,{autoAlpha: 0});
      tl.to(cardsArr, {autoAlpha: 1, stagger: 0.2, duration: 3, });
    }
  },)

  

  const ratingCards = ratings
    ? ratings.map((rating) => {
        return <Rating info={rating} key={rating.recordId} />;
      })
    : null;

  return (
    <Wrapper>
      <AverageScore ratings={ratings} />
      <ShowButton />
      <CardsWrapper ref={cardsRef}>
        {ratingCards}
      </CardsWrapper>
    </Wrapper>
  );
};

export default RatingList;
