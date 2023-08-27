"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import SwiperCore from "swiper";

import Image from "next/image";
import { Product } from "../../../Types/Product";
import { useDispatch } from "react-redux";
import { addCart } from "@/app/store/slice/cart";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import Link from "next/link";
interface prop {
  Sdata: Product[];
}
const ProductSlider =  ({ Sdata }: prop) => {
  const dispatch = useDispatch();
  const { data } = useSession();
  const Addproduct = (productAdd: Product, qty: number)=>{
    dispatch(addCart({product:productAdd, quantity:qty}))
    toast.success("Successfully Product Added ",{
        icon: '👏',
      })

}
  return (
    <main className=" bg-gray-200 dark:bg-background md:flex justify-center items-center  h-auto px-14 mb-[50px] mt-[100px]">
      <Swiper
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter:true,
        }}
        modules={[Autoplay]}
      >
        <div className="flex items-center justify-between mt-4">
          {Sdata.map((s) => (
            <div key={s._id}>
              <SwiperSlide className="mt-4">
                <Image
                  src={s.images[0]}
                  alt="products"
                  height={350}
                  width={350}
                  className="transition duration-300 ease-in-out hover:scale-110 w-[300px] h-[300px] object-cover"
                />
                <div className="flex flex-col  justify-center mt-4">
                  <div className=" text-lg font-semibold">{s.name}</div>
                  <div className=" text-lg font-medium">
                    {s.currency}
                    {s.price}
                  </div>
                </div>
                <div className=" mx-auto">
                  {data?.user ? (
                        <Button onClick={() => Addproduct(s,1)} className="w-auto md:w-auto  hover:bg-gradient-to-r from-red-600 to-orange-400 bg-black/60 m-4 font-semibold text-white  rounded shadow hover:shadow-lg py-2 px-4 border border-gray-800 hover:border-transparent" >
                             Add to cart
                        </Button>):(
                          <Link href={"/login"}>
                          <Button className=" w-auto md:w-auto  hover:bg-gradient-to-r from-red-600 to-orange-400 bg-black/60 m-4 font-semibold text-white  rounded shadow hover:shadow-lg py-2 px-4 border border-gray-800 hover:border-transparent">
                            Login
                          </Button>
                        </Link>
                        )}
                    </div>
              </SwiperSlide>
              
            </div>
            
            
          ))}
        </div>
        

      </Swiper>
    </main>
  );
};

export default ProductSlider;
