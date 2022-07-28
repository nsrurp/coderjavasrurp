
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
class producto{
    constructor(id, nombre, precio, stock){
        this.id = id
        this. nombre = nombre
        this. precio = precio
        this. stock = stock
        
        }
}

const producto1 = new Producto(1, "zapatillas", 10000, 20)
const producto2 = new Producto(2, "buzo", 7000, 20)
const producto3 = new Producto(3, "remeras", 4000, 20)
const producto4 = new Producto(4, "medias", 1000, 20)

let productos = [producto1, producto2, producto3, producto4]
const sectionProductos = document. getElementById("card_productos_section").

productos.forEach(product => {
    sectionProductos.innerHTML += `
    <div class="card_productos" id="productos${product.id}"style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">Precio: $${product.precio}</p>
            <p class="card-text">Stock: ${product.stock}</p>
        </div>
    </div>
    `
}
)