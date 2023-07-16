import { useNavigate } from "react-router-dom";
import { ReactComponent as UpraisedLogo } from "../../assets/home/upraised-logo.svg";
import Button from "../../atoms/common/button";
import Title from "../../components/home/title/title.component";
import { ContentContainer, HomeContainer } from "./home.style";

const Home = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };
  return (
    <HomeContainer>
      <ContentContainer>
        <UpraisedLogo />
        <Title />
        <Button name={"startBtn"} type={"button"} onClick={handleStartQuiz}>
          Start quiz
        </Button>
      </ContentContainer>
    </HomeContainer>
  );
};
export default Home;
