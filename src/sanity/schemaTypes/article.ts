import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Writing",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "source", title: "Source", type: "string",
      options: { list: ["LinkedIn", "Discourse Channel", "Other"] }
    }),
    defineField({ name: "date", title: "Date", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({ name: "link", title: "Link", type: "url" }),
    defineField({ name: "thumb", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({
      name: "tags", title: "Tags", type: "array",
      of: [{ type: "string" }]
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});