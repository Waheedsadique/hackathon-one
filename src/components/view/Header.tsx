"use client";
import Link from "next/link";
import { Category } from "../../../Types/Category";
import Image from "next/image";
import logo from "../../../public/images/logo.png.webp";
import { ShoppingCart, Search, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useAppSelector } from "@/app/store/hooks";
import cart from "../../../public/images/cartIcon.png";


interface props {
  NavBarItem: Category[];
}

const Header = ({ NavBarItem }: props) => {
  const cartItem = useAppSelector((state) => state.cartArray);
  return (
    <main className="sticky top-0 bg-inherit z-10  py-2 md:px-8  flex justify-between items-center shadow-md"> 
    
      <div className="cursor-pointer">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="font-semibold text-lg">
          <div className="flex gap-4">
            {NavBarItem.map((item) => (
              <div key={item._id}>
                <Link
                  href={`../category/${item.categoryName}`}
                  className="cursor-pointer"
                >
                  <li className="uppercase">{item.categoryName}</li>
                </Link>
              </div>
            ))}
            <li>
              <Link href={"../category/allproduct"}>
                <div>All Products</div>
              </Link>
            </li>
          </div>
        </ul>
      </div>
      
      <div className="hidden md:flex gap-x-14 h-10 relative">
        <input
          className=" w-72 h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-black outline-none focus-visible:border-[#f22329]"
          type="text"
          placeholder="Search Products"
        />
        <span className="w-12 h-full bg-[#f22329] text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
          <Search />
        </span>
      </div>
      <div>
        <Link
          href={"../cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
      
          <Image
            className="w-auto object-cover h-10 stroke-black"
            src={cart}
            alt="cartImg"
            width={150}
            height={150}
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute  text-[#f22329] text-sm top-2 left-[26px] font-semibold">
            {cartItem.totalQuantity}
          </span>
        </Link>
      </div>
      {/* Responsive Mob */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ul className="space-y-8 font-semibold text-lg">
              {NavBarItem.map((i) => (
                <div key={i._id}>
                  <Link href={`../category/${i.categoryName}`}>
                    <SheetClose asChild>
                      <li>{i.categoryName}</li>
                    </SheetClose>
                  </Link>
                </div>
              ))}
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
  );
};

export default Header;
