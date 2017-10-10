const products = [
  {
    id: 1,
    name: 'broom',
    price: '5.99'
  },{
    id: 2,
    name: 'mop',
    price: '6.99'
  },{
    id: 3,
    name: 'duster',
    price: '3.99'
  },{
    id: 4,
    name: 'garbage bin',
    price: '10.99'
  },{
    id: 5,
    name: 'cleaning towels',
    price: '12.99'
  },
]

export function getProducts() {
  return products;
}

export function getOne(id) {
  // return the object from the array of products that matches the id parameter
  // filter
  // for each
  // for loop
  let product = products.filter(e => {
    return e.id === +id
  })
  return product[0]
}