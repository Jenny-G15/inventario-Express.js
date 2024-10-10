Descripción del Mini Proyecto: API CRUD para Productos de Inventario

Nombre del Proyecto: Inventario API
Resumen:
El proyecto Inventario API es una aplicación web que permite gestionar un inventario de productos
mediante una API RESTful. Utilizando Node.js y Express.js, esta API proporciona operaciones
CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos, permitiendo a los usuarios agregar
nuevos productos, listar productos existentes, actualizar información de productos y eliminar
productos del inventario. Los datos se almacenan en archivos JSON, lo que simplifica la gestión de
datos y permite una fácil manipulación sin necesidad de una base de datos.
Objetivos del Proyecto:
1. Crear una API RESTful: Desarrollar una API que cumpla con los principios REST,
permitiendo la interacción con los datos de productos de manera estructurada y accesible.
2. Manejo de Productos: Implementar funcionalidades para gestionar productos en un
inventario, incluyendo información como nombre, descripción, precio y cantidad
disponible.
3. Almacenamiento en JSON: Utilizar archivos JSON para almacenar la información de los
productos, facilitando la persistencia de datos sin complicaciones de configuración de
bases de datos.
Características Principales:
• Operaciones CRUD:
o Crear (POST): Permitir a los usuarios añadir nuevos productos al inventario,
proporcionando información como nombre, descripción, precio y cantidad.
o Leer (GET): Proporcionar endpoints para listar todos los productos o buscar un
producto específico por su ID.
o Actualizar (PUT): Permitir a los usuarios modificar la información de un producto
existente mediante su ID.
o Eliminar (DELETE): Ofrecer la posibilidad de eliminar un producto del inventario
usando su ID.

• Validación de Datos: Implementar validaciones básicas para asegurar que los datos
ingresados son correctos (por ejemplo, que el precio sea un número y que el nombre no
esté vacío).
• Documentación de API: Incluir una documentación sencilla que explique cómo utilizar la
API, incluyendo ejemplos de solicitudes y respuestas.
Tecnologías Utilizadas:

• Node.js: Entorno de ejecución de JavaScript del lado del servidor.
• Express.js: Framework minimalista para Node.js que simplifica el desarrollo de
aplicaciones web y APIs.
• Archivos JSON: Formato ligero y fácil de usar para el almacenamiento de datos.
Estructura del Proyecto:

Flujo de Trabajo:
1. Inicialización del Proyecto: Comenzar creando el proyecto y configurando las
dependencias necesarias.
2. Configuración de la API: Implementar el servidor Express y definir las rutas para las
operaciones CRUD sobre los productos.
3. Manejo de Datos en JSON: Implementar la lógica para leer y escribir en el archivo
products.json para almacenar la información de los productos.
4. Pruebas y Validación: Probar la API utilizando herramientas como Postman o cURL,
asegurando que todas las funcionalidades estén operativas.
5. Documentación: Crear documentación que explique cómo usar la API, incluyendo
ejemplos claros.
Conclusión:
El proyecto Inventario API no solo permite a los desarrolladores principiantes aprender sobre el
uso de Node.js y Express.js, sino que también proporciona una comprensión sólida sobre cómo
construir APIs RESTful y manejar datos en formato JSON. Este mini proyecto es ideal para practicar
habilidades en desarrollo web, gestión de datos y diseño de API, y puede ser extendido en el futuro
para incluir características adicionales como autenticación, manejo de usuarios y
almacenamiento en bases de datos.

Nombre del Proyecto: Inventario de productos:

Index.js:

1)Primero se hacen las importaciones: 
-Traemos express, path, cors y fs, además de las rutas de productos.

2) Creación de la app: 
- Con const app = express();

3) Después hacermos las Configuraciones: app.use(express.json()); permite recibir datos en JSON.

4) Definimos el puerto en const port = 3000.


5) Servidor: en el http://localhost:3000



InventarioController:

1) Importaciones: Cargamos path para manejar rutas de archivos y fs para leer y escribir en el sistema de archivos.

2)Ruta de datos: Definimos la ruta del archivo products.json donde guardamos la información de los productos.

3) Funciones principales:

- getAllProducts: Obtiene todos los productos y los devuelve en formato JSON.

- leerProducts: Lee el archivo JSON y devuelve los productos.

- escribirProductos: Escribe los productos de nuevo en el archivo products.json.

- addProduct: Agrega un nuevo producto en el archivo products,json, validando que no falte información antes de guardarlo.

- deleteProducts: Elimina un producto por su ID, validando errores si no se encuentra.

- updateProducts: Actualiza un producto existente, también validando si el ID es correcto.



inventarioRut:

1) Importaciones: Traemos express para manejar rutas y el inventarioController.

2) Definición de rutas:

- GET /: Obtiene todos los productos.
- POST /: Agrega un nuevo producto.
- DELETE /:id: Elimina un producto específico por su ID.
- PUT /:id: Actualiza un producto existente por su ID.

3)Exportación: Al final, exportamos el router para que se use en la aplicación principal.