import { defineType, defineField } from "sanity";

export default defineType({
    title:"Images",
    name:"images",
    type:"document",
    fields:[
        defineField(

            {
            title:"Image Name",
            name:"imageName",
            type:"string"
        }
        ),
        defineField(

            {
                title:"Product Images",
                name:"productImages",
                type:"array",
                of:[{
                    type:"image"
                }]
        }
        )
       
    ]
})