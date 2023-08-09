import Image from "next/image"
import { Brand } from "../../../Types/brand"

interface prop {
    data:Brand[]
}

const BrandSection = ({data}:prop) => {
  return (
    <div className="mb-[50px] mt-[100px]">
       <h1 className='text-center text-6xl font-bold underline mb-6 '>Famous Brands</h1>
      <div className="gird py-2 grid-cols-2 px-24 md:flex justify-between items-center gap-2 md:px-8 mx-auto">
       {data.map((i)=>(
        <div  key={i._id}>
            <Image src={i.brandImages[0]} alt="brand" width={150} height={150} className="w-[150px] h-[150px]"/>
        </div>
       ))}
       </div>
    </div>
  )
}

export default BrandSection