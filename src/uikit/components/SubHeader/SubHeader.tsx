import styled from "styled-components";
import Text from "../Text/Text";
import { scales, SubHeaderProps } from "./types";

const style = {
  [scales.MD]: {
    fontSize: "20px",
    fontSizeLg: "20px",
  },
  [scales.LG]: {
    fontSize: "24px",
    fontSizeLg: "24px",
  },
  [scales.XL]: {
    fontSize: "32px",
    fontSizeLg: "40px",
  },
  [scales.XXL]: {
    fontSize: "48px",
    fontSizeLg: "64px",
  },
};

const SubHeader = styled(Text).attrs({ bold: true })<SubHeaderProps>`
  font-size: ${({ scale }) => style[scale || scales.MD].fontSize};
  font-weight: 400;
  font-family: 'Bebas Neue', cursive;
  line-height: 1.1;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: ${({ scale }) => style[scale || scales.MD].fontSizeLg};
  }
`;

export default SubHeader;
