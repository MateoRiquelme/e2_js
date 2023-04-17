const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Actividad 1
console.warn("----------------------------------Actividad 1-------------------------------")

pizzas.forEach((pizza) => {
  if (!(pizza.id % 2==0)) {
    console.log(`Esta pizza tiene id ${pizza.id} impar`);
  }
});

// Actividad 2 
console.warn("----------------------------------Actividad 2-------------------------------")

pizzas.filter ((pizza) => {
  if (pizza.precio<600) {
    console.log(`La ${pizza.nombre} tiene un precio de ${pizza.precio} y es menor a 600`)
  }
})


// Actividad 3
console.warn("----------------------------------Actividad 3-------------------------------")

pizzas.forEach ((pizza)=>
  console.log(`La ${pizza.nombre} tiene un precio de ${pizza.precio}`))

// Actividad 4
console.warn("----------------------------------Actividad 4-------------------------------")

pizzas.forEach((pizza) =>{
  console.log(`La de ${pizza.nombre} y los ingredientes son:`)
  pizza.ingredientes.forEach((ingredientes)=>{
    console.log(`${pizza.ingredientes}`)
  });
})