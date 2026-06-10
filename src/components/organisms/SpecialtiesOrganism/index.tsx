import React, { useState } from "react";
import { Layers, Boxes, Gauge, Milestone, AlertCircle } from "lucide-react";
import { theme, Flex, Grid, Container, Heading, Text, Button, Badge } from "../../atoms";
import { ToggleSwitch } from "../../molecules";
import { SpecBlockSection, SpecCard, InteractiveBlock, ColorDotSelector } from "./styles";

export const SpecialtiesOrganism: React.FC = () => {
  const [btnShape, setBtnShape] = useState<"none" | "soft" | "pill">("soft");
  const [btnColor, setBtnColor] = useState<"cyan" | "blue" | "white">("cyan");
  const [stateLogs, setStateLogs] = useState([
    { id: 1, action: "telemetry/INITIALIZE_APP", duration: 2.1 },
    { id: 2, action: "clinic/FETCH_PATIENTS_SUCCESS", duration: 12.8 },
  ]);
  const [logCounter, setLogCounter] = useState(3);
  const [strategy, setStrategy] = useState<"csr" | "ssr" | "ssg">("ssr");
  const [teamSize, setTeamSize] = useState(12);
  const [linesOfCode, setLinesOfCode] = useState(150);

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

  const STRATEGIES = {
    csr: {
      fcp: "2.4s",
      lcp: "3.8s",
      tti: "4.1s",
      waterfall: [
        { label: "HTML Payload", width: "15%", bg: "red" },
        { label: "React + JS Bundle", width: "55%", bg: "red" },
        { label: "Client Fetch API", width: "25%", bg: "orange" },
      ],
    },
    ssr: {
      fcp: "1.1s",
      lcp: "2.1s",
      tti: "2.5s",
      waterfall: [
        { label: "Server Render & HTML", width: "45%", bg: "yellow" },
        { label: "Client Hydration", width: "30%", bg: "cyan" },
        { label: "Pre-Hydrated Visuals", width: "10%", bg: "cyan" },
      ],
    },
    ssg: {
      fcp: "0.4s",
      lcp: "1.2s",
      tti: "1.4s",
      waterfall: [
        { label: "Static HTML Fetch", width: "20%", bg: "cyan" },
        { label: "Edge Swapping", width: "15%", bg: "cyan" },
        { label: "Light Client Hydrate", width: "25%", bg: "blue" },
      ],
    },
  };

  const getSizingResult = () => {
    const score = teamSize * 1.5 + linesOfCode / 10;
    if (score > 100) {
      return {
        spec: "Decoupled Federated UI Micro-frontends",
        warning: "CRITICAL: Merging conflict rates likely exceed 30%. Namespace isolation mandatory.",
        color: theme.colors.danger,
        rec: "Establish self-contained feature workspaces containing isolated build boundaries.",
      };
    } else if (score > 40) {
      return {
        spec: "Cohesive Layered Monorepo Architecture",
        warning: "MODERATE: Team coordination gaps drag performance down. Shared assets needs isolation.",
        color: theme.colors.warning,
        rec: "Utilize Turborepo code caching and lock core TS interfaces into unified shared libraries.",
      };
    }
    return {
      spec: "Standard Multi-page Route Module",
      warning: "Low risk of styling anomalies or overlap namespaces.",
      color: theme.colors.success,
      rec: "Standard monorepo setup isn't strictly required. Prioritize basic CI pipeline linting.",
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
              <Flex justify="space-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "4px" }}>
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

          <SpecCard cols={2} style={{ background: `linear-gradient(135deg, ${theme.colors.cardDark}, #0c0f14)` }}>
            <Flex justify="space-between" align="center">
              <div style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${theme.colors.borderDark}`, padding: "8px", borderRadius: "4px" }}>
                <Gauge size={16} style={{ color: theme.colors.cyberCyan }} />
              </div>
              <ToggleSwitch options={["csr", "ssr", "ssg"]} selected={strategy} onSelect={(val) => setStrategy(val as any)} />
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
                    <input
                      type="range"
                      min={3}
                      max={85}
                      value={teamSize}
                      onChange={(e) => setTeamSize(parseInt(e.target.value))}
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div>
                    <Flex justify="space-between" style={{ marginBottom: "4px", fontSize: "10px", fontFamily: theme.fonts.mono }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>Codebase Weight</span>
                      <span style={{ color: theme.colors.cyberCyan, fontWeight: "bold" }}>{linesOfCode}K lines of code</span>
                    </Flex>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      value={linesOfCode}
                      onChange={(e) => setLinesOfCode(parseInt(e.target.value))}
                      style={{ width: "100%" }}
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
