import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {BsSearchHeart, BsCart3} from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";


const CardUser = () => {
  const { CardUser } = useLoaderData();

return (
  <Card border="light" style={{ width: '18rem' }}>
         <Card.Img variant="top" src={CardUser.img}  />
         <Card.Body className='text-center'>
           <Card.Title>{CardUser.title} </Card.Title>
           <Card.Subtitle className="mb-2 text-muted">{CardUser.price}</Card.Subtitle>
           {/* <Card.Text>
  //           Some quick example text to build on the card title and make up the
  //           bulk of the card's content.
  //         </Card.Text> */}
         <Button variant="light"><BsSearchHeart/> View </Button>
         <Button variant="light"><BsPencilSquare/> Edit </Button>
         <Button variant="light"><BsTrash/> Delete </Button>
          
        </Card.Body>
       </Card>
)
};
  export default CardUser;






// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {BsSearchHeart, BsPencilSquare, BsTrash } from 'react-icons/bs';

// function CardAdm() {
//   return (
//     <Card border="light" style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="src\assets\haori1.png" />
//       <Card.Body className='text-center'>
//         <Card.Title>Dark Tôri - 50€ </Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Haori</Card.Subtitle>
//         {/* <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text> */}
//         <Button variant="light"><BsSearchHeart/> View </Button>
//         <Button variant="light"><BsPencilSquare/> Edit </Button>
        
//       </Card.Body>
//     </Card>
//   );
// }

// export default CardAdm; 