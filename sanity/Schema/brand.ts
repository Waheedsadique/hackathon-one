import { defineType, defineField } from "sanity";

export default defineType({
  title: "Brand",
  name: "brand",
  type: "document",
  fields: [
    defineField(

        {
          title: "Brand Text",
          name: "brandText",
          type: "string",
        }
    ),
   defineField( {
    title: "Brand Images",
    name: "brandImages",
    type: "array",
    of: [
      {
        type: "image",
      },
    ],
  },),
   
  ],
});