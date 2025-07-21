import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import * as ItemService from './item.service';
import { CreateItemInput, UpdateItemInput } from './types/item';

export const getItems = async (
    _request: Request,
    h: ResponseToolkit
): Promise<ResponseObject> => {
    const items = await ItemService.getItems();
    return h.response(items).code(200);
};

export const getItemById = async (
    request: Request,
    h: ResponseToolkit
): Promise<ResponseObject> => {
    const id = parseInt(request.params.id);
    const item = await ItemService.getItemById(id);

    if (!item) {
        return h.response({ error: 'Item not found' }).code(404);
    }

    return h.response(item).code(200);
};

export const createItem = async (
    request: Request,
    h: ResponseToolkit
): Promise<ResponseObject> => {
    const payload = request.payload as CreateItemInput;
    const item = await ItemService.createItem(payload);
    return h.response(item).code(201);
};

export const updateItem = async (
    request: Request,
    h: ResponseToolkit
): Promise<ResponseObject> => {
    const id = parseInt(request.params.id);
    const payload = request.payload as UpdateItemInput;

    try {
        const updatedItem = await ItemService.updateItem(id, payload);
        return h.response(updatedItem).code(200);
    } catch {
        return h.response({ error: 'Item not found' }).code(404);
    }
};

export const deleteItem = async (
    request: Request,
    h: ResponseToolkit
): Promise<ResponseObject> => {
    const id = parseInt(request.params.id);

    try {
        await ItemService.deleteItem(id);
        return h.response().code(204);
    } catch {
        return h.response({ error: 'Item not found' }).code(404);
    }
};
