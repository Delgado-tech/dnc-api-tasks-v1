const mongooseToSwagger = require("mongoose-to-swagger");
const swaggerAutogen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR',
});

const outputFile = './swagger_output.json';
const endpointsFiles = ['../index.js', '../src/routes.js'];

let doc = {
    info: {
        version: "1.0.0",
        title: "API do BoardTasks",
        description: "Doc",
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Localhost"
        },
        {
            url: "http://boardtasks-back.vercel.app/",
            description: "produção" 
        }
    ],
    consumes: ['aplication/json'],
    produces: ['aplication/json'],
    // components: {
    //     schemas: {
    //         Usuario: mongooseToSwagger(EsquemaUsuario),
    //         Tarefa: mongooseToSwagger(EsquemaTarefa),
    //     }
    // }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("doc em " + outputFile);
    // if(process.env.NODE_ENV !== 'production') {
    //     require("../index.js");
    // }
});
