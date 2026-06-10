import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { theme, Button } from "../../atoms";
import { BrandLogo } from "../../molecules";
import {
  NavWrapper,
  NavInner,
  DesktopLinks,
  NavLink,
  MobileMenuButton,
  MobileDrawer,
} from "./styles";

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export const NavbarOrganism: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <NavWrapper>
      <NavInner>
        <BrandLogo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

        <DesktopLinks>
          <NavLink onClick={() => handleLinkClick("work")}>Work</NavLink>
          <NavLink onClick={() => handleLinkClick("specialties")}>Specialties</NavLink>
          <NavLink onClick={() => handleLinkClick("stack")}>Stack</NavLink>
        </DesktopLinks>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Button
            variant="secondary"
            size="sm"
            style={{ display: "inline-flex" }}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </Button>
          <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </MobileMenuButton>
        </div>
      </NavInner>

      <AnimatePresence>
        {isOpen && (
          <MobileDrawer
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink onClick={() => handleLinkClick("work")} style={{ textAlign: "left" }}>
              Work
            </NavLink>
            <NavLink onClick={() => handleLinkClick("specialties")} style={{ textAlign: "left" }}>
              Specialties
            </NavLink>
            <NavLink onClick={() => handleLinkClick("stack")} style={{ textAlign: "left" }}>
              Stack
            </NavLink>
            <Button variant="primary" style={{ marginTop: "12px" }} onClick={() => handleLinkClick("contact")}>
              Contact
            </Button>
          </MobileDrawer>
        )}
      </AnimatePresence>
    </NavWrapper>
  );
}
