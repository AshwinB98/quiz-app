import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { styled } from "styled-components";

const ProgressBar = ({ minValue, maxValue, value }) => {
  return (
    <CircularProgressbarWithChildren
      minValue={minValue}
      value={value}
      maxValue={maxValue}
      styles={buildStyles({
        strokeLinecap: "round",
        pathTransitionDuration: 0.5,
        pathColor: `rgb(68, 183, 123)`,
        trailColor: "#d6d6d6",
      })}
    >
      <Count>
        {value}
        <span>/{maxValue}</span>
      </Count>
    </CircularProgressbarWithChildren>
  );
};

export default ProgressBar;

const Count = styled.h1`
  font-size: 2.6rem;
  margin-top: -1.125rem;
  font-weight: 900;
  font-style: italic;
  span {
    font-size: 1.125rem;
    color: #999999;
  }
`;
