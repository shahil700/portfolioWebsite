import styled from "styled-components";
import { motion } from "motion/react";
import { theme } from "../../atoms";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  background: rgba(16, 20, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${theme.colors.borderDark};
  box-sizing: border-box;
`;

export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const DesktopLinks = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

export const NavLink = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  background: transparent;
  border: none;
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => (props.active ? theme.colors.cyberCyan : "rgba(255, 255, 255, 0.65)")};
  cursor: pointer;
  transition: color 0.2s;
  padding: 8px 4px;

  &:hover {
    color: ${theme.colors.cyberCyan};
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileDrawer = styled(motion.div)`
  background: #0f131a;
  border-bottom: 1px solid ${theme.colors.borderDark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;
