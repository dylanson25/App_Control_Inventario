var code = document.getElementById("iptCod")
var nom = document.getElementById("iptNom")
var desc = document.getElementById("iptDes")
var cant = document.getElementById("iptCant")
var cost = document.getElementById("iptCost")
class Producto {
    constructor(codigo, nombre, desc, cantidad, costo) {
        this._codigo = codigo
        this._nombre = nombre
        this._desc = desc
        this._cantidad = cantidad
        this._costo = costo
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
    mostrar() {
        console.log(this._productos[0])
    }
}
btnAgregar.addEventListener('click', () => {
    let nuevo = new Producto(code, nom, desc, cant, cost)
})