import styled from "styled-components";
import { theme, marqueeAnimation } from "../../atoms";

export const StackSection = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
  background-color: ${theme.colors.bgDarkSec};
`;

export const MarqueeTrackWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 16px 0;
`;

export const MarqueeSideOverlayLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to right, ${theme.colors.bgDarkSec}, transparent);
  z-index: 10;
  pointer-events: none;
`;

export const MarqueeSideOverlayRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to left, ${theme.colors.bgDarkSec}, transparent);
  z-index: 10;
  pointer-events: none;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marqueeAnimation} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const MarqueeTextSpan = styled.span`
  font-family: ${theme.fonts.display};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 4rem);
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.12);
  margin-right: 64px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.cyberCyan};
  }
`;

export const ClientLogosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 48px;
`;

export const ClientImgWrapper = styled.div`
  opacity: 0.55;
  transition: all 0.3s;
  height: 48px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
    transform: scale(1.08);
  }
`;

export const ClientImg = styled.img`
  max-height: 28px;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(100%);

  ${ClientImgWrapper}:hover & {
    filter: grayscale(0%);
  }
`;
