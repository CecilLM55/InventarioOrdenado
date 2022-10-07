class Inventario {

    constructor() {
        this.inventario = new Array();
    }

    agregar(producto) {

        this.inventario.push(producto);

    }

    eliminar(codigo) {
        let primero = 0;
        let medio = 0;
        let ultimo = this.inventario.length - 1;

        while(primero <= ultimo) {
            medio = Math.floor((primero + ultimo) / 2);

            if (this.inventario[medio].getCodigo() === codigo) {

                for(let a = medio; a < ultimo; a++) {
                    this.inventario[a] = this.inventario[a + 1];
                }
                this.inventario.pop();

            } else if (this.inventario[medio].getCodigo() > codigo) {
                ultimo = medio - 1;
            } else {
                primero = medio + 1;
            }
        }
        
        return null;
 /*       
        for(let i = 0; i < this.inventario.length; i++) {
            if(codigo === this.inventario[i].getCodigo()) {

                for(let a = i; a < this.inventario.length; a++) {
                    this.inventario[a] = this.inventario[a + 1];
                }
                this.inventario.pop();
            }
        }
*/
/*
for(let a = i; a < this.inventario.length; a++) {
                    this.inventario[a] = this.inventario[a + 1];
                }
*/
    }

    buscar(codigo) {
        let primero = 0;
        let medio = 0;
        let ultimo = this.inventario.length - 1;

        while(primero <= ultimo) {
            medio = Math.floor((primero + ultimo) / 2);

            if (this.inventario[medio].getCodigo() === codigo) {
                return this.inventario[medio];
            } else if (this.inventario[medio].getCodigo() > codigo) {
                ultimo = medio - 1;
            } else {
                primero = medio + 1;
            }
        }
        
        return null;
    }
    

    listado() {

        let lista = '';
        this.inventario.forEach((producto) => {
            lista += producto.info();
        });
        return lista;

    }

    
    listadoInverso() {

        let lista = '';

        for(let i = this.inventario.length -1; i >= 0; i--) {
            lista += this.inventario[i].info();
        }

        return lista;
    }
}



/*    modificar(codigo) {
        
    } */

    /*
Crear una interfaz en HTML para manipular un INVENTARIO de productos, 
para almacenar la información debemos usar un vector (no usar BDs ni local storage).
La información de cada producto debe permitir guardar el código, el 
nombre,  cantidad y el costo.

LOS ELEMENTOS DEBERÁN AGREGARSE Y QUEDAR ALMACENADOS ORDENADOS DE 
MANERA ASCENDENTE POR EL CÓDIGO QUE SERÁ NUMÉRICO.
En la interfaz (una sola pantalla) tener los inputs para cada dato, 
los botones para las tareas a realizar que se describen a continuación 
y un div para ir describiendo las actividades que se van realizando 
y sus resultados.
Botones :
Agregar nuevo producto
Eliminar un producto por código, deberá devolver el producto (si 
    existe) o null
Buscar un producto por código
Recuperar todos los productos //listar
Recuperar todos los productos en orden inverso a como se ingresaron//listar inverso

No se implementa el INSERTAR ni el MODIFICAR

No usar swal.fire para las interfaces
Evitar el uso de alert y confirm
    */