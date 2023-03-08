export interface CollectionTypes {
    _id: String
    name: String,
    fotoURL: String,
    fotoName: String,
    fotoALT: String,
    __v: number
}

export interface CollectionItemsProps {
    _id: String,
    fotoURL: String,
    fotoALT: String,
    name: String,
}

export interface TestimoniTypes {
    _id: String
    title: String,
    deskripsi: String,
    star: number,
    personName: String,
    fotoURL: string,
    fotoALT: string,
    __v: number
}

export interface TestimonialItemProps {
    star: number,
    title: String,
    deskripsi: String,
    fotoURL: string,
    fotoALT: string,
    personName: String
}

export interface SaleTypes {
    _id: string
    name: String,
    foto: FotoCatalogueTypes[],
    arrival: boolean,
    __v: number
}

export interface FotoCatalogueTypes {
    fotoURL: string | '',
    fotoALT: string,
    fotoName: string,
}

export interface SaleItemProps {
    id: string,
    name: String,
    foto: FotoCatalogueTypes[]
}

export interface EtalaseTypes {
    _id: string
    name: String,
    foto: FotoCatalogueTypes[],
    arrival: boolean,
    price: string,
    deskripsi: String,
    warnas: WarnaTypes[],
    __v: number
}

export interface WarnaTypes {
    _id: string,
    name: string,
    kode: string
}

export interface EtalaseItemProps {
    id: string,
    name: String,
    foto: FotoCatalogueTypes[],
    price: string,
    arrival: boolean
    onClick: () => void
}

export interface CartItemsProps {
    [x: string]: any
    cart: {
        item: EtalaseTypes,
        quantity: number,
        warna: String
    },
    onClick: () => any;
}

export interface CartPageProps {
    cart?: {
        item: EtalaseTypes,
        quantity: number,
        warna: String,
    },
    pos: number
}

export interface CountryTypes {
    at(x: number): unknown
    name: string,
    states: [{
        name: string
    }]
}[]