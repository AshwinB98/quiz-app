import { styled } from "styled-components";
import { ReactComponent as RightArrow } from "../../assets/common/double-arrow-right.svg";
import { Box, Flexbox } from "./box";

const Button = ({
  children,
  type,
  name,
  disabled,
  onClick,
  hasIcon = false,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} name={name} type={type}>
      <BtnText $hasIcon={hasIcon}>
        <Box />
        {children}
        {hasIcon && (
          <RightArrow
            height={"1.5rem"}
            width={"1.5rem"}
            stroke="#ffffff"
            fill="#ffffff"
          />
        )}
      </BtnText>
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button`
  padding: 1rem;
  border: 0;
  background-color: rgb(255, 117, 4);
  color: white;
  font-weight: bold;
  border-radius: 1.625rem;
  font-size: 1rem;
  cursor: pointer;
  &:disabled {
    background-color: rgba(171, 172, 174, 0.7);
    cursor: not-allowed;
  }
`;

const BtnText = styled(Flexbox)`
  justify-content: ${({ $hasIcon }) => ($hasIcon ? "space-between" : "center")};
  align-items: center;
`;
