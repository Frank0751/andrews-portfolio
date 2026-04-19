import { defineField, defineType } from "sanity";

export default defineType({
  name: "impact",
  title: "Impact",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "category", title: "Category", type: "string",
      options: { list: ["Impact Area", "Key Moment", "Stat"] }
    }),
    defineField({ name: "stat", title: "Stat Number", type: "string" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});