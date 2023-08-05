import { defineType, defineField } from "sanity";

export default defineType({
  title: "Category",
  name: "category",
  type: "document",
  fields: [
    defineField({
        
            title: "Name",
            name: "categoryName",
            type: "string",
          
      }),
      defineField( {
        title: "Link",
        name: "link",
        type: "string",
      }),
    

   
  ],
});
