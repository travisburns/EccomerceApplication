import React from 'react'
import { STATUS } from '../../utils/status'

import { setModalData, setIsModalVisible } from '../../store/modalSlice';
import SingleProduct from './SingleProduct';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/helpers';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const ProductList = ({products, status}) => {
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state) => state.modal);

    const viewModalHandler = (data) => {
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    return (
        <section className='product py-5 bg-ghost-white' id = "products">
            { isModalVisible && <SingleProduct />}

            <div className='px-8 xl:px-28'>
                <div className='product-content'>
                    <div className='section-title'>
                        <h3 className='text-uppercase text-[3rem] xl:text-[6rem] 2xl:text-[9rem] text-yellow-100 font-Harrington'>Our Products</h3>
                    </div>
                    <div className='product-items flex flex-wrap'>
                        {
                            products.slice(0, 20).map(product => (
                                <div className='product-item bg-violet-900 w-[46.8%] xl:w-[48.8%]  mx-1 my-3' key = {product.id} onClick = {() => viewModalHandler(product)}>
                                    <div className='product-item-img w-[100%]'>
                                        <img src = {product.images[0]} alt = "" className='w-[100%] min-h-[10rem]'/>
                                      
                                   
                                    <div className='product-item-body bg-violet-900 text-center text-white font-Harrington text-[1.4rem] sm:text-[2.2rem]'>
                                    <h6 className = "product-item-title text-pine-green bg-yellow-100 text-black fw-4 fs-15 sm:text-[2.2rem] lg:text-[3rem] 2xl:text-[5rem]">{product.title}</h6>
                                    <div className = "product-item-cat text-black font-bold  font-Harrington text-[1.6rem] sm:text-[1.8rem] lg:text-[2.6rem] 2xl:text-[3.5rem] fs-13 text-uppercase bg-gold fw-6 ">{product.category.name}</div>
                                        
                                        <div className = "product-item-price text-green-500 fw-7 fs-18 sm:text-[1.8rem] lg:text-[2.4rem] 2xl:text-[3rem]">{formatPrice(product.price)}</div>
                                        
                                    </div>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
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
