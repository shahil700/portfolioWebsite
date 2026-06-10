import React from "react";
import { Flex, Text, theme, GlowDot } from "../atoms";
import { OptionCard } from "./styles";

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
