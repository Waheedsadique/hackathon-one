"use client"
import Link from "next/link"
import { Category } from "../../../Types/Category"
import Image from "next/image"
import logo from "../../../public/images/logo.png.webp"
import { ShoppingCart ,Search , MenuIcon} from "lucide-react"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button"
import { useAppSelector } from "@/app/store/hooks"


interface props {
    NavBarItem: Category[]
  }

const Header = ({NavBarItem}: props) => {
  const cartItem = useAppSelector((state) => state.cartArray);
  return (
    <main className=" w-full px-6 py-2 md:py-6 md:h-24 md:px-8 sticky top-0 bg-inherit z-10 flex justify-between items-center shadow-md">
       {/* <main className="py-2 sticky top-0 bg-inherit z-10 flex justify-between shadow-md"> */}
         <div className="cursor-pointer">
        <Link href={"/"} >
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="font-semibold text-lg" >
          <div className="flex gap-4">
            {NavBarItem.map((item) => (
              <div key={item._id}>
                <Link href={`../category/${item.categoryName}`}className="cursor-pointer">
                  <li  className="uppercase">
                    {item.categoryName}
                  </li>
                </Link>

              </div>
            ))}
            <li>
              <Link href={"../category/allproduct"}  >
                <div >
                  All Products
                </div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="flex gap-x-14">
        <div className="hidden md:flex border border-blue-500 px-50 mx-auto">
          <Search className="bg-white rounded-l " />{" "}
          <input
            type="text"
            placeholder="what's you want"
            className="w-72 px-4"
          />
        </div>
        
        
      </div>
      <div>
        <Link href={"../cart"} >
          <button className="relative p-3 hover:bg-slate-100 hover:rounded-full ">
            <ShoppingCart />
            <span className="absolute top-0 w-5 h-5 bg-red-500 rounded-full text-center text-white ">
              {cartItem.totalQuantity}
            </span>
          </button>
        </Link>
      </div>
      {/* Responsive Mob */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild><Button variant="outline"><MenuIcon /></Button></SheetTrigger>
          <SheetContent>
            <ul className="space-y-8 font-semibold text-lg">
              {
                NavBarItem.map((i) => (
                  <div key={i._id}>
                    <Link href={`../category/${i.categoryName}`}>
                      <SheetClose asChild>
                        <li>{i.categoryName}</li>
                      </SheetClose>
                    </Link>
                  </div>
                ))
              }
              <div>
                <Link href={"../category/allproduct"}>
                  <SheetClose asChild>
                    <li>All Products</li>
                  </SheetClose>
                </Link>
              </div>
            </ul>
          </SheetContent>
        </Sheet>

      </div>
    </main>
  )
}

export default Header