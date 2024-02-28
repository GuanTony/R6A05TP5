async function routes(fastify, options) {

}

module.exports = routes;
const createBookSchema = {
    body: {
        type: 'object',
        required: ['title', 'author'],
        properties: {
            title: { type: 'string' },
            author: { type: 'string' },
            description: { type: 'string' },
            format: { type: 'string', enum: ['poche', 'manga', 'audio'], default: 'poche' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                title: { type: 'string' },
                author: { type: 'string' },
                description: { type: 'string' },
                format: { type: 'string' }
            }
        }
    }
};
const routes = require('./route');
fastify.register(routes);
