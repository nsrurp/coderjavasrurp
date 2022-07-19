
let nombreDelCurso = "agregarAlCarrito";

agregarAlCarrito('popular item', 2);
agregarAlCarrito('fancy product', 20);
agregarAlCarrito('Special Item', 23);
agregarAlCarrito('Popular Item',120);
agregarAlCarrito('Sale Item',20);
agregarAlCarrito ('Popular Item', 3);
agregarAlCarrito ('Sale Item', 3);
agregarAlCarrito ('Special Item', 1);

function agregarAlCarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if(tenemosStock === 'Tenemos stock'){
        console.log('Agregas el producto al carrito: ' + producto);
    }else{
        console.log('No hay mas disponibilidad');
    }
}

function validarStock(stockDelProducto) {
    if(stockDelProducto > 0){
        return 'Tenemos stock';
    }else{
        return 'No tenemos stock';
    }
}

'fancy product',20
let Opciones = "talles"

talles('39', 7);
talles('40', 5);
talles('41', 8);
talles('42', 0);
function talles (cantidadTalle) {
    if(talles > 0){
        return 'Hay talle';
    }else{ 
        return 'No hay talle'
    }
}
