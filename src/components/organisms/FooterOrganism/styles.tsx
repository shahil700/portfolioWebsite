import styled from "styled-components";
import { theme } from "../../atoms";

export const FooterSection = styled.footer`
  padding: 48px 0;
  background: ${theme.colors.bgDark};
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  margin-top: 18px;
`;

export const FooterLink = styled.a`
  color: ${theme.colors.onSurfaceVariant};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.cyberCyan};
  }
`;
