export const getScoreByPercent = (score, totalScore) => {
  return (score / totalScore) * 100;
};

export const getAngleUsingScore = (score, totalScore) => {
  const scorePercent = getScoreByPercent(score, totalScore);
  const scorePercentByDeg = (scorePercent / 50) * 90;
  return -90 + scorePercentByDeg;
};
