import { styled } from "styled-components";

const Button = ({ children, type, name, disabled }) => {
  return (
    <StyledButton disabled={disabled} name={name} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  padding: 1rem;
  border: 0;
  background-color: rgb(255, 117, 4);
  color: white;
  font-weight: bold;
  border-radius: 1.625rem;
  cursor: pointer;
  &:disabled {
    background-color: rgba(171, 172, 174, 0.7);
    cursor: not-allowed;
  }
`;
