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
}
