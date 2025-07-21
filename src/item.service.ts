import { prisma } from './db/client';
import { Item, CreateItemInput, UpdateItemInput } from './types/item';

export const createItem = (data: CreateItemInput): Promise<Item> => {
    return prisma.item.create({ data });
};

export const getItems = (): Promise<Item[]> => {
    return prisma.item.findMany();
};

export const getItemById = (id: number): Promise<Item | null> => {
    return prisma.item.findUnique({ where: { id } });
};

export const updateItem = (
    id: number,
    data: UpdateItemInput
): Promise<Item> => {
    return prisma.item.update({ where: { id }, data });
};

export const deleteItem = (id: number): Promise<Item> => {
    return prisma.item.delete({ where: { id } });
};
