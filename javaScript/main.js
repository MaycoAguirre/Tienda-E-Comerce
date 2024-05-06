const arrayTeclados = [];
const arrayMonitores = [];
const carrito = [];

let idTeclado = 1;
let idMonitor = 1;

function Teclado(marca, color, mecanico, precio) {
  this.id = idTeclado++;
  this.tipo = "Teclado";
  this.marca = marca;
  this.color = color;
  this.mecanico = mecanico;
  this.precio = precio;
  arrayTeclados.push(this);
}

function Monitor(marca, color, pulgadas, panel, precio) {
  this.id = idMonitor++;
  this.tipo = "Monitor";
  this.marca = marca;
  this.color = color;
  this.pulgadas = pulgadas;
  this.panel = panel;
  this.precio = precio;
  arrayMonitores.push(this);
}

const teclado1 = new Teclado("Redragon", "Blanco", true, 50000);
const teclado2 = new Teclado("HyperX", "Negro", true, 70000);
const teclado3 = new Teclado("Logitech", "Negro", true, 80000);

const monitor1 = new Monitor("Samsung", "Negro", "24'", "IPS", 125000);
const monitor2 = new Monitor("LG", "Negro", "27'", "TN", 150000);
const monitor3 = new Monitor("Dell", "Plata", "32'", "VA", 200000);

const comprarTeclados = () => {
  let opcion = prompt(
    "Seleccione un teclado:\n" +
      arrayTeclados
        .map(
          (teclado, index) =>
            `${index + 1}. ${teclado.marca} - $${teclado.precio}`
        )
        .join("\n") +
      "\nPresione Cancelar para volver."
  );
  if (opcion !== null) {
    opcion = parseInt(opcion);
    if (opcion >= 1 && opcion <= arrayTeclados.length) {
      let tecladoElegido = arrayTeclados[opcion - 1];
      carrito.push(tecladoElegido);
      console.log(
        `Teclado seleccionado: ${tecladoElegido.marca} - $${tecladoElegido.precio}`
      );
    } else {
      alert("Opción inválida.");
    }
  } else {
    console.log("Volviendo al menú principal.");
  }
};

const comprarMonitores = () => {
  let opcion = prompt(
    "Seleccione un monitor:\n" +
      arrayMonitores
        .map(
          (monitor, index) =>
            `${index + 1}. ${monitor.marca} - $${monitor.precio}`
        )
        .join("\n") +
      "\nPresione Cancelar para volver."
  );
  if (opcion !== null) {
    opcion = parseInt(opcion);
    if (opcion >= 1 && opcion <= arrayMonitores.length) {
      let monitorElegido = arrayMonitores[opcion - 1];
      carrito.push(monitorElegido);
      console.log(
        `Monitor seleccionado: ${monitorElegido.marca} - $${monitorElegido.precio}`
      );
    } else {
      alert("Opción inválida.");
    }
  } else {
    console.log("Volviendo al menú principal.");
  }
};

const mostrarCarrito = () => {
  let mensaje = "Carrito de Compras:\n";
  let totalPrecio = 0;
  carrito.forEach((producto, index) => {
    mensaje += `${index + 1}. ${producto.tipo}: ${producto.marca} - $${producto.precio}\n`;
    totalPrecio += producto.precio;
  });
  mensaje += `Total del precio de todos los productos en el carrito: $${totalPrecio}`;
  alert(mensaje);
  console.log(mensaje);
};


const verProductos = () => {
  let mensaje = "Productos Disponibles:\nTeclados:\n";
  arrayTeclados.forEach((teclado, index) => {
    mensaje += `${index + 1}. ${teclado.marca} - $${teclado.precio}\n`;
  });
  mensaje += "Monitores:\n";
  arrayMonitores.forEach((monitor, index) => {
    mensaje += `${index + 1}. ${monitor.marca} - $${monitor.precio}\n`;
  });
  alert(mensaje);
};

const comprarProducto = () => {
  while (true) {
    let elegirPeriferico = prompt(
      "Que tipo de productos desea comprar?\n1. Teclados\n2. Monitores\nPresione cualquier otra tecla para volver."
    );
    switch (elegirPeriferico) {
      case "1":
        comprarTeclados();
        break;
      case "2":
        comprarMonitores();
        break;
      default:
        alert("Volviendo al menú principal.");
        return;
    }
  }
};

const iniciarTienda = () => {
  while (true) {
    let opcion1 = prompt(
      "Seleccione una opcion?\n1. Ver Productos.\n2. Comprar Productos.\n3. Mostrar Carrito.\n4. Salir"
    );
    switch (opcion1) {
      case "1":
        verProductos();
        break;
      case "2":
        console.log("Comprar producto");
        comprarProducto();
        break;
      case "3":
        mostrarCarrito();
        break;
      case "4":
        alert("Nos vemos pronto, muchas gracias.");
        return;
      default:
        alert("Opcion Invalida, Ingrese un valor correcto.");
        break;
    }
  }
};

iniciarTienda();
