import React from "react";
import { motion } from "motion/react";
import { GlowDot, theme } from "../atoms";

export const BrandLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <GlowDot active color={theme.colors.cyberCyan} />
      <span style={{ fontFamily: theme.fonts.display, fontWeight: 700, fontSize: "1.1rem", color: theme.colors.white }}>
        Shahil Subham
      </span>
    </motion.div>
  );
};
