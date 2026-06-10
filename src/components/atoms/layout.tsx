import styled from "styled-components";

// Layout Primitives (Atoms)
export const Flex = styled.div.withConfig({
  shouldForwardProp: (prop) => !["direction", "justify", "align", "gap", "wrap", "fill"].includes(prop),
})<{
  direction?: "row" | "column";
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: "wrap" | "nowrap";
  fill?: boolean;
}>
`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "initial"};
  align-items: ${(props) => props.align || "initial"};
  gap: ${(props) => props.gap || "0px"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  width: ${(props) => (props.fill ? "100%" : "auto")};
`;

export const Grid = styled.div.withConfig({
  shouldForwardProp: (prop) => !["cols", "gap", "align"].includes(prop),
})<{
  cols?: string;
  gap?: string;
  align?: string;
}>
`
  display: grid;
  grid-template-columns: ${(props) => props.cols || "1fr"};
  gap: ${(props) => props.gap || "16px"};
  align-items: ${(props) => props.align || "initial"};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;
