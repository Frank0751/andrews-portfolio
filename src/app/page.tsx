import { client } from "@/lib/sanity";
import HomeClient from "./HomeClient";

export const revalidate = 60;

async function getTestimonials() {
  try {
    return await client.fetch(`
      *[_type == "testimonial"] | order(order asc) {
        _id, quote, name, title
      }
    `);
  } catch {
    return [];
  }
}

export default async function Home() {
  const testimonials = await getTestimonials();
  return <HomeClient testimonials={testimonials} />;
}