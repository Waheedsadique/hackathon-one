import { createClient } from '@sanity/client';



export const client = createClient({
  token:process.env.SANITY_ACCESS_TOKEN,
  apiVersion:"2023-08-02",
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
})
