import { defineField , defineType } from "sanity";
export default defineType({
    name: "products",
    title: "Products",
    type: "document",
    fields: [
        defineField({
            title: "Images",
            name: "images",
            type: "reference",
            to: [{ type: "images" }],
          }),
    defineField({
        name: "name",
        title: "Name",
        type: "string",
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" ,
        
    }
      }),
      defineField({
        title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
        
      }),
      defineField({
        name: "price",
        title: "Price",
        type: "number",
      }),
      defineField({
        name: "currency",
        title: "Currency",
        type: "string",
      
    }),
    defineField({
        name: "details",
        title: "Product Details",
        type: "array",
        of: [{ type: "block" }],
      }),
   
    ]
  })
  
  