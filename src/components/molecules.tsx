import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";
import { Flex, Text, theme, GlowDot, Badge } from "./atoms";

// Navbar Brand Molecule
export const BrandLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <GlowDot active color={theme.colors.cyberCyan} />
      <span style={{ fontFamily: theme.fonts.display, fontWeight: 700, fontSize: "1.1rem", color: theme.colors.white }}>
        Shahil Subham
      </span>
    </motion.div>
  );
};

// Reusable Form Field Molecule
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const FieldLabel = styled.label`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.onSurfaceVariant};
  display: flex;
  align-items: center;
`;

const LabelPrefix = styled.span`
  color: ${theme.colors.cyberCyan};
  margin-right: 8px;
`;

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  id: string;
  as?: "input" | "textarea";
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({ label, id, as = "input", rows = 4, ...props }) => {
  const InputElement = as === "textarea" ? "textarea" : "input";
  
  // Custom styled wrapper for form tags without global selector issues
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

// Optimization Strategy option card molecule
const OptionCard = styled.button<{ selected?: boolean }>`
  background: ${(props) => (props.selected ? "#101417" : "#12161f")};
  border: 1px solid ${(props) => (props.selected ? "rgba(0, 220, 229, 0.4)" : "rgba(255, 255, 255, 0.05)")};
  box-shadow: ${(props) => (props.selected ? "inset 0 0 10px rgba(0, 220, 229, 0.08)" : "none")};
  padding: 16px;
  border-radius: 6px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 110px;
  width: 100%;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;

  &:hover {
    border-color: ${(props) => (props.selected ? "rgba(0, 220, 229, 0.6)" : "rgba(255, 255, 255, 0.12)")};
  }
`;

interface OptimizationOptionProps {
  label: string;
  description: string;
  subtitle: string;
  selected: boolean;
  onToggle: () => void;
}

export const OptimizationOptionCard: React.FC<OptimizationOptionProps> = ({
  label,
  description,
  subtitle,
  selected,
  onToggle,
}) => {
  return (
    <OptionCard selected={selected} onClick={onToggle}>
      <Flex justify="space-between" align="center" fill>
        <GlowDot active={selected} color={selected ? theme.colors.cyberCyan : "rgba(255, 255, 255, 0.15)"} />
        <Text variant="mono" color="rgba(255, 255, 255, 0.35)" style={{ fontSize: "9px" }}>
          {subtitle}
        </Text>
      </Flex>
      <div>
        <Text style={{ fontSize: "12px", fontWeight: 600, color: theme.colors.white }}>{label}</Text>
        <Text variant="small" color="rgba(255, 255, 255, 0.5)" style={{ marginTop: "4px" }}>
          {description}
        </Text>
      </div>
    </OptionCard>
  );
};

// Mini Metric Box display inside Sandbox results
const MetricBoxWrapper = styled.div`
  text-align: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 4px;
`;

export const MetricBox: React.FC<{ label: string; value: string; remark: string; highlight?: boolean }> = ({
  label,
  value,
  remark,
  highlight,
}) => {
  return (
    <MetricBoxWrapper>
      <Text variant="mono" color="rgba(255, 255, 255, 0.35)" style={{ fontSize: "9px", textTransform: "uppercase" }}>
        {label}
      </Text>
      <Text
        variant="mono"
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          margin: "4px 0",
          color: highlight ? theme.colors.cyberCyan : theme.colors.white,
        }}
      >
        {value}
      </Text>
      <Text variant="mono" color={theme.colors.cyberCyan} style={{ fontSize: "9px" }}>
        {remark}
      </Text>
    </MetricBoxWrapper>
  );
};

// CLI Command Shell Prefix with blink block cursor
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

// Loading visualization sequence representing graphs simulation
const LiveGraphWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
  overflow: hidden;
  opacity: 0.35;
`;

const GraphBar = styled.div.withConfig({
  shouldForwardProp: (prop) => !["heightPct", "isSimulating"].includes(prop),
})<{ heightPct: number; isSimulating?: boolean }>`
  flex: 1;
  background: ${theme.colors.cyberCyan};
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  height: ${(props) => `${props.heightPct}%`};
  transition: height 0.35s ease;
`;

export const LiveGraph: React.FC<{ isSimulating?: boolean }> = ({ isSimulating }) => {
  const baseHeights = [4, 8, 3, 5, 12, 18, 14, 9, 13, 24, 16, 22, 15, 8, 11, 24, 30, 20, 15, 27, 34, 12, 10, 20];
  return (
    <LiveGraphWrapper>
      {baseHeights.map((h, i) => {
        const hPct = isSimulating ? Math.floor(Math.random() * 90) + 10 : h;
        return <GraphBar key={i} heightPct={hPct} isSimulating={isSimulating} />;
      })}
    </LiveGraphWrapper>
  );
};

// Dynamic visual tabs switcher used inside optimizer
const TabSwitchContainer = styled.div`
  display: flex;
  background: ${theme.colors.bgDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 4px;
  padding: 2px;
`;

const TabButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  background: ${(props) => (props.active ? theme.colors.cyberCyan : "transparent")};
  color: ${(props) => (props.active ? theme.colors.black : "rgba(255, 255, 255, 0.5)")};
  font-family: ${theme.fonts.mono};
  font-size: 9px;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  text-transform: uppercase;
  border: none;
  padding: 6px 12px;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => (props.active ? theme.colors.black : theme.colors.white)};
  }
`;

export const ToggleSwitch: React.FC<{ options: string[]; selected: string; onSelect: (val: string) => void }> = ({
  options,
  selected,
  onSelect,
}) => {
  return (
    <TabSwitchContainer>
      {options.map((opt) => (
        <TabButton key={opt} active={selected === opt} onClick={() => onSelect(opt)}>
          {opt}
        </TabButton>
      ))}
    </TabSwitchContainer>
  );
};
