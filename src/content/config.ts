import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    icon: z.enum(["code", "cloud", "monitor", "users"]),
    order: z.number(),
  }),
});

export const collections = { services };
