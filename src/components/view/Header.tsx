"use client";
import Link from "next/link";
import { Category } from "../../../Types/Category";
import Image from "next/image";
import logo from "../../../public/images/logo.png.webp";
import {  Search, MenuIcon } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useAppSelector } from "@/app/store/hooks";
import cart from "../../../public/images/cartIcon.png";
import { ModeToggle } from "../Layout/ToggleButton";
import { useSession, signOut } from "next-auth/react";


interface props {
  NavBarItem: Category[];
}

const Header = ({ NavBarItem }: props) => {
  const cartItem = useAppSelector((state) => state.cartArray);
  const {data} = useSession();
console.log(data)
  return (
    <main className="fixed top-0 bg-white dark:bg-slate-900 z-10 w-full md:w-[94.5%] py-2 px-2 md:px-8   h-20   flex justify-between items-center shadow-md"> 
    
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
      <div className="flex space-x-3 mr-4">
        <div><ModeToggle/></div> 



        {data?.user ? (
          <div className="flex items-center gap-3">
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
          <p className="text-xs text-[#f22329] font-bold mt-3">Cart</p>
          <span className="absolute  text-[#f22329] text-sm top-2 left-[26px] font-semibold">
            {cartItem.totalQuantity}
          </span>
        </Link>
        </div>
        <div className="hover:bg-gradient-to-r from-red-600 to-orange-400 bg-black/60">
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
        </div>
        ):(
          <div>
          <Link href={"/login"}>
            <Button className=" hover:bg-gradient-to-r from-red-600 to-orange-400 bg-black/60">
              SignIn/Register</Button>
          </Link>
        </div>
        )}
      
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
