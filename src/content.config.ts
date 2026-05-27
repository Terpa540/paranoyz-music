import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.string(),
    cover: z.string(),
    year: z.string(),
    client: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
};