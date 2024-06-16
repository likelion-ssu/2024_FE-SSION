import { useState } from "react";
import styled from "styled-components";

interface ToggleBtnProps {
  toggled: boolean;
}

function Toggle({ toggleTheme }: { toggleTheme: () => void }) {
  const [isToggled, setIsToggled] = useState(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <ToggleBtn onClick={handleToggle} toggled={isToggled}>
      {isToggled ? "ON" : "OFF"}
    </ToggleBtn>
  );
}

export default Toggle;

const ToggleBtn = styled.button<ToggleBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
  width: 7rem;
  height: 4rem;
  background-color: ${(props) =>
    props.toggled ? props.theme.toggleBackground : "gray"};
  color: white;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
