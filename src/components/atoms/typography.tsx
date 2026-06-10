import styled, { css } from "styled-components";
import { theme } from "./theme";

// Typography Primitives (Atoms)
export const Heading = styled.h2<{
  size?: "xl" | "lg" | "md" | "sm";
  color?: string;
}>
`
  font-family: ${theme.fonts.display};
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.color || theme.colors.white};
  letter-spacing: -0.02em;
  line-height: 1.2;

  ${(props) =>
    props.size === "xl" &&
    css`
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      line-height: 1.1;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: clamp(1.8rem, 4vw, 2.5rem);
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 1.5rem;
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 1.1rem;
      font-weight: 600;
    `}
`;

export const Text = styled.p<{
  variant?: "body" | "muted" | "small" | "mono";
  color?: string;
}>
`
  margin: 0;
  font-family: ${(props) =>
    props.variant === "mono" ? theme.fonts.mono : theme.fonts.sans};
  font-size: ${(props) =>
    props.variant === "small" || props.variant === "mono" ? "0.75rem" : "0.95rem"};
  line-height: 1.6;
  color: ${(props) => {
    if (props.color) return props.color;
    if (props.variant === "muted") return theme.colors.onSurfaceVariant;
    return theme.colors.onSurface;
  }};
  letter-spacing: ${(props) => (props.variant === "mono" ? "0.05em" : "normal")};
`;

// Badge/Tag Primitive (Atoms)
export const Badge = styled.span<{ variant?: "cyan" | "blue" | "dark" | "red" | "green" }>
`
  font-family: ${theme.fonts.mono};
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-style: solid;
  border-width: 1px;

  ${(props) => {
    switch (props.variant || "dark") {
      case "cyan":
        return css`
          background: rgba(0, 220, 229, 0.08);
          color: ${theme.colors.cyberCyan};
          border-color: rgba(0, 220, 229, 0.2);
        `;
      case "blue":
        return css`
          background: rgba(92, 213, 246, 0.08);
          color: ${theme.colors.reactBlue};
          border-color: rgba(92, 213, 246, 0.2);
        `;
      case "red":
        return css`
          background: rgba(255, 95, 86, 0.08);
          color: ${theme.colors.danger};
          border-color: rgba(255, 95, 86, 0.2);
        `;
      case "green":
        return css`
          background: rgba(39, 201, 63, 0.08);
          color: ${theme.colors.success};
          border-color: rgba(39, 201, 63, 0.2);
        `;
      case "dark":
      default:
        return css`
          background: #1c2024;
          color: rgba(255, 255, 255, 0.6);
          border-color: ${theme.colors.borderDark};
        `;
    }
  }}
`;
