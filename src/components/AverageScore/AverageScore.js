import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 3px solid #5e1d93;
  color: #5e1d93;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #000;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  color: #5e1d93;
  text-shadow: 0 0 2px #000;
`;

const ScoresWrapper = styled.div`
  display: flex;
  margin: 0 0 0 50px;
  @media (max-width: 768px) {
    padding: 10px;
    margin: 0 0 30px;
    text-align: center;
  }
`;

const ScStar = styled.i`
  color: ${({ reachedScore }) => (reachedScore ? "orange" : "grey")};
`;

const AverageScore = ({ ratings }) => {
  

  const averageSc = () => {
    const scoresArr = ratings.map((rating) => {
      return rating.score;
    });
    const sumScore = scoresArr.reduce((num, currentValue) => {
      return num + currentValue;
    }, 0);
    const average = parseInt(sumScore / scoresArr.length);

    return average;
  };

  const reachedStars = (callback) => {
    const stars = [];
    let roundedScore = callback();
    for (let i = 1; i <= 5; i++) {
      if (roundedScore) {
        stars.push(
          <ScStar reachedScore className="fas fa-star" key={uuidv4()} />
        );
        roundedScore--;
      } else if (!roundedScore) {
        stars.push(<ScStar className="fas fa-star" key={uuidv4()} />);
      }
    }

    return stars;
  };

  return (
    <Wrapper>
      <Title>
        AVERAGE SCORE:
      </Title>
      <ScoresWrapper>{reachedStars(averageSc)}</ScoresWrapper>
    </Wrapper>
  );
};

export default AverageScore;
