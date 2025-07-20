import { Request, ResponseToolkit } from '@hapi/hapi';
import * as ItemService from './item.service';

export const getItems = async () => {
    return await ItemService.getItems();
};

export const getItemById = async (request: Request, h: ResponseToolkit) => {
    const id = parseInt(request.params.id);
    const item = await ItemService.getItemById(id);
    return item ?? h.response({ error: 'Item not found' }).code(404);
};

export const createItem = async (request: Request, h: ResponseToolkit) => {
    const { name, price } = request.payload as any;
    const item = await ItemService.createItem({ name, price });
    return h.response(item).code(201);
};

export const updateItem = async (request: Request, h: ResponseToolkit) => {
    const id = parseInt(request.params.id);
    const { name, price } = request.payload as any;
    try {
        return await ItemService.updateItem(id, { name, price });
    } catch {
        return h.response({ error: 'Item not found' }).code(404);
    }
};

export const deleteItem = async (request: Request, h: ResponseToolkit) => {
    const id = parseInt(request.params.id);
    try {
        await ItemService.deleteItem(id);
        return h.response().code(204);
    } catch {
        return h.response({ error: 'Item not found' }).code(404);
    }
};
