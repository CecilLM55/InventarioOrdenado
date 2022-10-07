class Inventario {

    constructor() {
        this.inventario = new Array();
    }

    agregar(producto, codigo) {

       /* this.inventario.push(producto);
       */

       if((this.inventario === 0)) {
        this.inventario.push(producto);
       } else {

        for(let i = 0; i < this.inventario.length; i++) {

            if(this.inventario[i].getCodigo() > codigo) {
                
                for(let b = this.inventario.length; b > i; b--) {
                    this.inventario[b + i] = this.inventario[b];
                }
                this.inventario[i] = producto;
            }
        }
       }

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