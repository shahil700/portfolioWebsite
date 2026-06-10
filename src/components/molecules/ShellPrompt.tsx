import React from "react";
import { theme } from "../atoms";

export const ShellPrompt: React.FC<{ value: string; onChange: (val: string) => void; onSubmit: (e: React.FormEvent) => void }> = ({
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: "8px", fontFamily: theme.fonts.mono, fontSize: "12px" }}>
      <span style={{ color: theme.colors.cyberCyan, flexShrink: 0 }}>shahil@portfolio:~$</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="type command (help, clear, skills, about)..."
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          color: theme.colors.white,
          outline: "none",
          fontFamily: theme.fonts.mono,
          fontSize: "12px",
          padding: 0,
        }}
        autoComplete="off"
      />
    </form>
  );
};
