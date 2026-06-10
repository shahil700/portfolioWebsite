import styled, { css } from "styled-components";
import { theme } from "./theme";

// Button Primitive (Atoms)
export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "size", "fullWidth"].includes(prop),
})<{
  variant?: "primary" | "secondary" | "outline" | "ghost" | "execute";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}>
`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return "6px 12px";
      case "lg":
        return "16px 36px";
      case "md":
      default:
        return "10px 24px";
    }
  }};

  ${(props) => {
    switch (props.variant || "outline") {
      case "primary":
        return css`
          background: ${theme.colors.cyberCyan};
          color: ${theme.colors.black};
          border-color: ${theme.colors.cyberCyan};
          &:hover {
            background: ${theme.colors.cyberCyanHover};
            box-shadow: 0 0 15px rgba(0, 220, 229, 0.4);
            transform: translateY(-1px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case "execute":
        return css`
          background: ${theme.colors.cyberCyan};
          color: ${theme.colors.black};
          border-color: ${theme.colors.cyberCyan};
          font-weight: 700;
          &:hover {
            background: ${theme.colors.cyberCyanHover};
            box-shadow: 0 0 15px rgba(0, 220, 229, 0.4);
          }
        `;
      case "secondary":
        return css`
          background: rgba(255, 255, 255, 0.02);
          color: ${theme.colors.white};
          border-color: ${theme.colors.borderDark};
          &:hover {
            border-color: ${theme.colors.cyberCyan};
            background: rgba(0, 220, 229, 0.05);
            transform: translateY(-1px);
          }
          &:active {
            transform: translateY(0);
          }
        `;
      case "ghost":
        return css`
          background: transparent;
          color: rgba(255, 255, 255, 0.6);
          border-color: transparent;
          &:hover {
            color: ${theme.colors.white};
            background: rgba(255, 255, 255, 0.05);
          }
        `;
      case "outline":
      default:
        return css`
          background: transparent;
          color: ${theme.colors.white};
          border-color: rgba(255, 255, 255, 0.2);
          &:hover {
            border-color: ${theme.colors.cyberCyan};
            background: rgba(0, 220, 229, 0.05);
          }
        `;
    }
  }}
`;
