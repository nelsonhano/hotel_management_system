import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-16">
        <div className="container mx-auto px-4">
            <Link href="/" className="font-black text-tertiary-dark">
                Hotelzz
            </Link>

            <h4 className="font-bold text-4xl">Contact</h4>

            <div className="flex flex-wrap gap-16 font-black items-center justify-between">
                <div className="flex-1">
                    <p>123 Road</p>
                    <div className="flex items-center py-4">
                        <BsFillSendFill />
                        <p className="ml-2">codewithnelson</p>
                    </div>
                    <div className=" flex items-center">
                        <BsTelephoneOutbound />
                        <p className="ml-2">000-000-00</p>
                    </div>
                    <div className="flex items-center pt-4">
                        <BiMessageDetail />
                        <p className="ml-2">codewithnelson</p>
                    </div>

                </div>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">Our Story</p>
                    <p className="pb-4">Get in Touch</p>
                    <p className="pb-4">Our Privacy</p>
                    <p className="pb-4">Term of Service</p>
                    <p>Customer Assistence</p>
                    <p></p>
                </div>
               <div className="flex-1 md:text-right">
                     <p className="pb-4">Dining Experience</p>
                     <p className="pb-4">Wellness</p>
                     <p className="pb-4">Fitness</p>
                     <p className="pb-4">Sport</p>
                     <p>Event</p>
                 </div>
            </div>
        </div>
        <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0  "></div>
    </footer>
  )
}
