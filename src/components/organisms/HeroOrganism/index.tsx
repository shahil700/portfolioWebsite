import React from "react";
import { motion } from "motion/react";
import { theme, Flex, Badge, Button, Heading, Text } from "../../atoms";
import {
  HeroWrapper,
  HeroAtmosphere,
  AtmosphereImage,
  GlowSpot1,
  GlowSpot2,
  AnimatedCpuIcon,
  HeroContent,
  GradTitleSelection,
} from "./styles";

interface HeroOrganismProps {
  onScrollTo: (id: string) => void;
}

export const HeroOrganism: React.FC<HeroOrganismProps> = ({ onScrollTo }) => {
  return (
    <HeroWrapper>
      <HeroAtmosphere>
        <AtmosphereImage
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-T9AbBtYrcsPNIsaELYjHVDtsGrMYIXP1e4PrVUbx38D0DUpyPPrFcPB6YkifbedDHfX_1vZI-Cx94V_RKrXt33sX2rgEVkajCqS-HbxXBFFzD0FFtABc2dXWOZ-_XbBRrXOK-8ZNRgxM5QzYVBheXWb6LimlIt-7eQjY0HJAA1Anbva2mLApL00PHDbTdXZ5f_y9kzlmVWTWbyaOloKNSCbkJ_nHf2fEzlz9UfAhVsvj4qfQocJiydIyEV5qYdZyhlUt5pd5MRgS"
          alt="Abstract 3D crystal structure representing architecture precision."
          referrerPolicy="no-referrer"
        />
        <GlowSpot1 />
        <GlowSpot2 />
      </HeroAtmosphere>

      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="cyan">
            <AnimatedCpuIcon size={12} />
            Available for Frontend Architecture Roles
          </Badge>
        </motion.div>

        <Flex direction="column" gap="16px">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heading size="xl">
              6+ Years Crafting High-Performance <GradTitleSelection>Frontend Architecture</GradTitleSelection>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Text
              variant="body"
              color={theme.colors.onSurfaceVariant}
              style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto" }}
            >
              Specializing in the React Ecosystem and Enterprise Scalability. Building resilient, lightning-fast UI foundations for elite technical teams.
            </Text>
          </motion.div>
        </Flex>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Flex gap="16px" wrap="wrap" justify="center">
            <Button variant="primary" size="lg" onClick={() => onScrollTo("work")}>View My Work</Button>
            <Button variant="secondary" size="lg" onClick={() => onScrollTo("contact")}>Let&apos;s Connect</Button>
          </Flex>
        </motion.div>
      </HeroContent>
    </HeroWrapper>
  );
};
