import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TrendingUp, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { theme, Flex, Grid, Container, Heading, Text, Badge, Button, GlowDot } from "../../atoms";
import { OptimizationOptionCard, MetricBox, ToggleSwitch, LiveGraph } from "../../molecules";
import { Project } from "../../../types";
import {
  SegmentWork,
  CaseCard,
  BrandBanner,
  BannerImg,
  BrandOverlay,
  CaseContent,
  TagsBox,
  ExpandContainer,
  ExpInner,
  SandboxCard,
} from "./styles";

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
      "Vast JS bundle sizes (1.2MB overhead) impeding client-side parsing speed on corporate devices.",
    ],
    solutions: [
      "Engineered dynamic window virtualization to prune inactive DOM elements on rooms/bookings lists.",
      "Implemented cache-validated pre-fetching using custom SWR/React Query invalidation pipelines.",
      "Refactored heavy client components to React Server Components (RSC), vaporizing 42% of client-bundle footprint.",
    ],
    achievements: [
      "Interaction to Next Paint (INP) reduced from 450ms to 75ms (classified as EXCELLENT).",
      "LCP speed optimized from 4.2s to 1.8s, driving higher desktop SEO value.",
      "Substandard rendering-related memory leaks completely solved across full workstation sessions.",
    ],
  },
  {
    id: "optum",
    title: "Health-Tech Design System",
    company: "Optum",
    logoUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqvUUqahd9KkowmhVZ498fGB9BshdRD8dpSnE66bEQ5bMe4N0hPY94gZfMeseez9DCzI-jlgFjeZuQ6Oc_0a4-U3Jv9KowHdw...",
    logoName: "Optum Brand Logo",
    description: "Engineered a highly scalable, fully accessible design system component library unifying Optum's fragmented UI ecosystem and HIPAA clinical tooling applications.",
    metric: "Reduced Dev Time by 30%",
    metricType: "speed",
    tags: ["TailwindCSS", "Redux Toolkit", "Vanilla React", "Radix Primitives"],
    challenges: [
      "Incohesive component styling patterns causing branding drift and developer overhead across 14 discrete tooling portals.",
      "Non-compliant UI code violating mandatory high WCAG 2.1 AA accessibility guidelines on screen readers.",
      "Slow development onboarding loops due to undocumented states and complex boilerplate styles.",
    ],
    solutions: [
      "Constructed a cohesive component architecture powered by TailwindCSS configuration rules and Radix accessible primitives.",
      "Standardized React Context & Redux state abstractions for common health telemetry displays (charts, patient cards).",
      "Created a modern, interactive sandbox documentation workspace enabling real-time component experimentation.",
    ],
    achievements: [
      "Average feature-building turnaround times declined by 30% across joint team pilots.",
      "100% WCAG AA screen reader compliance verified by strict automated testing rigs.",
      "Reduced redundant workspace boilerplate code, boosting asset reuse ratios by 50%.",
    ],
  },
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

                    <Button variant="secondary" size="sm" onClick={() => setExpandedId(isExpanded ? null : project.id)}>
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
                                  <strong style={{ color: theme.colors.danger, marginRight: "4px" }}>0{i + 1}.</strong> {c}
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
                                  <strong style={{ color: theme.colors.cyberCyan, marginRight: "4px" }}>0{i + 1}.</strong> {s}
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
                                <Text variant="mono" color={theme.colors.reactBlue} style={{ fontSize: "9px", fontWeight: "bold" }}>#Goal 0{i + 1}</Text>
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

              <ToggleSwitch options={["marriott", "optum"]} selected={simProject} onSelect={handleProjectChange} />
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
                    <Text variant="mono" color="rgba(255,255,255,0.3)" style={{ fontSize: "8px", textTransform: "uppercase" }}>
                      Calculated Rating
                    </Text>
                    <Text style={{ fontSize: "11px", color: theme.colors.white, fontWeight: 600 }}>
                      {opts.virtualScrolling && opts.bundleSplitting && opts.memoization && opts.prunedHooks
                        ? "Pure 100% Core Web Vitals"
                        : "Refactoring optimizations queued"}
                    </Text>
                  </div>
                </div>

                <div style={{ marginTop: "auto" }}>
                  <LiveGraph isSimulating={isSimulating} />
                  <Button variant="primary" fullWidth style={{ marginTop: "16px" }} onClick={handleTuneMax}>
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
