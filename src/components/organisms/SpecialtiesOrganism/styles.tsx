import styled from "styled-components";
import { theme } from "../../atoms";

export const SpecBlockSection = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
  background: ${theme.colors.bgDarkSec};
`;

export const SpecCard = styled.div<{ cols?: number }>`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 8px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-sizing: border-box;
  grid-column: span ${(props) => props.cols || 1};
  transition: all 0.3s;

  &:hover {
    border-color: rgba(0, 220, 229, 0.2);
  }
`;

export const InteractiveBlock = styled.div`
  background: rgba(16, 20, 23, 0.9);
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.borderDark};
  box-sizing: border-box;
`;

export const ColorDotSelector = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "bg",
})<{ bg: string; active?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  border: 2px solid ${(props) => (props.active ? theme.colors.white : "transparent")};
  cursor: pointer;
  padding: 0;
`;
