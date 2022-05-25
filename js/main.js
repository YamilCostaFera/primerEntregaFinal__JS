class Torta {
    constructor(nombre, descripcion, porciones, peso, precio) {
        this.nombre = nombre.toUpperCase();
        this.descripcion = descripcion;
        this.porciones = parseInt(porciones);
        this.peso = parseFloat(peso);
        this.precio = parseInt(precio);
    }
}

const tortas = [
    new Torta('Oreo Cake', 'Base de galletitas oreo, dulce de leche y crema', '10', '1,800', '1500'),
    new Torta('Choco Oreo', 'Base de galletita oreo, crema chocotorta, rellena de oreos', '16', '2,900', '1650'),
    new Torta('Chocotorta', 'Galletitas chocolinas y crema chocotorta', '10', '1,800', '2100'),
    new Torta('Cheese Cake', 'Base de galletitas de vainillas, crema de queso, mermelada de frutos rojos y mix de frutos rojos deco', '10', '1,600', '1950'),
    new Torta('Tiramisú', 'Postre frio a base de vainillas embebidas en cafe, crema de queso, decorado con cacao amargo', '10', '1,500', '1250'),
]

console.log(tortas);

alert('BIENVENIDOS A DULCE PASTELERIA');
let cliente = prompt('¿Como te llamas?');
let inicio = prompt('Hola ' + cliente + '!\nElegí tus tortas favoritas para añadir al carrito. \n Seleccione la torta que desee: \n 1- Oreo Cake. Precio: $1500\n 2- Choco Oreo. Precio: $1650\n 3- Chocotorta. Precio:$2100\n 4- Cheesecake. Precio:$1950\n 5- Tiramisú. Precio:$1250\n 6- Ver mi carrito \n 7-Buscar torta \n 8-Finalizar compra');
let saldo = 0;
const descuento = (a, b) => a * b;
const pedido = [];


while (inicio != '8') {
    switch (inicio) {
        case '1':
            saldo = saldo + 1500;
            alert(cliente + ' agregaste una Torta Oreo a tu pedido\nSu saldo es $' + saldo);
            break;
        case '2':
            saldo = saldo + 1650;
            alert(cliente + ' agregaste una Choco Oreo o a tu pedido\nSu saldo es $' + saldo);
            break;

        case '3':
            saldo = saldo + 2100;
            alert(cliente + ' agregaste una Chocotorta a tu pedido\nSu saldo es $' + saldo);
            break;

        case '4':
            saldo = saldo + 1950;
            alert(cliente + ' agregaste una Cheese Cake a tu pedido\nSu saldo es $' + saldo);
            break;

        case '5':
            saldo = saldo + 1250;
            alert(cliente + ' agregaste un Tiramisú a tu pedido\nSu saldo es $' + saldo);
            break;

        case '6':
            let total = prompt('Gracias ' + cliente + '!!\nEl total de tu pedido es ' + saldo + '\n Escriba el codigo de descuento\n (10% - DDULCE10 | 20% - DDULCE20), para finalizar la compra presiona X');
            while (total != 'X') {
                switch (total) {
                    case 'DDULCE10':
                        saldo = descuento(saldo, 0.9);
                        alert(cliente + ' con el descuento tu saldo es ' + saldo);
                        break;
                    case 'DDULCE20':
                        saldo = descuento(saldo, 0.8);
                        alert(cliente + ' con el descuento tu saldo es ' + saldo);
                        break;
                    default:
                        alert(descuento + ' no es una opcion valida');
                        break;
                }
                alert('El total de su compra es ' + saldo);
                break;
            }
            alert('El total de su compra es ' + saldo);
            break;

        case '7':
            let criterio = parseInt(prompt(' elegí como queres buscar: 1- Por nombre alfabético\n2- Por menor precio'));

            function busqueda(criterio, array) {
                let arrayOrdenado = array;

                switch (criterio) {
                    case 1:
                        let alfabetico = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
                        return alfabetico;
                    case 2:
                        let menorPrecio = arrayOrdenado.sort((a, b) => a.precio - b.precio);
                        return menorPrecio;
                    default:
                        alert(cliente + ' esa opción no es válida, intenta nuevamente!')
                        break;
                }
            }


            function mostrar(array) {
                let info = '';
                array.forEach(element => {
                    info += 'Torta: ' + element.nombre + '\nQué tiene: ' + element.descripcion + '\nCantidad de porciones: ' + element.porciones + '\nPeso Aproximado: ' + element.peso + ' kg\nPrecio: $' + element.precio + '\n\n'
                });
                return info;

            }

            alert(mostrar(busqueda(criterio, tortas)));
            console.log(mostrar(busqueda(criterio, tortas)));


            break;

        default:
            alert(inicio + ' no es una opcion valida');
            break;
    }
    pedido.push(saldo);
    inicio = prompt('Elija sus productos favoritos para añadir al carrito. \n Seleccione la torta que desee: \n 1- Oreo Cake ($1500) \n 2- Choco Oreo ($1650)  \n 3- Chocotorta ($2100) \n 4- Cheesecake ($1950)\n 5- Tiramisú ($1250)\n 6- Ver mi carrito \n 7-Finalizar compra');

}
alert('Finalizaste la compra'+cliente+ '! Te esperamos pronto!');
console.log(pedido);
