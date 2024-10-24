'use client'

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Room } from "@/app/models/room";

type Props = {
  featuredRoom: Room
}

const FeaturedRoom: FC<Props> = ({ featuredRoom }) => {
  
  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto">
      <div className="md:grid gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image
            src={featuredRoom.coverImage.url}
            alt={featuredRoom.name}
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 h-48">
          { 
            featuredRoom.images.splice(0, 2).map(image => (
              <div key={image._key}>
                <Image 
                  src={image.url}
                  alt={image._key}
                  width={300}
                  height={300}
                  className="img scale-animation rounded-lg"
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="md:py-10 md:w-1/2 text-left">
          <h3 className="font-heading mb-12">Featured Room</h3>

          <p className="font-normal max-w-md">{featuredRoom.description}</p>

          <div className="flex flex-col md:flex-row md:items-center justify-between mt-5">
            <div className="flex mb-3 md:mb-0">
              <div className="flex gap-3 flex-col items-center justify-center mr-4">
                <p className="text-sx lg:text-xl text-center">Start From</p>
                <p className="md:font-bold flex font-medium text-3xl xl:text-5xl">
                  $ {featuredRoom.price}
                </p>
              </div>
              <div className="flex gap-3 flex-col items-center justify-center mr-4">
                <p className="text-sx lg:text-xl text-center">Discount</p>
              <p className="md:font-bold flex font-medium text-3xl xl:text-5xl">
                  $ {featuredRoom.discount}
                </p>
              </div>
               <Link href={`/rooms/${featuredRoom.slug.current}`} className="border h-fit text-center rounded-md border-tertiary-light text-tertiary-dark px-3 py-2 lg:py-5">More Details</Link>
            </div>
          </div>

      </div>
    </section>
  )
}

export default FeaturedRoom;