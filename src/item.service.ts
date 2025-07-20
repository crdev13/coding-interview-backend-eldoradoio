import { prisma } from './db/client';

export const createItem = (data: { name: string; price: number }) => {
    return prisma.item.create({ data });
};

export const getItems = () => {
    return prisma.item.findMany();
};

export const getItemById = (id: number) => {
    return prisma.item.findUnique({ where: { id } });
};

export const updateItem = (
    id: number,
    data: { name: string; price: number }
) => {
    return prisma.item.update({ where: { id }, data });
};

export const deleteItem = (id: number) => {
    return prisma.item.delete({ where: { id } });
};
