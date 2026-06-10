export interface Project {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  logoName: string;
  description: string;
  metric: string;
  metricType: "performance" | "speed";
  tags: string[];
  challenges: string[];
  solutions: string[];
  achievements: string[];
}

export interface TerminalLine {
  type: "system" | "input" | "output" | "error" | "success";
  text: string;
}
