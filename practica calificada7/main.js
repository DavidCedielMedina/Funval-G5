let productos=[
    {nombre : "guantes MMA", precio : 150},
    {nombre : "guantes box", precio : 100},
    {nombre : "bucal", precio : 30},
    {nombre : "cabezal", precio : 50},
    {nombre : "pechera", precio : 150},
    {nombre : "vendas", precio : 15},
    {nombre : "pera", precio : 80},
    {nombre : "camisetas", precio : 40},
    {nombre : "kimono", precio : 200},

];

productos.forEach((element) => console.log(element));

let productosdisponibles= productos.map(d => d.nombre);
console.log(productosdisponibles);

console.log(productosdisponibles.includes("bucal"));
console.log(productosdisponibles.includes("frenos"));

let productosConDescuento = productos.map(p => {
  return {
    precioConDescuento: p.precio * 0.9
  };
});

console.log(productosConDescuento);

let menosdeCien = productos.filter(p => p.precio < 100);
console.log(menosdeCien);

let primerosDos = productos.slice(0, 2);
console.log(primerosDos);

let productosOrdenados = productos.sort((a, b) => a.precio - b.precio);
console.log(productosOrdenados);

let reversalist = productosOrdenados.reverse();
console.log(reversalist)




