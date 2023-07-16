import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Questions from "../../components/quiz/questions/questions.component";
import { OuterContainer } from "./quiz.style";

const Quiz = () => {
  return (
    <OuterContainer>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
      />
      <Questions />
    </OuterContainer>
  );
};

export default Quiz;
