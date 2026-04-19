import { defineField, defineType } from "sanity"

export default defineType({
  name: "galleryItem",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Portrait", value: "Portrait" },
          { title: "Speaking", value: "Speaking" },
          { title: "Events", value: "Events" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
})