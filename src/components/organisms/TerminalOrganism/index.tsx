import React, { useEffect, useRef, useState } from "react";
import { RotateCcw, Terminal as TerminalIcon } from "lucide-react";
import { theme, Flex, Container, Heading, Text, Button } from "../../atoms";
import { FormField, ShellPrompt } from "../../molecules";
import {
  TerminalSection,
  TerminalCard,
  ConsolePreview,
  ConsoleHeader,
  StatusDot,
  ConsoleBody,
  ConsoleLine,
  PromptPanel,
  PromptButtons,
  SuccessOverlayBtn,
  ConsoleInfo,
  PulseStatus,
  TerminalAction,
} from "./styles";

export const TerminalOrganism: React.FC = () => {
  const [isTuned, setIsTuned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [consoleLines, setConsoleLines] = useState([
    { label: "Initializing dev build", value: "OK" },
    { label: "Applying hot-reload hooks", value: "OK" },
    { label: "Validating accessibility rules", value: "OK" },
  ]);
  const [requestPayload, setRequestPayload] = useState({ endpoint: "/api/v1/optimize", method: "POST" });
  const [output, setOutput] = useState("Ready to tune architecture...\n");
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolledTerminalOnMount, setHasScrolledTerminalOnMount] = useState(false);

  useEffect(() => {
    if (terminalRef.current && !hasScrolledTerminalOnMount) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      setHasScrolledTerminalOnMount(true);
    }
  }, [hasScrolledTerminalOnMount]);

  const runTerminal = () => {
    setIsLoading(true);
    setOutput("Optimizing...\n");
    setTimeout(() => {
      setIsLoading(false);
      setIsTuned(true);
      setOutput(
        "✅ Optimization complete\n- Bundle size reduced by 27%\n- JS execution latency trimmed by 33%\n- Hydration path simplified\n"
      );
      setConsoleLines((prev) => [
        ...prev,
        { label: "Auto-tune applied", value: "SUCCESS" },
      ]);
    }, 1200);
  };

  return (
    <TerminalSection id="contact">
      <Container>
        <Heading size="lg">Deploy Through the Console</Heading>
        <Text variant="muted">A command-led summary of the frontend tuning experience so stakeholders can see how high performance is delivered.</Text>

        <TerminalCard>
          <ConsolePreview ref={terminalRef}>
            <ConsoleHeader>
              <Flex align="center" gap="12px">
                <StatusDot active={!isLoading} />
                <Text variant="mono" style={{ fontSize: "0.75rem" }}>{isLoading ? "Processing optimization" : "Ready"}</Text>
              </Flex>
              <Text variant="mono" style={{ fontSize: "0.75rem", color: theme.colors.onSurfaceVariant }}>Terminal / workspace</Text>
            </ConsoleHeader>

            <ConsoleBody>
              {consoleLines.map((line, index) => (
                <ConsoleLine key={index}>
                  <span>{line.label}</span>
                  <Text style={{ color: line.value === "OK" || line.value === "SUCCESS" ? theme.colors.success : theme.colors.warning }}>{line.value}</Text>
                </ConsoleLine>
              ))}
            </ConsoleBody>

            <ConsoleInfo>
              <Text variant="mono" style={{ color: theme.colors.onSurfaceVariant, fontSize: "0.75rem" }}>
                API: {requestPayload.endpoint} • Method: {requestPayload.method}
              </Text>
              <PulseStatus>
                <TerminalIcon size={14} />
                System stable. Live instrumentation enabled.
              </PulseStatus>
            </ConsoleInfo>
          </ConsolePreview>

          <PromptPanel>
            <FormField
              label="Request Payload"
              rows={5}
              value={JSON.stringify(requestPayload, null, 2)}
              onChange={(value) => {
                try {
                  setRequestPayload(JSON.parse(value));
                } catch {
                  // ignore invalid JSON typed by users
                }
              }}
              placeholder={`{ "endpoint": "/api/v1/optimize" }`} />

            <ShellPrompt prompt="npm run start" description="Starts the frontend dev process with live reloading and HTTP/2 bundling." />
          </PromptPanel>
        </TerminalCard>
      </Container>
    </TerminalSection>
  );
};
