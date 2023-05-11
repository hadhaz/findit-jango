export type Menu = {
  name: string;
  path: string;
};

export type UserMenu = {
  name: string;
  icon: string;
  path: string;
};

export type Feature = {
  name: string;
  description: string;
  img: string;
};

export type Feedback = {
  name: string;
  img: string;
  score: number;
};

export type Article = {
  title: string;
  timeRead: number;
  detail: string;
};

export type Testimony = {
  name: string;
  img: string;
  testimony: string;
  job: string;
};

export type Result = {
  name: string;
  value: string | number;
  color: string;
};

export type FeedbackOverview = {
  name: string;
  value: number | string;
  color: string;
  unit: string | null;
  icon: string;
  suggestion: string | null;
  slug: string;
};

export type QuestLevel = "Pemula" | "Menengah" | "Mahir" | "Expert" | string


export type Quest = {
  questNumber: number;
  title: string;
  description: string;
  progress: number;
  img: string;
};

