import {STATUS} from '../../utils/status';

import {Link} from 'react-router-dom'
import Error from "../Error/Error"
import Loader from "../Loader/Loader"


const Category = ({ categories, status, }) => {
    if(status === STATUS.Error) return (<Error />)
    if(status === STATUS.LOADING) return (<Loader />)


    console.log(categories);

  return (
    <section className='categories  px-8 ' id = 'categories'>
       
        <div className='section-title'>
            
                
                    <h3 className='text-yellow-100 font-Harrington text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[6rem] 2xl:text-[12rem] 3xl:text-[13rem] pb-10'>Categories</h3>
                
                </div>
                <div className='category-items flex flex-wrap justify-between md:justify-center w-[100%] 2xl:ml-[2.5rem]'>
                    {
                        categories.slice(0, 5).map(category =>  (
                            <Link to={`category/${category.id}`} key = {categories.id} className='w-[46%] sm:mb-[2.5rem] md:w-[47%] md:mb-[.8rem] lg:w-[29%]  lg:mr-[1rem] mb-6 2xl:mb-[5rem]'>
                                <div className='category-item '>
                                    <div className='category-item-img 3xl:w-[100%]'>
                                        <img src = {category.image} alt= "" className='max-h-80 2xl:w-[75%]' />
                                    </div>
                                    <div className='category-item-name text-center '>
                                        <h6 className='text-yellow-100 font-Harrington text-[1.5rem] 2xl:text-[3rem] bg-violet-700 w-[100%] md:w-[96.6%] lg:w-[100%] xl:w-[90.9%] 2xl:w-[75%] '>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            
 
    </section>
  )
}

export default Category
