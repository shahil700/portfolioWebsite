import React from "react";
import { Text, theme } from "../atoms";
import { MetricBoxWrapper } from "./styles";

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
