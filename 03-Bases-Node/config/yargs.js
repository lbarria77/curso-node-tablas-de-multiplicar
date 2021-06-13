const argv = require('yargs')
     .options('b', {
         alias: 'base',
         type: 'number',
         demandOption: true,
         describe: 'Es la base de la tabla de Multiplicar'
     })
     .options('l', {
         alias: 'listar',
         type: 'boolean',         
         default: false,
         describe: 'Muestra la Tabla en Consola'
     })  
     .options('h', {
        alias: 'hasta',
        type: 'number',         
        default: 10,
        describe: 'Muestra la Longitud de la Tabla'
    })              
     .check((argv, options) => {
         if (isNaN(argv.b)) {
             throw 'La base tiene que ser un numero'
         }
         return true;
     })
     .argv;

module.exports = argv;        