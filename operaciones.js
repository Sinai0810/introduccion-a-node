const fs = require('fs');
const nombreArchivo = 'citas.json';

// Función para registrar cita
const registrarCita = (nombre, edad, tipo, color, enfermedad) => {
    // Leer archivo existente
    let data = [];
    try {
        const contenido = fs.readFileSync(nombreArchivo, 'utf8');
        if (contenido) {
            data = JSON.parse(contenido); // convertir JSON string a arreglo de objetos
        }
    } catch (error) {
        // Si el archivo no existe o está vacío, data queda como []
    }

    // Crear nueva cita como objeto
    const cita = { nombre, edad, tipo, color, enfermedad };
    data = [...data, cita]; // agregar la nueva cita al arreglo 

    // Guardar todo el arreglo en JSON
    try {
        fs.writeFileSync(nombreArchivo, JSON.stringify(data, null, 2));
        console.log('Cita registrada exitosamente');
    } catch (error) {
        console.error('Error al registrar la cita:', error);
    }
};

// Función para leer citas
const leerCitas = () => {
    try {
        const datos = fs.readFileSync(nombreArchivo, 'utf8');
        const citas = JSON.parse(datos);
        console.log('Citas Registradas:');
        console.log(citas);
    } catch (error) {
        console.error('Error al leer las citas:', error);
    }
};

//funcion para vaciar json
const vaciarJson = () => { 
    fs.writeFileSync(nombreArchivo,'[]');
    console.log('Archivo vaciado exitosamente');
};




// Exportar funciones
module.exports = { registrarCita, leerCitas , vaciarJson };
