import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./components/atoms";
import {
  NavbarOrganism,
  HeroOrganism,
  TechStackOrganism,
  CaseStudiesOrganism,
  SpecialtiesOrganism,
  TerminalOrganism,
  FooterOrganism,
} from "./components/organisms";

// Reset global margins/paddings and configure central fonts without Tailwind dependency
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.colors.bgDark};
    color: ${theme.colors.onSurface};
    font-family: ${theme.fonts.sans};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${theme.colors.cyberCyan};
    color: ${theme.colors.black};
  }

  /* Thin scrollbar to match retro-cyber aesthetic */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.bgDarkSec};
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.cyberCyan};
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  padding-top: 68px; /* height matching fixed Navbar */
  flex-grow: 1;
`;

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <NavbarOrganism onScrollTo={scrollToSection} />
        
        <MainContent>
          <HeroOrganism onScrollTo={scrollToSection} />
          
          <TechStackOrganism />
          
          <CaseStudiesOrganism />
          
          <SpecialtiesOrganism />
          
          <TerminalOrganism />
        </MainContent>

        <FooterOrganism />
      </AppContainer>
    </ThemeProvider>
  );
}
