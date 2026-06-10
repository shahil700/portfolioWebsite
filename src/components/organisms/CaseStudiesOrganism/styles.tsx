import styled from "styled-components";
import { motion } from "motion/react";
import { theme } from "../../atoms";

export const SegmentWork = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
`;

export const CaseCard = styled.div`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: rgba(0, 220, 229, 0.25);
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
  }
`;

export const BrandBanner = styled.div`
  height: 200px;
  background: ${theme.colors.cardLight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${theme.colors.borderDark};
`;

export const BannerImg = styled.img`
  max-height: 50px;
  z-index: 2;
  filter: grayscale(100%) opacity(60%);
  transition: all 0.4s;

  ${CaseCard}:hover & {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.08);
  }
`;

export const BrandOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const CaseContent = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

export const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ExpandContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.25);
  border-top: 1px solid ${theme.colors.borderDark};
  overflow: hidden;
`;

export const ExpInner = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SandboxCard = styled.div`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 8px;
  padding: 32px;
  margin-top: 64px;
  box-sizing: border-box;
`;
