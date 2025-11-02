//Archivo para iteractuar con operaciones//
// importar fuciones//
const {registrarCita, leerCitas , vaciarJson} = require ('./operaciones');

// capturar argumentos de la linea de comandos//
const registrarCitaArgs = process.argv.slice(2);

if (registrarCitaArgs[0] === 'registrar' ) { 
    const [ , nombre, edad, tipo, color, enfermedad] = registrarCitaArgs;
    registrarCita(nombre, edad, tipo, color, enfermedad);

} else if (registrarCitaArgs[0] === 'leer') {
    leerCitas('citas.json');
}
else if (registrarCitaArgs[0] === 'vaciar') {
    vaciarJson('citas.json');
} 
else {
    console.log('Comando no reconocido. Usa "registrar", "leer" o "vaciar" al principio de cada respuesta.');
}


