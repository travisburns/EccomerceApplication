import React from 'react'
import { spinner} from '../../utils/images/';



const Loader = () => {
  return (
    <div className='container py-5'>
      <div className='flex flex-center loader'>
        <img src={spinner} alt= "loader" />
      </div>
    </div>
  )
}

export default Loader
