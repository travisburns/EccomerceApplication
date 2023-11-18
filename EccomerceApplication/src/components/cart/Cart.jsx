import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch()
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }
  
  const cards = products.map(product => (
        

    <div className='' key={product.id}>
        <div  class="mx-auto mt-11  transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-[75%] 3xl:w-[25%]">
<img class="h-48 md:h-80 w-full object-cover object-center border border-[0.1] border-amber-100" src={product.image} alt="Product Image" />
<div class=" font-Harrington">
<div className='border border-[0.1] border-amber-100'>
<h2 class=" text-[1.5rem] font-medium dark:text-white text-gray-900 bg-slate-900 border border-[0.3] border-amber-100">{product.title}</h2>
<p class=" text-base dark:text-gray-300 text-gray-700 bg-slate-900">{product.description}</p>
</div>

<div class=" items-center pt-2  border border-[0.1] border-amber-100">
    <div className='flex mx-2 pb-2'>
    <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white border border-[0.1] border-amber-100 bg-slate-900">${product.price}</p>
  <p class=" mr-2 text-base  font-medium text-gray-500 line-through dark:text-gray-300 border border-[0.1] border-amber-100 bg-slate-900">$25.00</p>
  <p class=" text-base font-medium text-green-500 border border-[0.1] border-amber-100 bg-slate-900">20% off</p>
    <button className='ml-auto mr-2 text-lg font-semibold text-gray-900 dark:text-white border border-[0.1] border-amber-100 bg-slate-900 text-red-600' onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  
</div>
</div>
</div>
    </div>
))




  return (
    <>
    <h1 className='text-Herrington text-[5rem] text-white'>Your Craft</h1>
    {cards}

    </>
  )
}

export default Cart


