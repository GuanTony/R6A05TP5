const Book = require('../model/livre');

exports.createBookSchema = {
        body: {
            type: 'object',
            required: ['title', 'author'],
            properties: {
                title: { type: 'string' },
                author: { type: 'string' },
                description: { type: 'string', default: '' },
                format: {
                    type: 'string',
                    enum: ['poche', 'manga', 'audio'],
                    default: 'poche'
                }
            },
            additionalProperties: false
        }
};

exports.createBook = async (request, reply) => {
        }
    try {
        const book = new Book(request.body);
        const savedBook = await book.save();
        reply.code(201).send(savedBook);
    } catch (err) {
        reply.code(500).send(err);
    }
};
