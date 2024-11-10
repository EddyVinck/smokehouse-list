import { defineCollection, reference, z } from 'astro:content';

const restaurantsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    city: z.string(),
    state: z.string(),
    rating: z.number(),
    priceRange: z.string(),
    specialty: z.string(),
    imageUrl: z.string().url(),
    description: z.string().optional(),
    waitTime: z.string().optional(),
    established: z.number().optional(),
    website: z.string().url().optional(),
  }),
});

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    restaurantId: reference('restaurants'),
    author: z.string(),
    rating: z.number().min(1).max(5),
    visitDate: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  restaurants: restaurantsCollection,
  reviews: reviewsCollection,
};