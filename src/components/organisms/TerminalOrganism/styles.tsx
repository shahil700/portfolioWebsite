import styled from "styled-components";
import { theme, Button } from "../../atoms";

export const TerminalSection = styled.section`
  padding: 96px 0;
  background: ${theme.colors.bgDark};
  border-bottom: 1px solid ${theme.colors.borderDark};
`;

export const TerminalCard = styled.div`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 18px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 24px;
  padding: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ConsolePreview = styled.div`
  position: relative;
  background: ${theme.colors.cardLight};
  border-radius: 16px;
  border: 1px solid ${theme.colors.borderDark};
  padding: 28px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ConsoleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusDot = styled.span<{ active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? theme.colors.success : theme.colors.danger)};
`;

export const ConsoleBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  flex: 1;
`;

export const ConsoleLine = styled.div`
  font-family: ${theme.fonts.mono};
  color: ${theme.colors.onSurfaceVariant};
  font-size: 0.85rem;
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

export const PromptPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-between;
`;

export const PromptButtons = styled.div`
  display: grid;
  gap: 12px;
`;

export const SuccessOverlayBtn = styled(Button)`
  width: 100%;
`;

export const ConsoleInfo = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 20px;
`;

export const PulseStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: ${theme.colors.success};
`;

export const TerminalAction = styled(Button)`
  justify-content: flex-start;
  gap: 10px;
`;
