import React from 'react'
import { STATUS } from '../../utils/status'

import {setModalData, setIsModalVisible} from '../../store/modalSlice'

import { useSelector, useDispatch} from 'react-redux'
import { formatPrice} from '../../utils/helpers';
import Loader from '../Loader/Loader';



const ProductList = ({products, status}) => {
  const dispatch = useDispatch();
  const {isModalVisible} = useSelector((state) => state.modal);

  const viewModalHandler = (data) => {
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  }


  if(status === STATUS.ERROR) return (<Error />) 
  if(status === STATUS.LOADING) return (<Loader />);

  return (
    <div>
      <section className='product py-5 bg-ghost-white' id = "products">
        {isModalVisible && <SingleProduct />}

        <div className='container'>
          <div className='product-content'>
            <div className='section-title'>
              <h3 className='text-uppercase fw-7 text-regal-blue ls-1'>
                Our Products
              </h3>
            </div>
            <div className='product-items grid'>
              {
            products.map(product => (
                          <div className='mx-auto mt-11 w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-[80%]' key = {product.id}
                          onClick={() => viewModalHandler(product)}>
                          <div className=''>
                              <img src = {product.images[0]} alt = "" />
                              <div className = "product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">{product.category.name}</div>
                          </div>
                          <div className='product-item-body'>
                              <h6 className = "product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                              <div className = "product-item-price text-regal-blue fw-7 fs-18">{formatPrice(product.price)}</div>
                          </div>
                      </div>
                               
                        ))
            }
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ProductList



//     const addToCart = (product) => {
//         dispatch(add(product))
//     }


// //     const cards = products.map(product => (
        

// //         <div className='' key={product.id}>
// //             <div  class="mx-auto mt-11 w-80 transform overflow-hidden  bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg w-[80%]">
// //   <img class="h-48 md:h-80 w-full object-cover object-center border border-[0.1] border-amber-100" src={product.image} alt="Product Image" />
// //   <div class=" font-Harrington">
// //     <div className='border border-[0.1] border-amber-100'>
// //     <h2 class=" text-[1.5rem] font-medium dark:text-white text-gray-900 bg-slate-900 border border-[0.3] border-amber-100">{product.title}</h2>
// //     <p class=" text-base dark:text-gray-300 text-gray-700 bg-slate-900">{product.description}</p>
// //     </div>
    
// //     <div class=" items-center pt-2  border border-[0.1] border-amber-100">
// //         <div className='flex mx-2 pb-2'>
// //         <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white border border-[0.1] border-amber-100 bg-slate-900">${product.price}</p>
// //       <p class=" mr-2 text-base  font-medium text-gray-500 line-through dark:text-gray-300 border border-[0.1] border-amber-100 bg-slate-900">$25.00</p>
// //       <p class=" text-base font-medium text-green-500 border border-[0.1] border-amber-100 bg-slate-900">20% off</p>
// //         <button className='ml-auto mr-2 text-lg font-semibold text-gray-900 dark:text-white border border-[0.1] border-amber-100 bg-slate-900' onClick={() => addToCart(product)}>Add</button>
// //         </div>
      
// //     </div>
// //   </div>
// // </div>
// //         </div>
// //     ))

//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-3'>
//       {cards}
//     </div>
//   )
// }

// export default Product
