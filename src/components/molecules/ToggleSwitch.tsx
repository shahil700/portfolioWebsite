import React from "react";
import { TabSwitchContainer, TabButton } from "./styles";

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
