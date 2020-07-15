import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const Card = styled.div`
  display: flex;
  margin: 20px 50px;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 300px;
  border-radius: 5px;
  background-color: #5e1d93;
  border: 2px solid #5e1d93;
  box-shadow: 0 2px 5px #000;
  color: white;
  opacity: 0;
`;

const CardTitle = styled.h3`
  text-shadow: 0 0 2px #000;
  font-size: 1.6rem;
`;

const ScoresWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Score = styled.p`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 1px #000;
`;

const StarsWrapper = styled.div`
  text-align: center;
`;
const ScoreStar = styled.i`
  color: ${({ reachedScore }) => (reachedScore ? "orange" : "grey")};
`;

const ScoreComment = styled.p`
  text-shadow: 1px solid #000;
  text-align: center;
`;

const Rating = ({ info }) => {
  const scoreNum = info["score"];

  const comment120Sign = (commentString) => {
    return commentString.substr(0, 119);
  };
  // Create five stars rating, if user has own score point star will be orange if not will be grey
  const scoreStars = (num) => {
    const fiveStars = [];
    let reachedScore = num;
    for (let i = 1; i <= 5; i++) {
      if (reachedScore) {
        fiveStars.push(
          <ScoreStar reachedScore className="far fa-star" key={uuidv4()} />
        );
        reachedScore--;
      } else if (!reachedScore) {
        fiveStars.push(<ScoreStar className="far fa-star" key={uuidv4()} />);
      }
    }
    return fiveStars;
  };

  return (
    <Card>
      <CardTitle>{info.name}</CardTitle>
      <ScoresWrapper>
        <Score>Reached Score:</Score>
        <StarsWrapper>{scoreStars(scoreNum)}</StarsWrapper>
        <ScoreComment>{comment120Sign(info.content)}</ScoreComment>
      </ScoresWrapper>
    </Card>
  );
};

export default Rating;
