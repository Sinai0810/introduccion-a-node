# Registro de Citas Veterinarias

Aplicación de línea de comandos desarrollada en **Node.js** para gestionar citas de atención veterinaria. Permite registrar, consultar y vaciar citas guardadas en un archivo JSON.

## **Funciones principales**

* **Registrar cita:**
  Agrega una nueva cita con nombre, edad, tipo, color y enfermedad del animal.

  ```bash
  node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>
  ```

* **Leer citas:**
  Muestra todas las citas registradas en la terminal.

  ```bash
  node index.js leer
  ```

* **Vaciar citas:**
  Reinicia el archivo JSON a un arreglo vacío.

  ```bash
  node index.js vaciar
  ```

## **Tecnologías usadas**

* Node.js
* Módulo File System (`fs`)
* JSON (`JSON.parse` y `JSON.stringify`)
* Manejo de argumentos desde la terminal (`process.argv`)

## **Estructura del proyecto**

```
├── index.js          # Archivo principal para interactuar con la aplicación
├── operaciones.js    # Funciones para registrar, leer y vaciar citas
├── citas.json        # Archivo JSON que almacena las citas
```


English ✨

# Veterinary Appointment Manager

Command-line application built with **Node.js** to manage veterinary appointments. Allows you to register, view, and clear appointments stored in a JSON file.

## **Main Features**

* **Register Appointment:**
  Adds a new appointment with the animal's name, age, type, color, and illness.

  ```bash
  node index.js registrar <name> <age> <type> <color> <illness>
  ```

* **View Appointments:**
  Displays all registered appointments in the terminal.

  ```bash
  node index.js leer
  ```

* **Clear Appointments:**
  Resets the JSON file to an empty array.

  ```bash
  node index.js vaciar
  ```

## **Technologies Used**

* Node.js
* File System module (`fs`)
* JSON (`JSON.parse` and `JSON.stringify`)
* Command-line arguments (`process.argv`)

## **Project Structure**

```
├── index.js          # Main file to interact with the application
├── operaciones.js    # Functions to register, read, and clear appointments
├── citas.json        # JSON file that stores the appointments
```
