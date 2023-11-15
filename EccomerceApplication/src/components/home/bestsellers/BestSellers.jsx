import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import crystalGem from '../header/headerassets/gemheaderimage.png'
const BestSellers = () => {

  return (
    <>
    <h1 className='text-3xl font-bold text-yellow-100 text-shadow-mdtext-white text-[2rem] font-Harrington text-center'>Best Sellers</h1>

<Card className='bg-black text-white w-[40%]' >
<Card.Img variant="top" src={crystalGem} />
<Card.Body>
  <Card.Title className='text-1xl  text-yellow-100 text-shadow-mdtext-white text-[1.7rem] font-Harrington text-center'>Ruby Circluit</Card.Title>
  <Card.Text className='  text-yellow-100 text-shadow-mdtext-white text-[1rem] font-Harrington text-center'>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>
    
    </>
    
    
  )
}

export default BestSellers
