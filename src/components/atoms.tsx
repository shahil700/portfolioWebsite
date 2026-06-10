import styled, { css, keyframes } from "styled-components";

// System Theme definition
export const theme = {
  colors: {
    bgDark: "#101417",
    bgDarkSec: "#0b0f12",
    bgDarkThird: "#090b0e",
    cardDark: "#161a22",
    cardLight: "#1e2330",
    borderDark: "rgba(255, 255, 255, 0.08)",
    cyberCyan: "#00dce5",
    cyberCyanHover: "#00f5ff",
    reactBlue: "#5cd5f6",
    onSurface: "#e0e2e8",
    onSurfaceVariant: "#b9caca",
    danger: "#ff5f56",
    warning: "#ffbd2e",
    success: "#27c93f",
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: '"Geist", "Inter", sans-serif',
    mono: '"JetBrains Mono", SFMono-Regular, Consolas, monospace',
  },
};

// Keyframes
export const pulseAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const blinkAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const marqueeAnimation = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Layout Primitives (Atoms)
export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "justify", "align", "gap", "wrap", "fill"].includes(prop),
})<{
  direction?: "row" | "column";
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: "wrap" | "nowrap";
  fill?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  gap: ${(props) => props.gap || "0px"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  width: ${(props) => (props.fill ? "100%" : "auto")};
`;

export const Grid = styled.div.withConfig({
  shouldForwardProp: (prop) => !["cols", "gap", "align"].includes(prop),
})<{
  cols?: string; // e.g. "1fr 1fr"
  gap?: string;
  align?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => props.cols || "1fr"};
  gap: ${(props) => props.gap || "16px"};
  align-items: ${(props) => props.align || "initial"};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

// Typography Primitives (Atoms)
export const Heading = styled.h2<{
  size?: "xl" | "lg" | "md" | "sm";
  color?: string;
}>`
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
}>`
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
export const Badge = styled.span<{ variant?: "cyan" | "blue" | "dark" | "red" | "green" }>`
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

// Button Primitive (Atoms)
export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variant", "size", "fullWidth"].includes(prop),
})<{
  variant?: "primary" | "secondary" | "outline" | "ghost" | "execute";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}>`
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

  /* Sizes */
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

  /* Variants */
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

// Input fields (Atoms)
export const Input = styled.input`
  background: transparent;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${theme.colors.onSurface};
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  padding: 8px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s;

  &:focus {
    border-bottom-color: ${theme.colors.cyberCyan};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: ${theme.colors.onSurface};
  font-family: ${theme.fonts.mono};
  font-size: 0.85rem;
  padding: 16px;
  outline: none;
  box-sizing: border-box;
  resize: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${theme.colors.cyberCyan};
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
`;

// Slider Atom
export const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.cyberCyan};
    cursor: pointer;
    transition: transform 0.1s;
    &:hover {
      transform: scale(1.2);
    }
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.cyberCyan};
    cursor: pointer;
    transition: transform 0.1s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

// Glow Indicator Atom
export const GlowDot = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "color",
})<{ active?: boolean; color?: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color || theme.colors.cyberCyan};
  display: inline-block;
  position: relative;
  box-shadow: ${(props) => props.active ? `0 0 10px ${props.color || theme.colors.cyberCyan}` : "none"};
  animation: ${(props) => props.active ? css`${pulseAnimation} 1.5s infinite` : "none"};
`;
