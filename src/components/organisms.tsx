import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  TrendingUp,
  Timer,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Boxes,
  Gauge,
  Milestone,
  AlertCircle,
  RefreshCw,
  Terminal as TerminalIcon,
  RotateCcw,
  Github,
  Linkedin,
  Zap,
} from "lucide-react";
import {
  theme,
  Flex,
  Grid,
  Container,
  Heading,
  Text,
  Badge,
  Button,
  GlowDot,
  Slider,
  marqueeAnimation,
  pulseAnimation,
  spinAnimation,
} from "./atoms";
import {
  BrandLogo,
  FormField,
  OptimizationOptionCard,
  MetricBox,
  ShellPrompt,
  LiveGraph,
  ToggleSwitch,
} from "./molecules";
import { Project, TerminalLine } from "../types";

// ==========================================
// 1. NAVBAR ORGANISM
// ==========================================
const NavWrapper = styled.nav`
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

const NavInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`;

const DesktopLinks = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;

const NavLink = styled.button.withConfig({
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

const MobileMenuButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  color: ${theme.colors.white};
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileDrawer = styled(motion.div)`
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
};

// ==========================================
// 2. HERO ORGANISM
// ==========================================
const HeroWrapper = styled.section`
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

const HeroAtmosphere = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.45;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AtmosphereImage = styled.img`
  width: 100%;
  height: 100%;
  object-cover: cover;
  max-width: 850px;
  opacity: 0.4;
  mix-blend-mode: screen;
  transform: scale(1.1);
  pointer-events: none;
  user-select: none;
`;

const GlowSpot1 = styled.div`
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

const GlowSpot2 = styled.div`
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

const AnimatedCpuIcon = styled(Cpu)`
  animation: ${pulseAnimation} 1.5s infinite;
`;

const RotatingRefresh = styled(RefreshCw).withConfig({ shouldForwardProp: (prop) => prop !== "isSpinning" })<{
  isSpinning?: boolean;
}>`
  animation: ${(props) => (props.isSpinning ? css`${spinAnimation} 1.5s linear infinite` : "none")};
`;

const PulseStatus = styled.div`
  color: ${theme.colors.cyberCyan};
  animation: ${pulseAnimation} 1s infinite;
  font-weight: bold;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;

const GradTitleSelection = styled.span`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, ${theme.colors.cyberCyan}, ${theme.colors.reactBlue});
`;

export const HeroOrganism: React.FC<NavbarProps> = ({ onScrollTo }) => {
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
              6+ Years Crafting High-Performance{" "}
              <GradTitleSelection>Frontend Architecture</GradTitleSelection>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Text variant="body" color={theme.colors.onSurfaceVariant} style={{ fontSize: "1.1rem", maxWidth: "620px", margin: "0 auto" }}>
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
            <Button variant="primary" size="lg" onClick={() => onScrollTo("work")}>
              View My Work
            </Button>
            <Button variant="secondary" size="lg" onClick={() => onScrollTo("contact")}>
              Let&apos;s Connect
            </Button>
          </Flex>
        </motion.div>
      </HeroContent>
    </HeroWrapper>
  );
};

// ==========================================
// 3. TECHSTACK ORGANISM (Marquee & Client Logos)
// ==========================================
const StackSection = styled.section`
  padding: 80px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
  background-color: ${theme.colors.bgDarkSec};
`;

const MarqueeTrackWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 16px 0;
`;

const MarqueeSideOverlayLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to right, ${theme.colors.bgDarkSec}, transparent);
  z-index: 10;
  pointer-events: none;
`;

const MarqueeSideOverlayRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80px;
  background: linear-gradient(to left, ${theme.colors.bgDarkSec}, transparent);
  z-index: 10;
  pointer-events: none;
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${marqueeAnimation} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeTextSpan = styled.span`
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

const ClientLogosGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 48px;
`;

const ClientImgWrapper = styled.div`
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

const ClientImg = styled.img`
  max-height: 28px;
  max-width: 140px;
  object-fit: contain;
  filter: grayscale(100%);

  ${ClientImgWrapper}:hover & {
    filter: grayscale(0%);
  }
`;

export const TechStackOrganism: React.FC = () => {
  const CORE_TECHS = ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL", "Styled-Components"];
  const marqueeItems = [...CORE_TECHS, ...CORE_TECHS, ...CORE_TECHS];

  const CLIENTS = [
    { name: "Marriott", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpw73jviyyUxJflBL_g906GREudK6mahnt5cBwPmasF8oR9jEcyxyBpcrsIL7JPQ2tWbke-TlgCizRruCrnscXq59PA9tnHmK5ntWzHi8G6HLNtkJH2IKekcrrw5AaKyOjjFYHD8HyJO8HKEaqCbdCdjoN2sS75K8_FLqFK-zYkQ5V2Qzh00YWi_tcjg3oeK5077NAMmgRBxrAX07JGsHDCe3EucTCV_vRVm15pmRsP8_juor-_7LgJhPTGQDh3J6LAQbJTEbxtc6" },
    { name: "Optum", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqvUUqahd9KkowmhVZ498fGB9BshdRD8dpSnE66bEQ5bMe4N0hPY94gZfMeseez9DCzI-jlgFjeZuQ6Oc_0a4-U3Jv9vWi2u0IYcJwWB1ksQHmUhgokhk6EZa9soCc_SRMqm_PxSqyL74DNXKOtuGAxZDg-N-Mp1NMtdHw19C4UPd5vv-UgBQiBMMhGIaqXc-MyOLP10UB7ZYEKL1RnDmqaKjpNKaAehGGM99RDyRGDX7lKkURF5nn8Dlk74aYBQHB6rcGVMYDXnw" },
    { name: "Publicis Sapient", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwis1Se8_elgevdoCo5rOCiMxRNmtoHsskgQcHlJtorxGKAlCWSIZzg16xY8KcMCLKa0V6cyJjlltzZem7h-7ep3OL9f7SsXiNrCyqQP1SeC2jetP1eegGveZvrN9qKw62D9vfNGbqGRQpPQZqe00EeHs9iT9veSGncvpkB4Y4QiUsDFH7m7rQii7-z4bYqLeUJnPaHAf5LDU9D2CighidAHkx3G_BRFU9V49aQfEvv-3eT0Ra2jxhj2vdWErncI26JUkU2RxxGl-4" },
    { name: "Empower", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiYxLGJsrLef9W1uXsVGvm-1lUdHJ-iV-P3LuMDt5mYwWwgNMIoMIHHGhF-EnOb3WUHaJQFbg0qhZHY_qEbJu_JZtgya7uxcLQu5si2ihdiT5LYVCu1l-nyXoH2lfZrL-0DVB5ANVrcsCysZLPR07SgP_TOHpPNdGkMB0I0MGaGdxLvz_zkMpWUJx7SxAL-p-eaqj4VKuOHfZKeH0uMyssxpkiAYpb0lwex_3XdMZtlq0cpqCgrQfa-I6J0lDFxcsWkbjedGirMOmu" },
    { name: "Bristlecone", url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu1Z3jyk-w5iKZFRmGDTxWk8kRGFkuooLAlKVdhychPIcIk7sSMjCCQKurX-q0-NSSK6NcxVrZFdsLVX54pEs_FfNqcqpDSpaPpyNZfbM0x3KDoNi4Mepm3KmS9SqQuQrvwYcnQPg40ePehvs4vjxT8WISTYafryy9yniMUiOy66-s9edAIQ1Dyg3McE-X5xaYAuEccESCNxNkYVUAGsc-IjbCa-sU1qeP76jJL8SZjn_C92yyp0tBScNqBi701ex6Yn9h3gpTLBsD" },
  ];

  return (
    <StackSection id="stack">
      <Flex direction="column" gap="40px" align="center">
        <Text variant="mono" color={theme.colors.onSurfaceVariant} style={{ textTransform: "uppercase", letterSpacing: "3px", fontSize: "11px" }}>
          Core Technologies
        </Text>

        <MarqueeTrackWrapper>
          <MarqueeSideOverlayLeft />
          <MarqueeSideOverlayRight />
          <MarqueeTrack>
            {marqueeItems.map((tech, i) => (
              <MarqueeTextSpan key={i}>{tech}</MarqueeTextSpan>
            ))}
          </MarqueeTrack>
        </MarqueeTrackWrapper>

        <Flex direction="column" gap="16px" align="center" style={{ marginTop: "40px", borderTop: `1px solid ${theme.colors.borderDark}`, paddingTop: "40px", width: "100%" }}>
          <Text variant="mono" color={theme.colors.onSurfaceVariant} style={{ textTransform: "uppercase", letterSpacing: "2px", fontSize: "10px" }}>
            Trusted By Enterprise Teams
          </Text>
          <ClientLogosGrid>
            {CLIENTS.map((c) => (
              <ClientImgWrapper key={c.name}>
                <ClientImg src={c.url} alt={c.name} referrerPolicy="no-referrer" />
              </ClientImgWrapper>
            ))}
          </ClientLogosGrid>
        </Flex>
      </Flex>
    </StackSection>
  );
};

// ==========================================
// 4. CASE STUDIES & OPTIMIZER ORGANISM
// ==========================================
const SegmentWork = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
`;

const CaseCard = styled.div`
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

const BrandBanner = styled.div`
  height: 200px;
  background: ${theme.colors.cardLight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${theme.colors.borderDark};
`;

const BannerImg = styled.img`
  max-height: 50px;
  z-index: 2;
  filter: grayscale(100%) opacity(60%);
  transition: all 0.4s;

  ${CaseCard}:hover & {
    filter: grayscale(0%) opacity(100%);
    transform: scale(1.08);
  }
`;

const BrandOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const CaseContent = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
`;

const TagsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExpandContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.25);
  border-top: 1px solid ${theme.colors.borderDark};
  overflow: hidden;
`;

const ExpInner = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

// Sandbox Widget Wrapper
const SandboxCard = styled.div`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 8px;
  padding: 32px;
  margin-top: 64px;
  box-sizing: border-box;
`;

const PROJECTS: Project[] = [
  {
    id: "marriott",
    title: "Enterprise Dashboard Optimization",
    company: "Marriott",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpw73jviyyUxJflBL_g906GREudK6mahnt5cBwPmasF8oR9jEcyxyBpcrsIL7JPQ2tWbke-TlgCizRruCrnscXq59PA9tnHmK5ntWzHi8G6HLNtkJH2IKekcrrw5AaKyOjjFYHD8HyJO8HKEaqCbdCdjoN2sS75K8_FLqFK-zYkQ5V2Qzh00YWi_tcjg3oeK5077NAMmgRBxrAX07JGsHDCe3EucTCV_vRVm15pmRsP8_juor-_7LgJhPTGQDh3J6LAQbJTEbxtc6",
    logoName: "Marriott Brand Logo",
    description: "Spearheaded the architectural refactoring of Marriott's core operational dashboard, focusing on critical rendering paths, lazy-loading routines, and extreme data-fetching strategies.",
    metric: "Optimized Performance by 40%",
    metricType: "performance",
    tags: ["Next.js", "TypeScript", "React Server Components", "TailwindCSS"],
    challenges: [
      "Extremely long-tail DOM tree causing high Interaction to Next Paint (INP) latency exceeding 450ms.",
      "Redundant server fetches yielding heavy network waterfalls and visual flickering on high-density room tables.",
      "Vast JS bundle sizes (1.2MB overhead) impeding client-side parsing speed on corporate devices."
    ],
    solutions: [
      "Engineered dynamic window virtualization to prune inactive DOM elements on rooms/bookings lists.",
      "Implemented cache-validated pre-fetching using custom SWR/React Query invalidation pipelines.",
      "Refactored heavy client components to React Server Components (RSC), vaporizing 42% of client-bundle footprint."
    ],
    achievements: [
      "Interaction to Next Paint (INP) reduced from 450ms to 75ms (classified as EXCELLENT).",
      "LCP speed optimized from 4.2s to 1.8s, driving higher desktop SEO value.",
      "Substandard rendering-related memory leaks completely solved across full workstation sessions."
    ]
  },
  {
    id: "optum",
    title: "Health-Tech Design System",
    company: "Optum",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqvUUqahd9KkowmhVZ498fGB9BshdRD8dpSnE66bEQ5bMe4N0hPY94gZfMeseez9DCzI-jlgFjeZuQ6Oc_0a4-U3Jv9vWi2u0IYcJwWB1ksQHmUhgokhk6EZa9soCc_SRMqm_PxSqyL74DNXKOtuGAxZDg-N-Mp1NMtdHw19C4UPd5vv-UgBQiBMMhGIaqXc-MyOLP10UB7ZYEKL1RnDmqaKjpNKaAehGGM99RDyRGDX7lKkURF5nn8Dlk74aYBQHB6rcGVMYDXnw",
    logoName: "Optum Brand Logo",
    description: "Engineered a highly scalable, fully accessible design system component library unifying Optum's fragmented UI ecosystem and HIPAA clinical tooling applications.",
    metric: "Reduced Dev Time by 30%",
    metricType: "speed",
    tags: ["TailwindCSS", "Redux Toolkit", "Vanilla React", "Radix Primitives"],
    challenges: [
      "Incohesive component styling patterns causing branding drift and developer overhead across 14 discrete tooling portals.",
      "Non-compliant UI code violating mandatory high WCAG 2.1 AA accessibility guidelines on screen readers.",
      "Slow development onboarding loops due to undocumented states and complex boilerplate styles."
    ],
    solutions: [
      "Constructed a cohesive component architecture powered by TailwindCSS configuration rules and Radix accessible primitives.",
      "Standardized React Context & Redux state abstractions for common health telemetry displays (charts, patient cards).",
      "Created a modern, interactive interactive sandbox documentation workspace enabling real-time component experimentation."
    ],
    achievements: [
      "Average feature-building turnaround times declined by 30% across joint team pilots.",
      "100% WCAG AA screen reader compliance verified by strict automated testing rigs.",
      "Reduced redundant workspace boilerplate code, boosting asset reuse ratios by 50%."
    ]
  }
];

export const CaseStudiesOrganism: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [simProject, setSimProject] = useState<string>("marriott");
  const [opts, setOpts] = useState({
    virtualScrolling: false,
    bundleSplitting: false,
    memoization: false,
    prunedHooks: false,
  });
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState({
    inp: 450,
    lcp: 4.2,
    size: 1200,
    score: "Poor",
    color: theme.colors.danger,
  });

  const handleToggleOpt = (key: keyof typeof opts) => {
    const nextOpts = { ...opts, [key]: !opts[key] };
    setOpts(nextOpts);
    recalcMetrics(nextOpts, simProject);
  };

  const handleProjectChange = (projId: string) => {
    setSimProject(projId);
    const initialOpts = {
      virtualScrolling: false,
      bundleSplitting: false,
      memoization: false,
      prunedHooks: false,
    };
    setOpts(initialOpts);
    recalcMetrics(initialOpts, projId);
  };

  const recalcMetrics = (currentOpts: typeof opts, proj: string) => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      let baseInp = proj === "marriott" ? 450 : 280;
      let baseLcp = proj === "marriott" ? 4.2 : 3.1;
      let baseSize = proj === "marriott" ? 1200 : 780;

      if (currentOpts.virtualScrolling) {
        baseInp -= proj === "marriott" ? 220 : 110;
        baseLcp -= proj === "marriott" ? 0.8 : 0.4;
      }
      if (currentOpts.bundleSplitting) {
        baseSize -= proj === "marriott" ? 500 : 350;
        baseLcp -= proj === "marriott" ? 1.2 : 0.8;
      }
      if (currentOpts.memoization) {
        baseInp -= proj === "marriott" ? 120 : 80;
      }
      if (currentOpts.prunedHooks) {
        baseInp -= proj === "marriott" ? 35 : 25;
        baseSize -= proj === "marriott" ? 120 : 80;
        baseLcp -= proj === "marriott" ? 0.3 : 0.2;
      }

      baseInp = Math.max(baseInp, 65);
      baseLcp = Math.max(parseFloat(baseLcp.toFixed(2)), 1.1);
      baseSize = Math.max(baseSize, 180);

      let rating = "Poor";
      let col = theme.colors.danger;

      if (baseInp < 100 && baseLcp < 2.0 && baseSize < 400) {
        rating = "Excellent (Elite)";
        col = theme.colors.cyberCyan;
      } else if (baseInp < 200 && baseLcp < 2.5) {
        rating = "Good";
        col = theme.colors.reactBlue;
      } else if (baseInp < 300) {
        rating = "Moderate";
        col = theme.colors.warning;
      }

      setSimResults({
        inp: baseInp,
        lcp: baseLcp,
        size: baseSize,
        score: rating,
        color: col,
      });
    }, 350);
  };

  const handleTuneMax = () => {
    const maxOpts = {
      virtualScrolling: true,
      bundleSplitting: true,
      memoization: true,
      prunedHooks: true,
    };
    setOpts(maxOpts);
    recalcMetrics(maxOpts, simProject);
  };

  return (
    <SegmentWork id="work">
      <Container>
        <Flex direction="column" gap="10px" style={{ marginBottom: "48px" }}>
          <Heading size="lg">Select Experience</Heading>
          <Text variant="muted">Architecting solutions for high-performance enterprise scales.</Text>
        </Flex>

        <Grid cols="repeat(auto-fit, minmax(450px, 1fr))" gap="32px">
          {PROJECTS.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <CaseCard key={project.id}>
                <BrandBanner>
                  <BrandOverlay />
                  <BannerImg src={project.logoUrl} alt={project.logoName} referrerPolicy="no-referrer" />
                </BrandBanner>

                <CaseContent>
                  <Flex justify="space-between" align="center">
                    <Badge variant="cyan">{project.company}</Badge>
                    <Flex align="center" gap="8px" style={{ color: theme.colors.cyberCyan }}>
                      <TrendingUp size={16} />
                      <Text variant="mono" style={{ fontWeight: 600, fontSize: "11px" }}>{project.metric}</Text>
                    </Flex>
                  </Flex>

                  <Heading size="sm" style={{ fontSize: "1.3rem" }}>{project.title}</Heading>
                  <Text variant="muted" style={{ fontSize: "0.85rem" }}>{project.description}</Text>

                  <Flex justify="space-between" align="center" style={{ marginTop: "12px", borderTop: `1px solid ${theme.colors.borderDark}`, paddingTop: "16px" }}>
                    <TagsBox>
                      {project.tags.map((tg) => (
                        <Badge key={tg}>{tg}</Badge>
                      ))}
                    </TagsBox>

                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    >
                      <span>{isExpanded ? "Hide Details" : "View Architecture"}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </Button>
                  </Flex>
                </CaseContent>

                <AnimatePresence>
                  {isExpanded && (
                    <ExpandContainer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpInner>
                        <Grid cols="1fr 1fr" gap="24px">
                          <Flex direction="column" gap="12px">
                            <Text variant="mono" color={theme.colors.danger} style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase" }}>
                              Core Challenges
                            </Text>
                            <Flex direction="column" gap="8px">
                              {project.challenges.map((c, i) => (
                                <Text key={i} variant="small" color={theme.colors.onSurfaceVariant}>
                                  <strong style={{ color: theme.colors.danger, marginRight: "4px" }}>0{i+1}.</strong> {c}
                                </Text>
                              ))}
                            </Flex>
                          </Flex>

                          <Flex direction="column" gap="12px">
                            <Text variant="mono" color={theme.colors.cyberCyan} style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase" }}>
                              Engineering Solutions
                            </Text>
                            <Flex direction="column" gap="8px">
                              {project.solutions.map((s, i) => (
                                <Text key={i} variant="small" color={theme.colors.onSurfaceVariant}>
                                  <strong style={{ color: theme.colors.cyberCyan, marginRight: "4px" }}>0{i+1}.</strong> {s}
                                </Text>
                              ))}
                            </Flex>
                          </Flex>
                        </Grid>

                        <div style={{ borderTop: `1px solid ${theme.colors.borderDark}`, paddingTop: "20px" }}>
                          <Text variant="mono" color={theme.colors.reactBlue} style={{ fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", marginBottom: "12px" }}>
                            Key Measured Outcomes
                          </Text>
                          <Grid cols="1fr 1fr 1fr" gap="12px">
                            {project.achievements.map((ach, i) => (
                              <div key={i} style={{ padding: "12px", background: "rgba(255,255,255,0.01)", border: `1px solid ${theme.colors.borderDark}`, borderRadius: "4px" }}>
                                <Text variant="mono" color={theme.colors.reactBlue} style={{ fontSize: "9px", fontWeight: "bold" }}>#Goal 0{i+1}</Text>
                                <Text variant="small" style={{ marginTop: "4px" }}>{ach}</Text>
                              </div>
                            ))}
                          </Grid>
                        </div>
                      </ExpInner>
                    </ExpandContainer>
                  )}
                </AnimatePresence>
              </CaseCard>
            );
          })}
        </Grid>

        {/* Embedded Optimization Sandbox Organism */}
        <SandboxCard id="optimizer-sandbox">
          <Flex direction="column" gap="24px">
            <Flex justify="space-between" align="flex-start" wrap="wrap" gap="16px">
              <div>
                <Flex align="center" gap="10px">
                  <Layers size={18} style={{ color: theme.colors.cyberCyan }} />
                  <Heading size="sm" style={{ fontSize: "1.2rem" }}>Interactive Architecture Sandbox</Heading>
                </Flex>
                <Text variant="small" color={theme.colors.onSurfaceVariant} style={{ marginTop: "4px" }}>
                  Toggle virtual optimization metrics and witness real-time frontend bundle and layout performance calculation.
                </Text>
              </div>

              <ToggleSwitch
                options={["marriott", "optum"]}
                selected={simProject}
                onSelect={handleProjectChange}
              />
            </Flex>

            <Grid cols="1.3fr 1fr" gap="32px" style={{ borderTop: `1px solid ${theme.colors.borderDark}`, paddingTop: "24px" }}>
              <Flex direction="column" gap="16px">
                <Text variant="mono" color="rgba(255, 255, 255, 0.4)" style={{ fontSize: "10px", textTransform: "uppercase" }}>
                  Apply Optimization Strategies
                </Text>
                <Grid cols="1fr 1fr" gap="16px">
                  <OptimizationOptionCard
                    label="Window Virtualization"
                    description="Only renders elements visible in viewport layout boundary."
                    subtitle="DOM Performance"
                    selected={opts.virtualScrolling}
                    onToggle={() => handleToggleOpt("virtualScrolling")}
                  />
                  <OptimizationOptionCard
                    label="Dynamic Bundles"
                    description="Code splits large third-party modules into smaller async segments."
                    subtitle="Asset Delivery"
                    selected={opts.bundleSplitting}
                    onToggle={() => handleToggleOpt("bundleSplitting")}
                  />
                  <OptimizationOptionCard
                    label="Reactive Memoization"
                    description="Trims redundant, cascading render sequences using React.memo."
                    subtitle="Render Pipeline"
                    selected={opts.memoization}
                    onToggle={() => handleToggleOpt("memoization")}
                  />
                  <OptimizationOptionCard
                    label="Selector Optimization"
                    description="Prunes broad state hook dependencies into shallow specific values."
                    subtitle="Redux Tuning"
                    selected={opts.prunedHooks}
                    onToggle={() => handleToggleOpt("prunedHooks")}
                  />
                </Grid>
              </Flex>

              <div style={{ background: theme.colors.bgDark, padding: "24px", borderRadius: "6px", border: `1px solid ${theme.colors.borderDark}`, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "20px" }}>
                <Flex justify="space-between" align="center">
                  <Text variant="mono" color="rgba(255,255,255,0.4)" style={{ fontSize: "10px" }}>Current Metrics</Text>
                  <span style={{ fontSize: "9px", fontFamily: theme.fonts.mono, border: `1px solid ${simResults.color}40`, background: `${simResults.color}10`, color: simResults.color, padding: "2px 8px", borderRadius: "3px", textTransform: "uppercase" }}>
                    {simResults.score}
                  </span>
                </Flex>

                <Grid cols="1fr 1fr 1fr" gap="8px">
                  <MetricBox label="INP Speed" value={`${simResults.inp}ms`} remark={simResults.inp < 100 ? "Excellent" : "Needs work"} highlight={simResults.inp < 100} />
                  <MetricBox label="LCP Speed" value={`${simResults.lcp}s`} remark={simResults.lcp < 2.0 ? "Elite" : "Improve"} highlight={simResults.lcp < 2.0} />
                  <MetricBox label="JS Bundle" value={`${simResults.size}KB`} remark={simResults.size < 400 ? "Lean" : "Bloated"} highlight={simResults.size < 400} />
                </Grid>

                <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px", background: "rgba(255,255,255,0.01)", border: `1px solid ${theme.colors.borderDark}`, borderRadius: "4px" }}>
                  <GlowDot active={opts.virtualScrolling && opts.bundleSplitting} color={theme.colors.cyberCyan} />
                  <div>
                    <Text variant="mono" color="rgba(255,255,255,0.3)" style={{ fontSize: "8px", textTransform: "uppercase" }}>Calculated Rating</Text>
                    <Text style={{ fontSize: "11px", color: theme.colors.white, fontWeight: 600 }}>
                      {opts.virtualScrolling && opts.bundleSplitting && opts.memoization && opts.prunedHooks
                        ? "Pure 100% Core Web Vitals"
                        : "Refactoring optimizations queued"}
                    </Text>
                  </div>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <LiveGraph isSimulating={isSimulating} />
                  <Button
                    variant="primary"
                    fullWidth
                    style={{ marginTop: "16px" }}
                    onClick={handleTuneMax}
                  >
                    <RotatingRefresh size={12} isSpinning={isSimulating} />
                    Auto-Tune Maximum Performance
                  </Button>
                </div>
              </div>
            </Grid>
          </Flex>
        </SandboxCard>
      </Container>
    </SegmentWork>
  );
};

// ==========================================
// 5. SPECIALTIES ORGANISM
// ==========================================
const SpecBlockSection = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid ${theme.colors.borderDark};
  background: ${theme.colors.bgDarkSec};
`;

const SpecCard = styled.div<{ cols?: number }>`
  background: ${theme.colors.cardDark};
  border: 1px solid ${theme.colors.borderDark};
  border-radius: 8px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  box-sizing: border-box;
  grid-column: span ${(props) => props.cols || 1};
  transition: all 0.3s;

  &:hover {
    border-color: rgba(0, 220, 229, 0.2);
  }
`;

const InteractiveBlock = styled.div`
  background: rgba(16, 20, 23, 0.9);
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.borderDark};
  box-sizing: border-box;
`;

const ColorDotSelector = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "bg",
})<{ bg: string; active?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  border: 2px solid ${(props) => (props.active ? theme.colors.white : "transparent")};
  cursor: pointer;
  padding: 0;
`;

export const SpecialtiesOrganism: React.FC = () => {
  // Card 1
  const [btnShape, setBtnShape] = useState<"none" | "soft" | "pill">("soft");
  const [btnColor, setBtnColor] = useState<"cyan" | "blue" | "white">("cyan");

  // Card 2
  const [stateLogs, setStateLogs] = useState([
    { id: 1, action: "telemetry/INITIALIZE_APP", duration: 2.1 },
    { id: 2, action: "clinic/FETCH_PATIENTS_SUCCESS", duration: 12.8 },
  ]);
  const [logCounter, setLogCounter] = useState(3);

  const handlePushEvent = () => {
    const actions = [
      "user/TRIGGER_Virtual_Scroll",
      "dashboard/APPLY_LEAN_FILTER",
      "analytics/FLUSH_TELEMETRY_LOGS",
      "cache/INVALIDATE_STALE_SWR",
      "theme/TOGGLE_CYBER_MATRIX",
    ];
    const act = actions[Math.floor(Math.random() * actions.length)];
    const dur = parseFloat((Math.random() * 8 + 0.5).toFixed(1));
    setStateLogs((prev) => [{ id: logCounter, action: act, duration: dur }, ...prev.slice(0, 3)]);
    setLogCounter((c) => c + 1);
  };

  // Card 3
  const [strategy, setStrategy] = useState<"csr" | "ssr" | "ssg">("ssr");

  const STRATEGIES = {
    csr: {
      fcp: "2.4s",
      lcp: "3.8s",
      tti: "4.1s",
      waterfall: [
        { label: "HTML Payload", width: "15%", bg: "red" },
        { label: "React + JS Bundle", width: "55%", bg: "red" },
        { label: "Client Fetch API", width: "25%", bg: "orange" },
      ]
    },
    ssr: {
      fcp: "1.1s",
      lcp: "2.1s",
      tti: "2.5s",
      waterfall: [
        { label: "Server Render & HTML", width: "45%", bg: "yellow" },
        { label: "Client Hydration", width: "30%", bg: "cyan" },
        { label: "Pre-Hydrated Visuals", width: "10%", bg: "cyan" },
      ]
    },
    ssg: {
      fcp: "0.4s",
      lcp: "1.2s",
      tti: "1.4s",
      waterfall: [
        { label: "Static HTML Fetch", width: "20%", bg: "cyan" },
        { label: "Edge Swapping", width: "15%", bg: "cyan" },
        { label: "Light Client Hydrate", width: "25%", bg: "blue" },
      ]
    }
  };

  // Card 4
  const [teamSize, setTeamSize] = useState(12);
  const [linesOfCode, setLinesOfCode] = useState(150);

  const getSizingResult = () => {
    const score = teamSize * 1.5 + linesOfCode / 10;
    if (score > 100) {
      return {
        spec: "Decoupled Federated UI Micro-frontends",
        warning: "CRITICAL: Merging conflict rates likely exceed 30%. Namespace isolation mandatory.",
        color: theme.colors.danger,
        rec: "Establish self-contained feature workspaces containing isolated build boundaries."
      };
    } else if (score > 40) {
      return {
        spec: "Cohesive Layered Monorepo Architecture",
        warning: "MODERATE: Team coordination gaps drag performance down. Shared assets needs isolation.",
        color: theme.colors.warning,
        rec: "Utilize Turborepo code caching and lock core TS interfaces into unified shared libraries."
      };
    }
    return {
      spec: "Standard Multi-page Route Module",
      warning: "Low risk of styling anomalies or overlap namespaces.",
      color: theme.colors.success,
      rec: "Standard monorepo setup isn't strictly required. Prioritize basic CI pipeline linting."
    };
  };

  const sys = getSizingResult();

  return (
    <SpecBlockSection id="specialties">
      <Container>
        <Flex direction="column" gap="10px" style={{ marginBottom: "48px" }}>
          <Heading size="lg">Technical Arsenal</Heading>
          <Text variant="muted">Core engineering competencies that define my high-fidelity structural coding paradigm.</Text>
        </Flex>

        <Grid cols="repeat(auto-fit, minmax(260px, 1fr))" gap="24px" style={{ gridAutoRows: "auto" }}>
          {/* Card 1: Design Systems */}
          <SpecCard>
            <Flex justify="space-between" align="center">
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.colors.borderDark}`, padding: "8px", borderRadius: "4px" }}>
                <Layers size={16} style={{ color: theme.colors.cyberCyan }} />
              </div>
              <Text variant="mono" color="rgba(255, 255, 255, 0.3)" style={{ fontSize: "8px" }}>atomic systems</Text>
            </Flex>

            <div style={{ margin: "16px 0" }}>
              <Heading size="sm">Design Systems</Heading>
              <Text variant="small" color={theme.colors.onSurfaceVariant} style={{ marginTop: "6px" }}>
                Constructing accessible atomic component systems with robust strict CSS style overrides and token consistency.
              </Text>
            </div>

            <InteractiveBlock style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Grid cols="1fr 1fr 1fr" gap="4px">
                <Button variant={btnShape === "none" ? "primary" : "secondary"} size="sm" style={{ padding: "4px", fontSize: "9px" }} onClick={() => setBtnShape("none")}>Sharp</Button>
                <Button variant={btnShape === "soft" ? "primary" : "secondary"} size="sm" style={{ padding: "4px", fontSize: "9px" }} onClick={() => setBtnShape("soft")}>Soft</Button>
                <Button variant={btnShape === "pill" ? "primary" : "secondary"} size="sm" style={{ padding: "4px", fontSize: "9px" }} onClick={() => setBtnShape("pill")}>Pill</Button>
              </Grid>

              <Flex justify="space-between" align="center">
                <Text variant="mono" style={{ fontSize: "9px" }}>Token Block</Text>
                <Flex gap="6px">
                  <ColorDotSelector bg={theme.colors.cyberCyan} active={btnColor === "cyan"} onClick={() => setBtnColor("cyan")} />
                  <ColorDotSelector bg={theme.colors.reactBlue} active={btnColor === "blue"} onClick={() => setBtnColor("blue")} />
                  <ColorDotSelector bg={theme.colors.white} active={btnColor === "white"} onClick={() => setBtnColor("white")} />
                </Flex>
              </Flex>

              <div style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button
                  style={{
                    background: btnColor === "cyan" ? theme.colors.cyberCyan : btnColor === "blue" ? theme.colors.reactBlue : theme.colors.white,
                    color: theme.colors.black,
                    fontFamily: theme.fonts.mono,
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "6px 16px",
                    border: "none",
                    borderRadius: btnShape === "none" ? "0px" : btnShape === "soft" ? "4px" : "99px",
                    cursor: "pointer",
                    boxShadow: btnColor !== "white" ? `0 0 10px ${btnColor === "cyan" ? theme.colors.cyberCyan : theme.colors.reactBlue}80` : "none",
                  }}
                >
                  Button Accent
                </button>
              </div>
            </InteractiveBlock>
          </SpecCard>

          {/* Card 2: State Management */}
          <SpecCard>
            <Flex justify="space-between" align="center">
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.colors.borderDark}`, padding: "8px", borderRadius: "4px" }}>
                <Boxes size={16} style={{ color: theme.colors.reactBlue }} />
              </div>
              <Button variant="secondary" size="sm" style={{ fontSize: "8px", padding: "2px 8px" }} onClick={handlePushEvent}>+ Action</Button>
            </Flex>

            <div style={{ margin: "16px 0" }}>
              <Heading size="sm">State Management</Heading>
              <Text variant="small" color={theme.colors.onSurfaceVariant} style={{ marginTop: "6px" }}>
                Harmonizing global store systems (Redux Toolkit, Context) with structured payload validation cycles.
              </Text>
            </div>

            <InteractiveBlock style={{ height: "130px", overflow: "hidden", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Flex justify="space-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", pb: "4px" }}>
                <Text variant="mono" style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)" }}>Dispatched Action</Text>
                <Text variant="mono" style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)" }}>Duration</Text>
              </Flex>
              <Flex direction="column" gap="6px" style={{ overflow: "hidden" }}>
                {stateLogs.map((log) => (
                  <Flex key={log.id} justify="space-between" align="center">
                    <Text variant="mono" style={{ fontSize: "9px", color: theme.colors.reactBlue, width: "140px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {log.action}
                    </Text>
                    <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, background: "rgba(255,255,255,0.04)", padding: "2px 6px", borderRadius: "3px", color: "rgba(255,255,255,0.5)" }}>
                      +{log.duration}ms
                    </span>
                  </Flex>
                ))}
              </Flex>
            </InteractiveBlock>
          </SpecCard>

          {/* Card 3: Web Performance (Spans 2 columns on larger views) */}
          <SpecCard cols={2} style={{ background: `linear-gradient(135deg, ${theme.colors.cardDark}, #0c0f14)` }}>
            <Flex justify="space-between" align="center">
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.colors.borderDark}`, padding: "8px", borderRadius: "4px" }}>
                <Gauge size={16} style={{ color: theme.colors.cyberCyan }} />
              </div>
              <ToggleSwitch
                options={["csr", "ssr", "ssg"]}
                selected={strategy}
                onSelect={(val) => setStrategy(val as any)}
              />
            </Flex>

            <div style={{ margin: "16px 0" }}>
              <Heading size="sm">Web Performance</Heading>
              <Text variant="small" color={theme.colors.onSurfaceVariant} style={{ marginTop: "6px" }}>
                Maximizing critical rendering paths under edge delivery strategies, drastically reducing time-to-first-byte and payload waterfalls.
              </Text>
            </div>

            <InteractiveBlock>
              <Grid cols="1fr 1fr 1fr" gap="8px" style={{ marginBottom: "16px" }}>
                <div style={{ background: "rgba(255,255,255,0.01)", border: `1px solid ${theme.colors.borderDark}`, borderRadius: "4px", padding: "8px", textAlign: "center" }}>
                  <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.3)", display: "block" }}>FCP</span>
                  <span style={{ fontSize: "12px", fontFamily: theme.fonts.mono, color: theme.colors.white, fontWeight: "bold", display: "block", marginTop: "2px" }}>{STRATEGIES[strategy].fcp}</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.01)", border: `1px solid ${theme.colors.borderDark}`, borderRadius: "4px", padding: "8px", textAlign: "center" }}>
                  <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.3)", display: "block" }}>LCP</span>
                  <span style={{ fontSize: "12px", fontFamily: theme.fonts.mono, color: theme.colors.white, fontWeight: "bold", display: "block", marginTop: "2px" }}>{STRATEGIES[strategy].lcp}</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.01)", border: `1px solid ${theme.colors.borderDark}`, borderRadius: "4px", padding: "8px", textAlign: "center" }}>
                  <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.3)", display: "block" }}>TTI</span>
                  <span style={{ fontSize: "12px", fontFamily: theme.fonts.mono, color: theme.colors.white, fontWeight: "bold", display: "block", marginTop: "2px" }}>{STRATEGIES[strategy].tti}</span>
                </div>
              </Grid>

              <Flex direction="column" gap="8px">
                {STRATEGIES[strategy].waterfall.map((bar, i) => {
                  const colorMap: Record<string, string> = {
                    red: theme.colors.danger,
                    orange: theme.colors.warning,
                    yellow: theme.colors.warning,
                    cyan: theme.colors.cyberCyan,
                    blue: theme.colors.reactBlue,
                  };
                  return (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <Flex justify="space-between" style={{ fontSize: "8px", fontFamily: theme.fonts.mono }}>
                        <span style={{ color: "rgba(255,255,255,0.5)" }}>{bar.label}</span>
                        <span style={{ color: "rgba(255,255,255,0.3)" }}>{bar.width}</span>
                      </Flex>
                      <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: bar.width, background: colorMap[bar.bg] || theme.colors.cyberCyan, borderRadius: "2px", transition: "width 0.4s ease" }} />
                      </div>
                    </div>
                  );
                })}
              </Flex>
            </InteractiveBlock>
          </SpecCard>

          {/* Card 4: Enterprise Scalability Config (Self contained dynamic slider organism) */}
          <SpecCard cols={4} style={{ height: "auto" }}>
            <Flex justify="space-between" align="center" style={{ marginBottom: "16px" }}>
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.colors.borderDark}`, padding: "8px", borderRadius: "4px" }}>
                <Milestone size={16} style={{ color: theme.colors.cyberCyan }} />
              </div>
              <Badge variant="cyan">Interactive Calculator</Badge>
            </Flex>

            <Grid cols="1.2fr 1fr" gap="28px">
              <Flex direction="column" gap="16px">
                <div>
                  <Heading size="sm">Enterprise Scalability</Heading>
                  <Text variant="small" color={theme.colors.onSurfaceVariant} style={{ marginTop: "4px" }}>
                    Engineering reliable decoupled architectures capable of coordinating vast lines of code and distributed developer nodes safely.
                  </Text>
                </div>

                <Flex direction="column" gap="12px">
                  <div>
                    <Flex justify="space-between" style={{ marginBottom: "4px", fontSize: "10px", fontFamily: theme.fonts.mono }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>Active Developers</span>
                      <span style={{ color: theme.colors.cyberCyan, fontWeight: "bold" }}>{teamSize} Engineers</span>
                    </Flex>
                    <Slider
                      min={3}
                      max={85}
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value))}
                    />
                  </div>

                  <div>
                    <Flex justify="space-between" style={{ marginBottom: "4px", fontSize: "10px", fontFamily: theme.fonts.mono }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>Codebase Weight</span>
                      <span style={{ color: theme.colors.cyberCyan, fontWeight: "bold" }}>{linesOfCode}K lines of code</span>
                    </Flex>
                    <Slider
                      min={10}
                      max={500}
                      value={linesOfCode}
                      onChange={(e) => setLinesOfCode(parseInt(e.target.value))}
                    />
                  </div>
                </Flex>
              </Flex>

              <div style={{ background: theme.colors.bgDark, padding: "20px", borderRadius: "6px", border: `1px solid ${theme.colors.borderDark}`, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "center" }}>
                <div>
                  <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.4)" }}>Suggested System Archetype</span>
                  <div style={{ fontSize: "1rem", fontFamily: theme.fonts.display, fontWeight: "bold", color: sys.color, marginTop: "2px" }}>
                    {sys.spec}
                  </div>
                </div>

                <div style={{ border: `1px solid ${theme.colors.borderDark}`, background: "rgba(255,255,255,0.01)", padding: "10px", borderRadius: "4px", fontSize: "10px", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <AlertCircle size={14} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.3)" }}>Team Risk Metric</span>
                    <Text variant="small" style={{ fontSize: "10px" }}>{sys.warning}</Text>
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: "8px", fontFamily: theme.fonts.mono, color: "rgba(255,255,255,0.4)" }}>Action Blueprint</span>
                  <p style={{ fontSize: "10px", fontFamily: theme.fonts.mono, color: theme.colors.onSurfaceVariant, margin: "2px 0 0 0" }}>{sys.rec}</p>
                </div>
              </div>
            </Grid>
          </SpecCard>
        </Grid>
      </Container>
    </SpecBlockSection>
  );
};

// ==========================================
// 6. TERMINAL & CONTACT ORGANISM
// ==========================================
const ContactSection = styled.section`
  padding: 100px 0;
`;

const TermBox = styled.div`
  max-width: 750px;
  margin: 0 auto;
  background: ${theme.colors.black};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
  position: relative;
`;

const TermHeader = styled.div`
  background: #12161f;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WindowDot = styled.span<{ bg: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.bg};
  display: inline-block;
`;

const TermBody = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TerminalConsole = styled.div`
  background: #0b0e14;
  border: 1px solid rgba(255, 255, 255, 0.03);
  padding: 16px;
  border-radius: 4px;
  height: 240px;
  overflow-y: auto;
  font-family: ${theme.fonts.mono};
  font-size: 11px;
`;

const SuccessOverlayBtn = styled.button`
  background: transparent;
  border: none;
  color: ${theme.colors.cyberCyan};
  font-family: ${theme.fonts.mono};
  font-size: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover {
    text-decoration: underline;
  }
`;

export const TerminalOrganism: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [shellInput, setShellInput] = useState("");
  const [shellHistory, setShellHistory] = useState<TerminalLine[]>([
    { type: "system", text: "Lumina Core OS v6.2.3 (TTY Line 1)" },
    { type: "system", text: "Type 'help' to audit available portfolio commands." },
  ]);

  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionProgress, setTransmissionProgress] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const hasScrolledTerminalOnMount = useRef(false);

  useEffect(() => {
    if (!hasScrolledTerminalOnMount.current) {
      hasScrolledTerminalOnMount.current = true;
      return;
    }

    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [shellHistory, transmissionProgress]);

  const handleInputChange = (field: string, val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const pushLog = (type: TerminalLine["type"], text: string) => {
    setShellHistory((prev) => [...prev, { type, text }]);
  };

  const executeFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      pushLog("error", "Error: [Parameter --name is blank or missing]");
      return;
    }
    if (!formData.email.includes("@")) {
      pushLog("error", "Error: [Parameter --email does not match verified domain structure]");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 8) {
      pushLog("error", "Error: [Transmission payload is too short or lacks structural content]");
      return;
    }

    setIsTransmitting(true);
    setTransmissionProgress([]);
    setIsSuccess(false);

    const logs = [
      `shahil@portfolio:~$ contact --name "${formData.name}" --email "${formData.email}" --execute`,
      "[TELEMETRY] Initializing secure handshake with main server...",
      "[TELEMETRY] Parsing cryptographic keys and validating SSL layers...",
      "[TUNNEL] Route calculated: Client Node -> Edge Inbound Router Queue.",
      `[TRANSMISSION] Broadcasting package (Size: ${Math.round(formData.message.length * 0.12)} bytes)...`,
      `[SUCCESS] Message successfully dispatched at UTC: ${new Date().toISOString()}`,
      `[VIRTUAL_SHAHIL] "Hi, ${formData.name}! Telemetry package captured successfully. I'll inspect your message at ${formData.email} soon."`,
    ];

    let logIndex = 0;
    const timer = setInterval(() => {
      if (logIndex < logs.length) {
        setTransmissionProgress((p) => [...p, logs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(timer);
        setIsTransmitting(false);
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    }, 400);
  };

  const handleShellCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = shellInput.trim().toLowerCase();
    if (!cmd) return;

    pushLog("input", `shahil@portfolio:~$ ${shellInput}`);
    setShellInput("");

    switch (cmd) {
      case "help":
        pushLog("output", "Available commands:");
        pushLog("output", "  about      Display brief strategic bio of Shahil Subham");
        pushLog("output", "  skills     Audit core technologies stack");
        pushLog("output", "  projects   Audit select enterprise experience");
        pushLog("output", "  clear      Clear console logs");
        pushLog("output", "  contact    Instruct on how to fire telemetry message");
        break;
      case "clear":
        setShellHistory([]);
        break;
      case "about":
        pushLog("output", "BIO: Senior Frontend Engineer & Architect with 6+ years of experience.");
        pushLog("output", "MISSION: Specializing in DOM rendering tuning, client-state modularization, and UX accessibility audit schemes.");
        break;
      case "skills":
        pushLog("output", "TECHNICAL INVENTORY:");
        pushLog("output", "  - Core: React, Next.js, TypeScript, Styled-Components");
        pushLog("output", "  - State: Redux Toolkit, Context, SWR");
        pushLog("output", "  - Performance: Virtual Scrolling, Bundle Tuning, Layout Shift (CLS) eradication");
        break;
      case "projects":
        pushLog("output", "PORTFOLIO TARGETS:");
        pushLog("output", "  - Marriott Dashboard (Optimized metrics by 40%)");
        pushLog("output", "  - Optum Clinical Design System (Reduced turnaround cycle by 30%)");
        break;
      case "contact":
        pushLog("output", "Instructions: Please fill the Name, Email, and Message fields, then click '[ Execute ]'.");
        break;
      default:
        pushLog("error", `Error: [Command '${cmd}' not recognized.]`);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Flex direction="column" gap="8px" align="center" style={{ marginBottom: "36px" }}>
          <Heading size="sm" style={{ textTransform: "uppercase", letterSpacing: "1px" }}>Initialize Connection</Heading>
          <Text variant="small" color={theme.colors.onSurfaceVariant}>Submit secure transmission directly to Shahil's message queues.</Text>
        </Flex>

        <TermBox>
          <TermHeader>
            <Flex gap="6px">
              <WindowDot bg="#ff5f56" />
              <WindowDot bg="#ffbd2e" />
              <WindowDot bg="#27c93f" />
            </Flex>
            <Text variant="mono" style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>shahil@portfolio:~$ contact --me</Text>
            <div style={{ width: "40px" }} />
          </TermHeader>

          <TermBody>
            {isTransmitting || isSuccess ? (
              <TerminalConsole>
                <Flex justify="space-between" align="center" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)", paddingBottom: "6px", marginBottom: "8px" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>SECURE SEQUENCE STATUS</span>
                  {isSuccess && (
                    <SuccessOverlayBtn onClick={() => { setIsSuccess(false); setTransmissionProgress([]); }}>
                      <RotateCcw size={10} /> Reset TTY
                    </SuccessOverlayBtn>
                  )}
                </Flex>

                <Flex direction="column" gap="4px">
                  {transmissionProgress.map((step, idx) => {
                    let col = "rgba(255,255,255,0.4)";
                    if (step.startsWith("[SUCCESS]")) col = theme.colors.cyberCyan;
                    else if (step.startsWith("[VIRTUAL_SHAHIL]")) col = theme.colors.reactBlue;
                    else if (step.startsWith("[TELEMETRY]")) col = "rgba(255,255,255,0.7)";
                    return <div key={idx} style={{ color: col, lineHeight: "1.4" }}>{step}</div>;
                  })}
                  {isTransmitting && (
                    <PulseStatus>
                      Pending broadcasting packet...
                    </PulseStatus>
                  )}
                </Flex>
                <div ref={consoleEndRef} />
              </TerminalConsole>
            ) : (
              <form onSubmit={executeFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <FormField
                  label="Name:"
                  id="name"
                  placeholder="guest_user"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <FormField
                  label="Email:"
                  id="email"
                  placeholder="ping@domain.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
                <FormField
                  label="Message:"
                  id="message"
                  as="textarea"
                  placeholder="Enter transmission parameters (min 8 characters)..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />

                <Flex justify="flex-end">
                  <Button type="submit" variant="execute">
                    [ Execute ]
                  </Button>
                </Flex>
              </form>
            )}

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <Flex align="center" gap="8px" style={{ color: "rgba(255,255,255,0.3)" }}>
                <TerminalIcon size={14} style={{ color: theme.colors.cyberCyan }} />
                <Text variant="mono" style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px" }}>Interactive shell interface</Text>
              </Flex>

              <TerminalConsole style={{ height: "100px" }}>
                <Flex direction="column" gap="4px">
                  {shellHistory.map((line, i) => {
                    let col = "rgba(255,255,255,0.6)";
                    if (line.type === "input") col = theme.colors.white;
                    else if (line.type === "error") col = theme.colors.danger;
                    else if (line.type === "success") col = theme.colors.cyberCyan;
                    return <div key={i} style={{ color: col }}>{line.text}</div>;
                  })}
                  <div ref={consoleEndRef} />
                </Flex>
              </TerminalConsole>

              <ShellPrompt value={shellInput} onChange={setShellInput} onSubmit={handleShellCommand} />
            </div>
          </TermBody>
        </TermBox>
      </Container>
    </ContactSection>
  );
};

// ==========================================
// 7. FOOTPLATE ORGANISM
// ==========================================
const FootWrapper = styled.footer`
  padding: 48px 0;
  background: ${theme.colors.bgDarkThird};
  border-top: 1px solid ${theme.colors.borderDark};
`;

const FootInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FootLink = styled.a`
  font-family: ${theme.fonts.mono};
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;

  &:hover {
    color: ${theme.colors.cyberCyan};
  }
`;

export const FooterOrganism: React.FC = () => {
  return (
    <FootWrapper>
      <FootInner>
        <Text variant="mono" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
          © 2026 SHAHIL SUBHAM. DESIGNED WITH REACT & STYLED-COMPONENTS
        </Text>

        <Flex gap="24px" align="center">
          <FootLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github size={12} />
            <span>GitHub</span>
          </FootLink>

          <FootLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={12} />
            <span>LinkedIn</span>
          </FootLink>

          <FootLink href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">
            <Zap size={12} />
            <span>Material Symbols</span>
          </FootLink>
        </Flex>
      </FootInner>
    </FootWrapper>
  );
};
