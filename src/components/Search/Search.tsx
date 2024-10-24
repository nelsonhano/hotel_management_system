'use client'

import { useRouter } from "next/navigation"
import { ChangeEvent, FC } from "react"

type Prop = {
    roomTypeFilter: string,
    searchQuery: string,
    setRoomTypeFilter: (params: string) => void,
    setSearchQuery: (params: string) => void
}


const Search: FC<Prop> = ({ roomTypeFilter, searchQuery, setRoomTypeFilter, setSearchQuery}) => {
    const router = useRouter();
    
    const handleRoomTypeChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setRoomTypeFilter(e.target.value);
    }
    const handleSearchQueryChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value)
    }
    const handleFilterClick = () => {
        router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`)
    }
  return (
    <section className="bg-tertiary-light px-4 py-6 rounded-lg">
        <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
            <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-2 text-black">
                    Room Type
                </label>
                <div className="relative">
                    <select 
                    value={roomTypeFilter}
                    onChange={handleRoomTypeChange}
                    className="w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none">
                          <option value="All">All</option>
                          <option value="Basic">Basic</option>
                          <option value="Luxury">Luxury</option>
                          <option value="Suite">Suite</option>
                    </select>
                </div>
            </div>
            <div className="w-full md:1/3 lg:w-auto mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-2 text-black">Search</label>
                  <input 
                    type="search" 
                    id="search" 
                    placeholder="Search..."
                    className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none dark:placeholder:bg-white"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    />
            </div>
            <button 
                type="button" 
                className="btn-primary bg-[#038C7F] shadow-[#038C7F]"
                onClick={handleFilterClick}
                >
                Search
                </button>
        </div>
    </section>
  )
}

export default Search