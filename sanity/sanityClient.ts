import SanityClient from "next-sanity-client";

export const client = new SanityClient({
    projectId: 'm9vl4wqn',
    dataset: 'production',
    useCdn: process.env.NODE_ENV === 'production',
})