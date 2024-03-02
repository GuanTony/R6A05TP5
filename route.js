async function routes(fastify, options) {
    const controllers = require('./controllers');

    fastify.post('/books', { schema: controllers.createBookSchema }, controllers.createBook);
    fastify.get('/books/:id', { schema: controllers.getBookSchema }, controllers.getBook);
    fastify.get('/books', { schema: controllers.getBooksSchema }, controllers.getBooks);
    fastify.put('/books/:id', { schema: controllers.updateBookSchema }, controllers.updateBook);
    fastify.delete('/books/:id', { schema: controllers.deleteBookSchema }, controllers.deleteBook);
}

module.exports = routes;
