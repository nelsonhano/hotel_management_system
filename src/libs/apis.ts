import { Room } from "@/app/models/room";
import sanityClient from "./sanity";
import * as queries from './sanityQueries';


export async function getFeaturedRoom() {
    const result = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery, 
        {}, 
        {cache: 'no-cache'}
    );
    return result;
};

export async function getRoom() {
    try {
        const result = await sanityClient.fetch<Room[]>(queries.getRoomQuery);
        if (!result) {
            throw new Error("No data found");
        }
        return result;
    } catch (error) {
        console.error('Error fetching room data:', error);
        throw error;
    }
}