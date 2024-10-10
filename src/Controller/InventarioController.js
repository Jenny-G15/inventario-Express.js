const fs = require('fs').promises;
const path = require('path');

const archivoProductos = path.join(__dirname, '../data/products.json');

// Leer productos del archivo JSON
async function leerProductos() {
    try {
        const data = await fs.readFile(archivoProductos, 'utf-8');
        return JSON.parse(data);
        
    } catch (error) {
        console.error('Error al leer este archivo:', error);
        return [];
        
    }
}


 async function escribirProductos(products) {
     try { 
         const data = JSON.stringify(products);
         await fs.writeFile(archivoProductos, data, 'utf-8');
        
     } catch (error) {
         console.error('Error al escribir este archivo', error);
        
     }
    
};

const getAllproducts = async (req,res) => {
    
    products = await leerProductos()
    try {
        res.json(products);
   } catch (error) {
        res.status(500).json({message: `error al obtener el dato`, error});
        
    }
};

     const addProduct = async(req, res) => {

        const {nombre, precio, descripcion, cantidad} = req.body;

        if (!nombre || !precio || !descripcion || !cantidad) {
            return res.status(400).json({ error: 'Campos obligatorios.' });
        }

        try {
            const products = await leerProductos()

            console.log(req.body)

            const newProduct = {
                id: products.length + 1, 
                nombre, 
                precio, 
                descripcion, 
                cantidad
            };
   
            products.push(newProduct);
            await escribirProductos(products)

            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({message: 'Error del servidor'});
        }
       
         
    }
    const updateProducts = async (req,res) => {
 
        try {
            const products = await leerProductos()

            const {id} = req.params;    
            const { nombre, descripcion, precio, cantidad } = req.body;
            const producIndex = products.findIndex(products => products.id == parseInt(id));
            
    
            if (producIndex === -1) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
    
    
            if(nombre) {
                products[producIndex].nombre = nombre;
    
            }
            if(descripcion) {
                products[producIndex].descripcion = descripcion;
            }
            if(precio) {
                products[producIndex].precio = precio;
            }
            if(cantidad) {
                products[producIndex].cantidad = cantidad;
            }
    
            await escribirProductos(products);
            console.log(req.body); 
            res.status(200).json({ message: 'Producto Editado con exito. ', products:[producIndex] });
    
        } catch (error) {
            console.error("error al eliminar", error);
            res.status(500).json({message: "Error interno del servidor. "});
        }
    
    };

    const deleteProducts = async (req,res) => {
        try {
            const products = await leerProductos()

            const {id} = req.params;
            const producIndex = products.findIndex(products => products.id == parseInt(id));
            products.splice(producIndex,1);
            console.log(req.body); 
            res.status(200).json({ message: 'Producto Eliminado con exito. '});
    
        } catch (error) {
    
            console.error("error al eliminar", error);
    
            res.status(500).json({message: "Error interno del servidor. "});
       
        }
    
    };
    
    module.exports = {
        getAllproducts, addProduct , escribirProductos, leerProductos, updateProducts, deleteProducts
    };