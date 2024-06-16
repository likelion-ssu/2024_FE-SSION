import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

function CustomDropdown({ options, onChange }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={handleToggle}>
        {options.find((option) => option.value === selectedValue)?.label}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default CustomDropdown;

const DropdownWrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
`;

const DropdownHeader = styled.div`
  position: absolute;
  top: 4rem;
  left: 10rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 4px;
  background-color: ${(props) => props.theme.dropdownBackground};
  color: ${(props) => props.theme.dropdownColor};
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 4rem;
  left: 10rem;
  width: 11%;
  border: 1px solid ${(props) => props.theme.color};
  border-radius: 4px;
  background-color: ${(props) => props.theme.dropdownBackground};
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DropdownItem = styled.li`
  padding: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.dropdownColor};
  &:hover {
    background-color: ${(props) => props.theme.background};
  }
`;
