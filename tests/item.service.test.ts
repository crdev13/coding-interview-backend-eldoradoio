import * as ItemService from '../src/item.service';
import { prisma } from '../src/db/client';

// Mock only the parts of Prisma we use
jest.mock('../src/db/client', () => ({
    prisma: {
        item: {
            create: jest.fn(),
            findMany: jest.fn(),
            findUnique: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        },
    },
}));

describe('ItemService (mocked)', () => {
    const mockItem = { id: 1, name: 'Mock Item', price: 99.99 };

    it('should create an item', async () => {
        (prisma.item.create as jest.Mock).mockResolvedValue(mockItem);

        const result = await ItemService.createItem({
            name: 'Mock Item',
            price: 99.99,
        });

        expect(prisma.item.create).toHaveBeenCalledWith({
            data: { name: 'Mock Item', price: 99.99 },
        });

        expect(result).toEqual(mockItem);
    });

    it('should get all items', async () => {
        (prisma.item.findMany as jest.Mock).mockResolvedValue([mockItem]);

        const result = await ItemService.getItems();

        expect(prisma.item.findMany).toHaveBeenCalled();
        expect(result).toEqual([mockItem]);
    });

    it('should get an item by ID', async () => {
        (prisma.item.findUnique as jest.Mock).mockResolvedValue(mockItem);

        const result = await ItemService.getItemById(1);

        expect(prisma.item.findUnique).toHaveBeenCalledWith({
            where: { id: 1 },
        });
        expect(result).toEqual(mockItem);
    });

    it('should update an item', async () => {
        const updatedItem = { ...mockItem, name: 'Updated', price: 150 };
        (prisma.item.update as jest.Mock).mockResolvedValue(updatedItem);

        const result = await ItemService.updateItem(1, {
            name: 'Updated',
            price: 150,
        });

        expect(prisma.item.update).toHaveBeenCalledWith({
            where: { id: 1 },
            data: { name: 'Updated', price: 150 },
        });

        expect(result).toEqual(updatedItem);
    });

    it('should delete an item', async () => {
        (prisma.item.delete as jest.Mock).mockResolvedValue(mockItem);

        const result = await ItemService.deleteItem(1);

        expect(prisma.item.delete).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockItem);
    });
});
