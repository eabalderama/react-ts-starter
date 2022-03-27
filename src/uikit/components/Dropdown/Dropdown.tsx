import React from "react";
import styled from "styled-components";
import { DropdownProps, PositionProps, Position } from "./types";

const getLeft = ({ position, isMobile }: PositionProps) => {
  if (position === "top-right") {
    return "100%";
  }

  return "auto";
};

const getBottom = ({ position }: PositionProps) => {
  if (position === "top" || position === "top-right") {
    return "100%";
  }
  return "auto";
};

const DropdownContent = styled.div<{ position?: Position, isMobile?: boolean, targetKey?: React.Key | null}>`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  ${({ isMobile, targetKey }) => (!isMobile ? '' : (targetKey==='More' ? `transform: translate(-68%, 0)` : '') )};
  left: ${getLeft};
  bottom: ${getBottom};
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.level1};
  padding: 6px;
  max-height: 400px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.radii.small};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
`;

const Dropdown: React.FC<DropdownProps> = ({ target, position = "bottom", children, isMobile }) => {

  return (
    <Container>
      {target}
      <DropdownContent targetKey={target.key} isMobile={isMobile} position={position}>{children}</DropdownContent>
    </Container>
  );
};
Dropdown.defaultProps = {
  position: "bottom",
};

export default Dropdown;
