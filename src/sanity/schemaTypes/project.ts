import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "org", title: "Organisation", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string" }),
    defineField({
      name: "status", title: "Status", type: "string",
      options: { list: ["Active", "Completed"] }
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "link", title: "Link", type: "url" }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "tags", title: "Tags", type: "array",
      of: [{ type: "string" }]
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});