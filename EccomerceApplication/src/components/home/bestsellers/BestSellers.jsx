import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import crystalGem from '../header/headerassets/gemheaderimage.png'

const BestSellers = () => {

  return (
    <>
    <div className='pt-[50px] mx-6 lg:mx-12 xl:mx-24'>
    <h1 className='text-3xl font-bold text-yellow-100 text-shadow-mdtext-white text-[2rem] font-Harrington text-center relative z-[0] 3xl:text-[5rem]'>Best Sellers</h1>

<Card className='bg-black bg-opacity-80 text-white w-[50%] border border-[0.1] border-amber-100' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}> 
<Card.Img variant="top" src={crystalGem} />
<Card.Body>
  <Card.Title className='text-1xl bg-slate-900 border border-[0.1] border-amber-100 font-bold  text-yellow-100 text-shadow-mdtext-white text-[1.7rem] font-Harrington text-center'>Ruby Circluit</Card.Title>
  <Card.Text className='  text-yellow-100 text-shadow-mdtext-white text-[1rem] font-Harrington text-center'>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary" className='bg-slate-900 text-yellow-100 font-extrabold text-shadow-mdtext-white text-[1rem] font-Harrington text-center border border-[0.1] border-amber-100'>View</Button>
</Card.Body>
</Card>

    </div>
   
    
    </>
    
    
  )
}

export default BestSellers
