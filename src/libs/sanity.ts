import { createClient } from 'next-sanity';

const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: process.env.NODE_ENV === 'production',
    token: process.env.SANITI_STUDIO_TOKEN,
    apiVersion: '2021-08-31'
});

export default sanityClient;