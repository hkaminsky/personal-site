import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const awards = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    project: z.string().optional(),
    awards: z.array(z.string()).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string()
    })).optional(),
  }),
});

export const collections = { blog, work, projects, awards };