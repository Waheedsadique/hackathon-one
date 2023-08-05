import { defineType, defineField } from "sanity";

export default defineType({
  title: "Hero Section",
  name: "heroSection",
  type: "document",
  fields: [
    defineField(

        {
          title: "Hero Text",
          name: "heroText",
          type: "string",
        }
    ),
   defineField( {
    title: "Hero Images",
    name: "heroImages",
    type: "array",
    of: [
      {
        type: "image",
      },
    ],
  },),
    defineField({
        name: "details",
        title: "Details",
        type: "array",
        of: [{ type: "block" }],
      }),
  ],
});
