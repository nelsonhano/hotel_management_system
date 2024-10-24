'use client'

import { useState } from "react";
import Search from "../Search/Search";

export default function PageSearch() {
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <section>
        <Search 
            roomTypeFilter={roomTypeFilter}
            searchQuery={searchQuery}
            setRoomTypeFilter={setRoomTypeFilter}
            setSearchQuery={setSearchQuery}
            />
    </section>
  )
}
