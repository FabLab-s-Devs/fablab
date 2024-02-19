import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'm9vl4wqn',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
})