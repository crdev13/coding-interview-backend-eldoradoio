import { Server } from '@hapi/hapi';
import * as Handlers from './item.handlers';
import Joi from 'joi';

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

    server.route({
        method: 'GET',
        path: '/items/{id}',
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.number().integer().positive().required(),
                }),
                failAction: (request, h, err: any) => {
                    return h
                        .response({ error: err.message })
                        .code(400)
                        .takeover();
                },
            },
        },
        handler: Handlers.getItemById,
    });
};
