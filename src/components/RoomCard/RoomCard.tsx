import { Room } from "@/app/models/room"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type Prop = {
    room: Room
}

const RoomCard: FC<Prop> = prop => {
    const { room: { isBooked, coverImage, name, price, type, description, slug } } = prop
  return (
    <div className="rounded-xl w-72 mb-auto md:mb-0 overflow-hidden text-black">
         <div className="h-60 overflow-hidden">
            <Image 
                src={coverImage.url} 
                alt={name} 
                width='250' 
                height='250'
                  className="img scale-animation"
            />   
        </div>      

        <div className="p-4 bg-white">
            <div className="flex justify-between text-2xl font-semibold">
                  <p>{name}</p>
                  <p>$ {price}</p>
            </div>
            <p className="pt-2 text-xs">{type} Room</p>
            <p className="pt-3 pb-6">{description.slice(1, 100)}...</p>

            <Link 
                href={`/rooms/${slug.current}`}
                  className="
                    bg-[#038C7F] 
                    inline-block 
                    text-center 
                    w-full py-4 
                    rounded-xl 
                    text-white 
                    text-xl font-bold 
                    hover:-translate-y-2 
                    hover:shadow-lg 
                    transition-all 
                    duration-500"    
            >
                {isBooked ? 'BOOKED' : 'BOOK NOW'}
            </Link>
        </div>
    </div>
  )
}

export default RoomCard
