import styled, { css } from "styled-components";
import { theme, pulseAnimation } from "./theme";

// Glow Indicator Atom
export const GlowDot = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "color",
})<{ active?: boolean; color?: string }>
`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color || theme.colors.cyberCyan};
  display: inline-block;
  position: relative;
  box-shadow: ${(props) => props.active ? `0 0 10px ${props.color || theme.colors.cyberCyan}` : "none"};
  animation: ${(props) => props.active ? css`${pulseAnimation} 1.5s infinite` : "none"};
`;
