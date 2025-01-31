import { z } from "zod";

export type PromptCategory = "writing" | "creative" | "business" | "technical" | "academic";

export const promptCategories: PromptCategory[] = [
  "writing",
  "creative", 
  "business",
  "technical",
  "academic"
];

export const categoryColors: Record<PromptCategory, { bg: string; text: string }> = {
  writing: { bg: "bg-pink-100 dark:bg-pink-900", text: "text-pink-800 dark:text-pink-100" },
  creative: { bg: "bg-purple-100 dark:bg-purple-900", text: "text-purple-800 dark:text-purple-100" },
  business: { bg: "bg-blue-100 dark:bg-blue-900", text: "text-blue-800 dark:text-blue-100" },
  technical: { bg: "bg-emerald-100 dark:bg-emerald-900", text: "text-emerald-800 dark:text-emerald-100" },
  academic: { bg: "bg-amber-100 dark:bg-amber-900", text: "text-amber-800 dark:text-amber-100" }
};

export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: PromptCategory;
}

export const prompts: Prompt[] = [
  {
    id: "1",
    title: "Story Premise Generator",
    description: "Generate unique story ideas with detailed premises",
    content: "I want you to act as a creative writing prompt generator. Generate a unique story premise that includes: 1) A main character with an unusual occupation 2) A surprising inciting incident 3) A moral dilemma the character must face. Make it original and compelling.",
    category: "creative"
  },
  {
    id: "2",
    title: "Technical Documentation Expert",
    description: "Create clear and comprehensive technical documentation",
    content: "Act as a technical documentation expert. Help me create comprehensive documentation for [project/feature] that includes: 1) Overview 2) Getting Started guide 3) API reference 4) Common use cases 5) Troubleshooting tips. Focus on clarity and completeness.",
    category: "technical"
  },
  {
    id: "3",
    title: "Business Strategy Advisor",
    description: "Get strategic business advice and planning help",
    content: "I want you to act as a business strategy consultant. Help me develop a comprehensive strategy for [business goal] that considers: 1) Market analysis 2) Competitive advantages 3) Resource requirements 4) Implementation timeline 5) Success metrics. Be specific and actionable.",
    category: "business"
  },
  {
    id: "4",
    title: "Academic Research Question",
    description: "Generate focused research questions for academic papers",
    content: "Act as an academic research advisor. Help me formulate a research question for [topic] that is: 1) Specific and focused 2) Researchable 3) Significant to the field 4) Clear and unambiguous 5) Appropriate for the scope of the project.",
    category: "academic"
  },
  {
    id: "5",
    title: "Writing Style Transformer",
    description: "Transform text into different writing styles",
    content: "I want you to act as a writing style expert. Transform the following text into [style] while maintaining its core meaning. Consider: 1) Vocabulary choice 2) Sentence structure 3) Tone and voice 4) Literary devices 5) Rhythm and flow.",
    category: "writing"
  }
];