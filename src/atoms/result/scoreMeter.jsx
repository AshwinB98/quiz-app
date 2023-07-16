import { useMemo } from "react";
import { styled } from "styled-components";
import { ReactComponent as Speedometer } from "../../assets/result/speedometer.svg";
import { getAngleUsingScore, getScoreByPercent } from "../../utils/util";

const ScoreMeter = ({ score, totalScore }) => {
  const scorePercentage = useMemo(() => {
    return getScoreByPercent(score, totalScore);
  }, [score, totalScore]);
  const angle = useMemo(() => {
    return getAngleUsingScore(score, totalScore);
  }, [score, totalScore]);

  return (
    <>
      <StyledSpeedometer
        $angle={angle || -90}
        height={"14rem"}
        width={"14rem"}
      />
      <ScorePercent>{`${scorePercentage || 0}%`}</ScorePercent>
    </>
  );
};

const StyledSpeedometer = styled(Speedometer)`
  .needle {
    transform: ${({ $angle }) => `rotate(${$angle}deg)`};
    transform-origin: 15.625rem 15.625rem;
    transition: transform 3s ease-in-out;
  }
`;

const ScorePercent = styled.h1`
  position: absolute;
  font-weight: 900;
`;

export default ScoreMeter;
