import { defineCollection, reference, z } from "astro:content";

const restaurantsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      city: z.string().min(1),
      state: z.string().min(1),
      country: z.string().min(1),
      rating: z.number().min(1).max(5),
      priceRange: z.string().min(1),
      imageUrl: image(),
      description: z.string().min(1),
      waitTime: z.string().min(1),
      established: z.number(),
      website: z.string().url(),
    }),
});

const reviewsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    restaurantId: reference("restaurants"),
    author: z.string(),
    visitDate: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  restaurants: restaurantsCollection,
  reviews: reviewsCollection,
};
