export type Head = {
  title?: string;
  description?: string;
  noindex?: boolean;
  og?: {
    title: string;
    type: string;
    description: string;
    image: string;
    alt: string;
  };
};

export type Project = {
  title: string;
  description: string;
  link: string;
  isComingSoon?: boolean;
};

export type TailwindColor =
  | "orange"
  | "violet"
  | "red"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "blue"
  | "indigo"
  | "purple"
  | "fushia"
  | "pink"
  | "rose";

export type Social = {
  label: string;
  link: string;
};

export type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};
