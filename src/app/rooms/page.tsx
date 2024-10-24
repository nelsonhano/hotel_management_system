'use client'

import { getRoom } from "@/libs/apis";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Room } from "../models/room";
import Search from "@/components/Search/Search";
import LoadingSpinner from "../(web)/loading";
import RoomCard from "@/components/RoomCard/RoomCard";

export default function Page() {
    const [roomTypeFilter, setRoomTypeFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const searchParams = useSearchParams();

    useEffect(() => {
        const getRoomType = searchParams.get('roomType');
        const getSearchQuery = searchParams.get('searchQuery');

        if (getRoomType) setRoomTypeFilter(getRoomType);
        if (getSearchQuery) setSearchQuery(getSearchQuery);
    }, [searchParams]);


    async function fetchHotelRooms() {
        try {
            return await getRoom();
        } catch (error) {
            console.error('Error fetching hotel rooms:', error);
            throw error;
        }
    }

    const { data, isLoading, error } = useSWR('get/hotelRooms', fetchHotelRooms);
    console.log("DATA" + data, "ERROE" + error, "ISLOADING" + isLoading);

    if (error) return <div>Error: Can't fetch Data...</div>;
    if (isLoading) return <LoadingSpinner />;
    if (!data) return <div>No data found.</div>;

    const filterRooms = (rooms: Room[]) => {
        return rooms.filter(room => {
            // Apply room type filter

            if (
                roomTypeFilter &&
                roomTypeFilter.toLocaleLowerCase() !== 'all' &&
                room.type.toLocaleLowerCase() !== roomTypeFilter.toLocaleLowerCase()
            ) {
                return false
            }

            //Apply search query filter

            if (
                searchQuery &&
                !room.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
            ) {
                return false; 
            }
            return true;
        })
    }

    const filteredRooms = filterRooms(data || []);
    
    console.log(filteredRooms);

    if (filteredRooms.length < 1) {
        return <div className="flex text-3xl justify-center">No Search Value Found</div>
    }

    return (
        <div className=" container mx-auto pt-10">
            <Search 
                roomTypeFilter={roomTypeFilter}
                searchQuery={searchQuery} 
                setRoomTypeFilter={setRoomTypeFilter} 
                setSearchQuery={setSearchQuery}
            />
            <div className="flex mt-20 justify-between flex-wrap">
                {
                    filteredRooms.map(room => (
                        <RoomCard key={room._id} room={room}/>
                    ))
                }
            </div>
        </div>
    );
}
