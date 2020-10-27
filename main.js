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
    mostrarInfo(){
        return this._codigo + '._ '+ this._nombre + ' (' + this._desc +') '+ this._cantidad + ' unidades ' + this._costo + ' pesos' 
    }
}
class Almacen{
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
        return this._productos[0].mostrarInfo()
    }
}
btnAgregar.addEventListener('click', () => {
    let newProduct = new Producto(code.value , nom.value, desc.value, cant.value, cost.value)
    let agregar = new Almacen()
    if(agregar.addProduct(newProduct) ===true){
        alert('Producto guardado' + agregar.mostrar() )
    }else{
        alert('Producto no guardado no hay espacio')
    }
    
})