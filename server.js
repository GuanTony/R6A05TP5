import Fastify from "fastify"
// import fastifyBasicAuth from "@fastify/basic-auth"
import fs from 'node:fs'
import MongoDBbooks from '../config/index.js';

const port = 3000;
// const authenticate = {realm: 'Westeros'}

const fastify = Fastify({
    logger: true,
    https: {
        key: fs.readFileSync("config/server.key"),
        cert: fs.readFileSync("config/server.crt")
    }

})

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})


const start = async()=>{
    try{
        fastify.listen({port:3000,listenTextResolver: (address) => { return `Server is listening at ${address}` } });
        MongoDBbooks.initialize();
        MongoDBbooks.createSchema();
    }
    catch(error){
        fastify.log.error(err)
        process.exit(1)
    }
}
start();

