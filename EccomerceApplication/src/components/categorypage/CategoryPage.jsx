import {STATUS} from '../../utils/status';

import {Link} from 'react-router-dom'
import Error from "../Error/Error"
import Loader from "../Loader/Loader"


const Category = ({ categories, status, }) => {
    if(status === STATUS.Error) return (<Error />)
    if(status === STATUS.LOADING) return (<Loader />)


    console.log(categories);

  return (
    <section className='categories  text-center bg-ghost-white w-[100%]' id = 'categories'>
        <div className=''>
            <div className='categories-content'>
                <div className='section-title'>
                    <h3 className='text-white font-Harrington 2xl:text-[9rem]'>Category</h3>
                </div>

                <div className='category-items flex w-[90%] ml-[4.4rem]'>
                    {
                        categories.slice(0, 5).map(category =>  (
                            <Link to={`category/${category.id}`} key = {categories.id}>
                                <div className='category-item '>
                                    <div className='category-item-img '>
                                        <img src = {category.image} alt= "" />
                                    </div>
                                    <div className='category-item-name text-center'>
                                        <h6 className='text-white font-Harrington 2xl:text-[5rem]'>{category.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    </section>
  )
}

export default Category
