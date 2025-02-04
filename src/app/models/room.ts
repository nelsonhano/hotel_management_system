type CoverImage = {
    url: string
};

type Image = {
    _key: string,
    url: string
};

type Amenity = {
    _key: string,
    amenity: string,
    icon: string
};

type Slug = {
    _key: string,
    amenity: string,
    icon: string
    current: string;
};




export type Room = {
    _id: string,
    coverImage: CoverImage,
    description: string,
    dimension: string,
    discount: number,
    images:  Image[],
    isBooked: boolean,
    isFeatured: boolean,
    name: string,
    numberOfBeds: number,
    offeredAmenities: Amenity[],
    price: number,
    slug: Slug,
    specialNote: string,
    type: string
}