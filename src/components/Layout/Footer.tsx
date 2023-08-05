

import { Home,FacebookIcon,InstagramIcon, 
    TwitterIcon,LinkedinIcon,GithubIcon,
    MailIcon,PhoneCallIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo1 from "../../../public/images/logo.png.webp"


export default function Footer() {
  return (
    // <!-- Footer container -->
    <footer className="mb-[50px] mt-[100px] bg-neutral-100 px-10 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <Link href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FacebookIcon/>
          </Link>
          <Link href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
          <TwitterIcon/>
          </Link>
         
          <Link href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
           <InstagramIcon/>
          </Link>
          <Link href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <LinkedinIcon/>
          </Link>
          <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
          <GithubIcon/>
          </Link>
        </div>
      </div>

     {/* Main Footer */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Tailwind Elements section --> */}
          <div className="">
           
            <Image src={logo1} width={150} height={150} alt="logo" className="mb-4"/>
            <p>
          Our Logo is enough for  Trusted by eCommerce Businesses
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Mens Watch
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Females Watch
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Kids watch
              </Link>
            </p>
            <p>
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                All Product
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Pricing
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Settings
              </Link>
            </p>
            <p className="mb-4">
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Orders
              </Link>
            </p>
            <p>
              <Link href="#!" className="text-neutral-600 dark:text-neutral-200">
                Help
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start ">
              
              <Home  className="mx-1" />
              {"  "}
              Online Shops
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
            <MailIcon/>
              waheed.sadique@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
             <PhoneCallIcon/>
              + 92 3237653560
            </p>
           
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 flex items-center justify-center  dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <span
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          
        >
            <h1 className="font-bold px-2 underline hover:scale-105">  Muhammad Waheed  </h1>
          
        </span>
        
      </div>
    </footer>
  );
}
