import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { removeItems } from "../store/cartSlice"; 
import { Button, Card } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { red } from '@mui/material/colors';

const wishlist = () => {
  let dispatch = useDispatch()
  let handledelete =(reduxItemId) =>{
     dispatch(removeItems(reduxItemId))
  }
  let cartproducts =useSelector((state)=>{return state.cart})
  return (
   <div>
            {cartproducts.length !==0 ? (
            <section className="Products">
                {cartproducts.map((product)=>(
                    <Card key={product.id} style={{ width: '18rem' }} className="product">
                        <center>
                             <Card.Img variant="top" src={product.image} style={{ width :"9rem",height:"12rem"
                      }} />
                        </center>
                     
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text >$
                            {product.price}
                            </Card.Text>
                            
                        </Card.Body>
                        <Card.Footer style={{
                            display:"flex",
                            justifyContent:"space-evenly",
                            alignItems:"center"
                            }}>
                            

                            <Button variant="danger" onClick={()=>handledelete(product.id)}>
                                <MdDelete />
                            </Button>
                            
                        </Card.Footer>
                    </Card>
                    )
                )}
            </section>
            ) :(
            <h1>Please purchase something</h1>
            )
          }
            
        </div>
  )
}

export default wishlist