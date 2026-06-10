import React from "react";
import { LiveGraphWrapper, GraphBar } from "./styles";

export const LiveGraph: React.FC<{ isSimulating?: boolean }> = ({ isSimulating }) => {
  const baseHeights = [4, 8, 3, 5, 12, 18, 14, 9, 13, 24, 16, 22, 15, 8, 11, 24, 30, 20, 15, 27, 34, 12, 10, 20];
  return (
    <LiveGraphWrapper>
      {baseHeights.map((h, i) => {
        const hPct = isSimulating ? Math.floor(Math.random() * 90) + 10 : h;
        return <GraphBar key={i} heightPct={hPct} isSimulating={isSimulating} />;
      })}
    </LiveGraphWrapper>
  );
};
