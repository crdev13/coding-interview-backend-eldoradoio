export interface Item {
    id: number;
    name: string;
    price: number;
}

export interface CreateItemInput {
    name: string;
    price: number;
}

export interface UpdateItemInput {
    name: string;
    price: number;
}
