import React from "react";
import { Github, Linkedin, Zap } from "lucide-react";
import { theme, Flex, Text, Container } from "../../atoms";
import { FooterSection, FooterLinks, FooterLink } from "./styles";

export const FooterOrganism: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <Flex direction="column" align="center" gap="16px">
          <Text variant="body" style={{ color: theme.colors.onSurfaceVariant, textAlign: "center" }}>
            Built with a modern frontend architecture mindset. Reach out to talk about next-level UI systems.
          </Text>

          <FooterLinks>
            <FooterLink href="https://github.com/shahil-subham" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </FooterLink>
            <FooterLink href="https://linkedin.com/in/shahil-subham" target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </FooterLink>
            <FooterLink href="mailto:hello@shahil.dev">
              <Zap size={18} /> hello@shahil.dev
            </FooterLink>
          </FooterLinks>

          <Text variant="mono" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Shahil Subham. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </FooterSection>
  );
};
