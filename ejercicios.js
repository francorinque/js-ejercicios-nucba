
let pizzas = [

  {
    id : 1,
    nombre : 'La Marinara',
    ingredientes : [
      'Salsa de tomate',
      'Ajo',
      'albahaca ',
      'Sal',
      'Aceite de  Oliva'
    ] ,
    precio : 300
  },
  {
    id : 2,
    nombre : 'La Margherita',
    ingredientes : [
      'Salsa de tomate',
      'Ajo',
      'Sal',
      'Aceite de  Oliva',
      'Queso'
    ] ,
    precio : 350
  },
  {
    id : 3,
    nombre : 'La Sfincione',
    ingredientes : [
      'Salsa de tomate',
      'Oregano',
      'Ajo',
      'Cebolla',
      'Sal',
      'Aceite de  Oliva',
      'Queso'
    ] ,
    precio : 300
  },
  {
    id : 4,
    nombre : 'La fugazza',
    ingredientes : [
      'Salsa de tomate',
      'Oregano',
      'Ajo',
      'albahaca ',
      'Sal',
      'Aceite de  Oliva',
    ] ,
    precio : 400
  },
  {
    id : 5,
    nombre : 'Chicago Pizza Style',
    ingredientes : [
      'Salsa de tomate',
      'Oregano',
      'Ajo',
      'albahaca ',
      'Sal',
      'Aceite de  Oliva',
      'Queso',
      'Pepperoni'
    ] ,
    precio : 1200
  },
  {
    id : 6,
    nombre : 'La pizza mexicana',
    ingredientes : [
      'Salsa de tomate',
      'Oregano',
      'Ajo',
      'albahaca ',
      'Sal',
      'Aceite de  Oliva',
      'Queso',
      'Pimiento'
    ] ,
    precio : 1400
  }
           
];

// A ID IMPAR

let impar = ()=> {
  return pizzas.filter(pizza => pizza.id % 2 != 0);
};

console.log(impar());


// B
let menosDe600 = (cantidad)=>{
 
  if(pizzas.some((pizza) =>pizza.precio <= cantidad)){
    return `SI, HAY PRODUCTOS DE MENOS DE  ${cantidad}`
  }
   else {
    return `NO, NO TENEMOS PIZZAS DE MENOS DE ${cantidad}`
  }
  
};

console.log(menosDe600(1000));

//C 

console.log(pizzas.map(({nombre}) => nombre));

//D
console.log(pizzas.map(({precio}) => precio));

//C
console.log(pizzas.map((pizza) => `${pizza.nombre} SALE : $${pizza.precio}`));


