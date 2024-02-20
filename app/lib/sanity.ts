import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'm9vl4wqn',
    dataset: 'production',
    apiVersion: '2024-02-20',
    useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source);
}