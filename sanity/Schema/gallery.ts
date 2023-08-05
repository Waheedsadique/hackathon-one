import { defineType, defineField } from "sanity";

export default defineType({
  title: "Gallery",
  name: "gallery",
  type: "document",
  fields: [
    defineField(

        {
          title: "Gallery Text",
          name: "galleryText",
          type: "string",
        }
    ),
   defineField( {
    title: "Gallery Images",
    name: "galleryImages",
    type: "array",
    of: [
      {
        type: "image",
      },
    ],
  },),
   
  ],
});