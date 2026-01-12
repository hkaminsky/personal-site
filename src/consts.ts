import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Harrison Kaminsky",
  EMAIL: "hdkamin@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_AWARDS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Writing",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const AWARDS: Metadata = {
  TITLE: "Awards & Recognition",
  DESCRIPTION: "Recognition and awards received for outstanding work and achievements.",
};

export const PROJECTS_PASSWORD = "kaminskyproject";

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/harrisonkaminsky/",
  },
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/Harry_Kaminsky",
  }
];