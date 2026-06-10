import styled from "styled-components";
import { theme } from "../atoms";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const FieldLabel = styled.label`
  font-family: ${theme.fonts.mono};
  font-size: 0.8rem;
  color: ${theme.colors.onSurfaceVariant};
  display: flex;
  align-items: center;
`;

export const LabelPrefix = styled.span`
  color: ${theme.colors.cyberCyan};
  margin-right: 8px;
`;

export const OptionCard = styled.button<{ selected?: boolean }>`
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

export const MetricBoxWrapper = styled.div`
  text-align: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 4px;
`;

export const LiveGraphWrapper = styled.div`
  height: 24px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
  overflow: hidden;
  opacity: 0.35;
`;

export const GraphBar = styled.div.withConfig({
  shouldForwardProp: (prop) => !["heightPct", "isSimulating"].includes(prop),
})<{ heightPct: number; isSimulating?: boolean }>`
  flex: 1;
  background: ${theme.colors.cyberCyan};
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  height: ${(props) => `${props.heightPct}%`};
  transition: height 0.35s ease;
`;

export const TabSwitchContainer = styled.div`
  display: flex;
  background: ${theme.colors.bgDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 4px;
  padding: 2px;
`;

export const TabButton = styled.button.withConfig({
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
