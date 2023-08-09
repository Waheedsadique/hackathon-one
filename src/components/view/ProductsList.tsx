"use client"

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addCart } from '@/app/store/slice/cart'
import { Button } from '../ui/button'
import { Product } from '../../../Types/Product'
import { ShoppingCart } from 'lucide-react'
import toast from "react-hot-toast"


interface Prop {
    data: Product[]
}
function ProductList({ data }: Prop) {
    const dispatch = useDispatch();
    const Addproduct = (productAdd: Product, qty: number)=>{
        dispatch(addCart({product:productAdd, quantity:qty}))
        toast.success("Successfully Product Added ",{
            icon: '👏',
          })

    }
    return (
        <main className="grid grid-cols-1 md:grid md:grid-cols-3  gap-4 mb-[50px] mt-[100px]">

            {data.map((iProduct) => (
                <div key={iProduct._id} className="space-y-2 shadow-lg py-4">
                    <Link href={`../product/${iProduct.slug}`}>
                        <div className=" mx-auto">
                            <Image
                                src={iProduct.images[0]}
                                height={250}
                                width={250}
                                alt={iProduct.name}
                                className="transition duration-300 ease-in-out hover:scale-110 w-[300px] h-[300px] object-cover"
                            />
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-xl font-bold py-2">{iProduct.name}</div>
                            <div className="text-xl font-semibold py-2" >
                                {iProduct.currency}
                                {iProduct.price}
                            </div>

                        </div>
                    </Link>
                    <div className="flex justify-center mx-auto">
                        <Button onClick={()=>Addproduct(iProduct,1)} className="w-auto md:w-auto  hover:bg-gradient-to-r from-red-600 to-orange-400 bg-black/60 m-4 font-semibold text-white  rounded shadow hover:shadow-lg py-2 px-4 border border-gray-800 hover:border-transparent gap-2" >
                            <ShoppingCart /> Add to cart
                        </Button>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default ProductList