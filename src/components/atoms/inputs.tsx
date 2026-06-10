import styled from "styled-components";
import { theme } from "./theme";

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
