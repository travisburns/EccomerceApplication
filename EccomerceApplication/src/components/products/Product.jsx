import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, getProducts] = useState([]);
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))

    }, []);

    const cards = products.map(product => (
        

        <div className=''>
            <div key={product.id} class="mx-auto mt-11 w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img class="h-48 w-full object-cover object-center" src={product.image} alt="Product Image" />
  <div class="p-4 font-Harrington">
    <div className='border border-[0.1] border-amber-100'>
    <h2 class=" text-[1.5rem] font-medium dark:text-white text-gray-900 bg-slate-900 border border-[0.1] border-amber-100">{product.title}</h2>
    <p class=" text-base dark:text-gray-300 text-gray-700 bg-slate-900">{product.description}</p>
    </div>
    
    <div class="flex items-center mt-2">
      <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white border border-[0.1] border-amber-100 bg-slate-900">${product.price}</p>
      <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300 border border-[0.1] border-amber-100 bg-slate-900">$25.00</p>
      <p class="ml-auto text-base font-medium text-green-500 border border-[0.1] border-amber-100 bg-slate-900">20% off</p>
    </div>
  </div>
</div>
        </div>
    ))

  return (
    <div>
      {cards}
    </div>
  )
}

export default Product
