import { client } from "@/lib/sanity";
import ExperienceClient from "./ExperienceClient";

export const revalidate = 60;

async function getExperience() {
  try {
    return await client.fetch(`
      *[_type == "experience"] | order(order asc) {
        _id, role, org, period, description, type, link
      }
    `);
  } catch {
    return [];
  }
}

export default async function Experience() {
  const experience = await getExperience();
  return <ExperienceClient experience={experience} />;
}