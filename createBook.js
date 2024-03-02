const Book = require('../model/livre');


async function createBook(req, reply) {
    try {
        const validatedBook = req.body;
        const newBook = new Book(validatedBook);
        await newBook.save();
        reply.code(201).send(newBook);
    } catch (error) {
        reply.code(500).send(error);
    }
}

module.exports = { createBook, createBookSchema };
