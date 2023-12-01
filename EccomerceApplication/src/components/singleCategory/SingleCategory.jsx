import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

import Error from '../Error/Error'
import Loader from '../Loader/Loader'
import { STATUS } from '../../utils/status'
import { formatPrice } from '../../utils/helpers'
import { setIsModalVisible, setModalData } from '../../store/modalSlice'


const SingleCategory = ({products, status}) => {
    const dispatch = useDispatch();
    const {isModalVisible} = useSelector((state) => state.modal);


    const viewModalHandler = (data) => {
      dispatch(setModalData(data))
      dispatch(setIsModalVisible(true))

    }

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />)
  return (
    <section className='cat-single py-5 px-8 bg-ghost-white '>
      
       
        <h3 className='text-uppercase font-Harrington text-yellow-100 text-[3.2rem]  '>{products[0].category.name}</h3>
            <div className='flex flex-wrap justify-between md:justify-center '>
                
                
                    {
                        products.map(product => (
                          <div className='product-item font-Harrington text-yellow-100 mb-5 w-[45%]' key = {product.id}
                          onClick={() => viewModalHandler(product)}>
                          <div className='product-item-img '>
                              <img src = {product.images[0]} alt = "" />
                             
                          </div>
                          <div className='product-item-body bg-violet-900'>
                              <h6 className = "product-item-title text-[1.5rem]">{product.title}</h6>
                              <div className = "product-item-price text-[1.3rem]">{formatPrice(product.price)}</div>
                          </div>
                      </div>
                               
                        ))
                    }
               
            </div>
        
 
    </section>
  )
}

export default SingleCategory
