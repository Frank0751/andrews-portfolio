import { client } from "@/lib/sanity";
import GalleryClient from "./GalleryClient";

export const revalidate = 60;

async function getGalleryItems() {
  try {
    return await client.fetch(`
      *[_type == "galleryItem"] | order(order asc) {
        _id,
        image,
        category,
        order
      }
    `);
  } catch {
    return [];
  }
}

export default async function Gallery() {
  const galleryItems = await getGalleryItems();
  return <GalleryClient galleryItems={galleryItems} />;
}