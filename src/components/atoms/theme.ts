import { keyframes } from "styled-components";

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
