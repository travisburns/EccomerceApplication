import React, { useEffect } from 'react'
import Header from './header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/ProductSlice';
import Category from '../categorypage/CategoryPage';
import ProductList from '../products/ProductList.jsx';
import { fetchCategories, fetchProductsByCategory} from '../../store/categorySlice.jsx'
import SingleCategory from '../singleCategory/SingleCategory.jsx';
// import BestSellers from './bestsellers/BestSellers'

const Home = () => {
  const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category)
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category)
  const {data: products, status: productStatus} = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
  }, [])







  return (
      <>
      
     
      <div className='home-page'>
      <Header />
      <Category categories = {categories} status = {categoryStatus} />

      <ProductList products = {products} status = {productStatus} />

      {/* Cateogry one products */}
        <section>
          {
            productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status = {catProductAllStatus} />
          }
        </section>
      {/* Cateogry two products */}
      <section>
          {
            productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} />
          }
        </section>

    </div>
      
      
      </>
      
      
  
  )
}

export default Home
