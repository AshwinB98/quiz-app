import { useNavigate } from "react-router-dom";
import { ReactComponent as UpraisedLogo } from "../../assets/home/upraised-logo.svg";
import Button from "../../atoms/common/button";
import Title from "../../components/home/title/title.component";
import { HomeContainer, LeftContainer, RightContainer } from "./home.style";

const Home = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };
  return (
    <HomeContainer>
      <LeftContainer>
        <h1>Upskill yourself.</h1>
        <h2>You're ready. Now is best time.</h2>
      </LeftContainer>
      <RightContainer>
        <UpraisedLogo />
        <Title />
        <Button name={"startBtn"} type={"button"} onClick={handleStartQuiz}>
          Start quiz
        </Button>
      </RightContainer>
    </HomeContainer>
  );
};
export default Home;
