var code = document.getElementById("iptCod")
var nom = document.getElementById("iptNom")
var desc = document.getElementById("iptDes")
var cant = document.getElementById("iptCant")
var cost = document.getElementById("iptCost")
var codeB = document.getElementById("iptCodeB")
var busCod = document.getElementById("iptBuscar")

class Producto {
    constructor(codigo, nombre, desc, cantidad, costo) {
        this._codigo = codigo
        this._nombre = nombre
        this._desc = desc
        this._cantidad = cantidad
        this._costo = costo
    }
    setCodigo() {
        return this._codigo
    }
    mostrarInfo() {
        return this._codigo + '._ ' + this._nombre + ' (' + this._desc + ') ' + this._cantidad + ' unidades ' + this._costo + ' pesos'
    }
}
class Almacen {
    constructor() {
        this._productos = new Array()

    }
    addProduct(Producto) {
        let pos = this._productos.length
        if (pos < 20) {
            this._productos[pos] = Producto
            return true
        }
    }
    delateProduct(codigo) {
        let i = 0
        while (this._productos[i].setCodigo() != codigo && i < this._productos.length) {
            i++
        }
        if (i > this._productos.length) {
            return false
        } else {
            this._productos[i] = null
            do{
                this._productos[i] = this._productos[i + 1]
                i++
            }while(i < this._productos.length)
            this._productos.pop()
            return true
        }

    }
    buscar(codigo){
        let i = 0
        while (this._productos[i].setCodigo() != codigo && i < this._productos.length) {
            i++
        }
        if (i < this._productos.length) {
            return this._productos[i].mostrarInfo()
        }else{
            return false
        }
        
    }
    mostrar() {
        for (let i = 0; i < this._productos.length; i++) {
            console.log(this._productos[i].mostrarInfo())
        }
    }
}

var Bodega1 = new Almacen()
btnAgregar.addEventListener('click', () => {
    let newProduct = new Producto(code.value, nom.value, desc.value, cant.value, cost.value)
    if (Bodega1.addProduct(newProduct) === true) {
        alert('Producto guardado')
        Bodega1.mostrar()
    } else {
        alert('Producto no guardado no hay espacio')
    }
})

btnBorrar.addEventListener('click', () => {
    if (Bodega1.delateProduct(codeB.value) === true) {
        alert('Producto eliminado')
        Bodega1.mostrar()
    } else {
        alert('Producto no encontrado')
    }
})
btnBuscar.addEventListener('click', () => {
    if (Bodega1.buscar(codeB.value) === false) {
        alert('Producto no encontrado')
    } else {
        console.log(Bodega1.buscar(codeB.value))
    }
})
