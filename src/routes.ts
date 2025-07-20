import { Server } from '@hapi/hapi';
import * as Handlers from './item.handlers';

export const defineRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/ping',
        handler: async (request, h) => {
            return {
                ok: true,
            };
        },
    });

    server.route({
        method: 'GET',
        path: '/items',
        handler: Handlers.getItems,
    });
};
