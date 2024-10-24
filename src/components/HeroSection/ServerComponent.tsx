import Image from "next/image";

export const header1 = <>
    <h1 className="font-heading mb-6">Explore Our Equisite</h1>
    <p className="text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg">
        Experience an Exquisite Hotel Immersed in Rich History and Timeless
        Elegance.
    </p>
    <button className="btn-primary bg-[#038C7F] shadow-[#038C7F]">Get Started</button>
</>

export const section1 = <div className="hidden md:grid grid-cols-1 gap-8">
    <div className="rounded-2xl overflow-hidden h-48">
        <Image
            src='/images/hero-1.jpeg'
            alt='hero-1.jpeg'
            width={300}
            height={300}
            className="img scale-animation"
        />
    </div>
    <div className="grid grid-cols-2 gap-8 h-48">
        <div className="rounded-2xl overflow-hidden">
            <Image
                src='/images/hero-2.jpeg'
                alt='hero-2.jpeg'
                width={300}
                height={300}
                className="img scale-animation"
            />
        </div>
        <div className="rounded-2xl overflow-hidden">
            <Image
                src='/images/hero-3.jpeg'
                alt='hero-3.jpeg'
                width={300}
                height={300}
                className="img scale-animation"
            />
        </div>
    </div>
</div>