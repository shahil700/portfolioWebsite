import styled, { css } from "styled-components";
import { motion } from "motion/react";
import { Cpu, RefreshCw } from "lucide-react";
import { theme, pulseAnimation, spinAnimation } from "../../atoms";

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid ${theme.colors.borderDark};
  box-sizing: border-box;
  padding: 80px 24px;
`;

export const HeroAtmosphere = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.45;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AtmosphereImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 850px;
  opacity: 0.4;
  mix-blend-mode: screen;
  transform: scale(1.1);
  pointer-events: none;
  user-select: none;
`;

export const GlowSpot1 = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 300px;
  background: rgba(0, 220, 229, 0.04);
  filter: blur(120px);
  border-radius: 50%;
  pointer-events: none;
`;

export const GlowSpot2 = styled.div`
  position: absolute;
  bottom: 15%;
  right: 15%;
  width: 250px;
  height: 250px;
  background: rgba(92, 213, 246, 0.04);
  filter: blur(120px);
  border-radius: 50%;
  pointer-events: none;
`;

export const AnimatedCpuIcon = styled(Cpu)`
  animation: ${pulseAnimation} 1.5s infinite;
`;

export const RotatingRefresh = styled(RefreshCw).withConfig({ shouldForwardProp: (prop) => prop !== "isSpinning" })<{
  isSpinning?: boolean;
}>`
  animation: ${(props) => (props.isSpinning ? css`${spinAnimation} 1.5s linear infinite` : "none")};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

export const GradTitleSelection = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, ${theme.colors.cyberCyan}, ${theme.colors.reactBlue});
`;
