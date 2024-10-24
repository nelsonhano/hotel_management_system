'use client'
export default function Error({error, reset}:{ error:Error & {digest?: string}; reset: () => void }) {
  return (
    <div className="container mx-auto">
        <div className="mb-10 text-red-800 font-heading">
            Something went wrong
        </div>

          <button onClick={() => reset()} className=" px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 rounded-lg md:rounded-2xl shadow-sm text-white font-bold text-base md:text-xl bg-[#038C7F] hover:scale-110 duration-300 transition-all">Try Again</button>
    </div>
  )
}
