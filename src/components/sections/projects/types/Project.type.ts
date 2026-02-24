export interface Project {
  id: number;
  title: string;

  // Contextual information
  year: number | string;
  status: "completed" | "in-progress" | "maintained";
  role: string;

  // Detailed information
  shortDescription: string;
  problem: string;
  solution: string;
  impact?: string;

  // Technical details
  stack: string[];
  architecture?: string;
  keyFeatures: string[];
  challenges?: string[];
  decisions?: string[];
  teamSize?: number;
  methodology?: string;

  // Links and media
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  mainImage: string;
  images: string[];
  videoDemo?: string;

  // Additional metadata
  tags: string[];
}
