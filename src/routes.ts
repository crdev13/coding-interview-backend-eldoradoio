import { Server } from '@hapi/hapi';
import * as Handlers from './item.handlers';
import Joi from 'joi';
import { validationErrorFormatter } from './utils/validation-error-formatter';

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

    server.route({
        method: 'POST',
        path: '/items',
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().min(1).required(),
                    price: Joi.number().positive().required(),
                }),
                failAction: (request, h, err) => {
                    return h
                        .response(validationErrorFormatter(err))
                        .code(400)
                        .takeover();
                },
            },
        },
        handler: Handlers.createItem,
    });

    server.route({
        method: 'PUT',
        path: '/items/{id}',
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.number().integer().positive().required(),
                }),
                payload: Joi.object({
                    name: Joi.string().min(1).required(),
                    price: Joi.number().positive().required(),
                }),
                failAction: (request, h, err) => {
                    return h
                        .response(validationErrorFormatter(err))
                        .code(400)
                        .takeover();
                },
            },
        },
        handler: Handlers.updateItem,
    });

    server.route({
        method: 'DELETE',
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
        handler: Handlers.deleteItem,
    });
};
