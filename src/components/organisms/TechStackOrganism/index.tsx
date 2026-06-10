import React from "react";
import { theme, Text, Flex } from "../../atoms";
import {
  StackSection,
  MarqueeTrackWrapper,
  MarqueeSideOverlayLeft,
  MarqueeSideOverlayRight,
  MarqueeTrack,
  MarqueeTextSpan,
  ClientLogosGrid,
  ClientImgWrapper,
  ClientImg,
} from "./styles";

export const TechStackOrganism: React.FC = () => {
  const CORE_TECHS = ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL", "Styled-Components"];
  const marqueeItems = [...CORE_TECHS, ...CORE_TECHS, ...CORE_TECHS];

  const CLIENTS = [
    {
      name: "Marriott",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpw73jviyyUxJflBL_g906GREudK6mahnt5cBwPmasF8oR9jEcyxyBpcrsIL7JPQ2tWbke-TlgCizRruCrnscXq59PA9tnHmK5ntWzHi8G6HLNtkJH2IKekcrrw5AaKyOjjFYHD8HyJO8HKEaqCbdCdjoN2sS75K8_FLqFK-zYkQ5V2Qzh00YWi_tcjg3oeK5077NAMmgRBxrAX07JGsHDCe3EucTCV_vRVm15pmRsP8_juor-_7LgJhPTGQDh3J6LAQbJTEbxtc6",
    },
    {
      name: "Optum",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMqvUUqahd9KkowmhVZ498fGB9BshdRD8dpSnE66bEQ5bMe4N0hPY94gZfMeseez9DCzI-jlgFjeZuQ6Oc_0a4-U3Jv9KowHdw...",
    },
    {
      name: "Publicis Sapient",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwis1Se8_elgevdoCo5rOCiMxRNmtoHsskgQcHlJtorxGKAlCWSIZzg16xY8KcMCLKa0V6cyJjlltzZem7h-7ep3OL9f7SsXiNrCyqQP1SeC2jetP1eegGveZvrN9qKw62D9vfNGbqGRQpPQZqe00EeHs9iT9veSGncvpkB4Y4QiUsDFH7m7rQii7-z4bYqLeUJnPaHAf5LDU9D2CighidAHkx3G_BRFU9V49aQfEvv-3eT0Ra2jxhj2vdWErncI26JUkU2RxxGl-4",
    },
    {
      name: "Empower",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiYxLGJsrLef9W1uXsVGvm-1lUdHJ-iV-P3LuMDt5mYwWwgNMIoMIHHGhF-EnOb3WUHaJQFbg0qhZHY_qEbJu_JZtgya7uxcLQu5si2ihdiT5LYVCu1l-nyXoH2lfZrL-0DVB5ANVrcsCysZLPR07SgP_TOHpPNdGkMB0I0MGaGdxLvz_zkMpWUJx7SxAL-p-eaqj4VKuOHfZKeH0uMyssxpkiAYpb0lwex_3XdMZtlq0cpqCgrQfa-I6J0lDFxcsWkbjedGirMOmu",
    },
    {
      name: "Bristlecone",
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBu1Z3jyk-w5iKZFRmGDTxWk8kRGFkuooLAlKVdhychPIcIk7sSMjCCQKurX-q0-NSSK6NcxVrZFdsLVX54pEs_FfNqcqpDSpaPpyNZfbM0x3KDoNi4Mepm3KmS9SqQuQrvwYcnQPg40ePehvs4vjxT8WISTYafryy9yniMUiOy66-s9edAIQ1Dyg3McE-X5xaYAuEccESCNxNkYVUAGsc-IjbCa-sU1qeP76jJL8SZjn_C92yyp0tBScNqBi701ex6Yn9h3gpTLBsD",
    },
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
