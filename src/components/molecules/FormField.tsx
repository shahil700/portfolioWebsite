import React from "react";
import styled from "styled-components";
import { theme } from "../atoms";
import { FieldWrapper, FieldLabel, LabelPrefix } from "./styles";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  as?: "input" | "textarea";
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({ label, id, as = "input", rows = 4, ...props }) => {
  const InputElement = as === "textarea" ? "textarea" : "input";
  const StyledInput = styled(InputElement)`
    background: transparent;
    width: 100%;
    color: ${theme.colors.onSurface};
    font-family: ${theme.fonts.mono};
    font-size: 0.85rem;
    padding: 10px;
    outline: none;
    box-sizing: border-box;
    transition: all 0.2s;

    ${as === "input" ? `
      border-top: none;
      border-left: none;
      border-right: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      &:focus {
        border-bottom-color: ${theme.colors.cyberCyan};
      }
    ` : `
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      resize: none;
      &:focus {
        border-color: ${theme.colors.cyberCyan};
      }
    `}

    &::placeholder {
      color: rgba(255, 255, 255, 0.2);
    }
  `;

  return (
    <FieldWrapper>
      <FieldLabel htmlFor={id}>
        <LabelPrefix>&gt;</LabelPrefix>
        {label}
      </FieldLabel>
      <StyledInput id={id} rows={as === "textarea" ? rows : undefined} {...props as any} />
    </FieldWrapper>
  );
};
