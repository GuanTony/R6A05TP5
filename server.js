const fastify = require('fastify')({ logger: true });
const routes = require('./routes');

// Configuration MongoDB ici

fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
