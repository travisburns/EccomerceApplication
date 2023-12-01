import {STATUS} from '../../utils/status';

import {Link} from 'react-router-dom'
import Error from "../Error/Error"
import Loader from "../Loader/Loader"


const Category = ({ categories, status, }) => {
    if(status === STATUS.Error) return (<Error />)
    if(status === STATUS.LOADING) return (<Loader />)


    console.log(categories);

  return (
    <section className='categories  text-center px-8' id = 'categories'>
       
        <div className='section-title'>
            
                
                    <h3 className='text-yellow-100 font-Harrington text-[3rem] 2xl:text-[9rem] pb-10'>Categories</h3>
                
                </div>
                <div className='category-items flex flex-wrap justify-between md:justify-center w-[100%]'>
                    {
                        categories.slice(0, 5).map(category =>  (
                            <Link to={`category/${category.id}`} key = {categories.id} className='w-[46%] md:w-[47%] mb-6'>
                                <div className='category-item '>
                                    <div className='category-item-img '>
                                        <img src = {category.image} alt= "" className='max-h-80 ' />
                                    </div>
                                    <div className='category-item-name text-center '>
                                        <h6 className='text-yellow-100 font-Harrington text-[1.5rem] 2xl:text-[3rem] bg-violet-700 w-[96.8%]'>{category.name}</h6>
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
