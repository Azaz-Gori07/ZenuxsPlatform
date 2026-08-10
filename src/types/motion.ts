export interface ScrollStep {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface StickyStoryProps {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  steps: ScrollStep[];
  activeStep: number;
  onStepChange: (index: number) => void;
  children: React.ReactNode;
}
