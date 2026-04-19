import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "org", title: "Organisation", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({
      name: "type", title: "Type", type: "string",
      options: { list: ["Current", "Previous"] }
    }),
    defineField({ name: "link", title: "Website Link", type: "url" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});