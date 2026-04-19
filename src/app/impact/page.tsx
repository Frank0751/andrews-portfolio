import { client } from "@/lib/sanity";
import ImpactClient from "./ImpactClient";

export const revalidate = 60;

async function getImpact() {
  try {
    return await client.fetch(`
      *[_type == "impact"] | order(order asc) {
        _id, title, description, category, stat, image, order
      }
    `);
  } catch {
    return [];
  }
}

export default async function Impact() {
  const impact = await getImpact();
  return <ImpactClient impact={impact} />;
}