import * as ItemService from './item.service';

export const getItems = async () => {
    return await ItemService.getItems();
};
