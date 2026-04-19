import { client } from "@/lib/sanity";
import ProjectsClient from "./ProjectsClient";

export const revalidate = 60;

async function getProjects() {
  return client.fetch(`
    *[_type == "project"] | order(order asc) {
      _id,
      title,
      org,
      period,
      status,
      description,
      link,
      image,
      tags
    }
  `);
}

export default async function Projects() {
  const sanityProjects = await getProjects();
  return <ProjectsClient sanityProjects={sanityProjects} />;
}