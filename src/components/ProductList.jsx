import React, { useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Atom } from "react-loading-indicators";
import { FaCartShopping } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import Swal from 'sweetalert2';
import {useDispatch ,useSelector} from "react-redux";
import {addItems} from "../store/cartSlice";



const ProductList=()=> {
    const dispatch = useDispatch();
    const cartstate = useSelector((state)=>{ return state.cart });
    let navigate = useNavigate();
    let [products ,setProducts]=useState([]);
    let [error,seterror]=useState("");
    let [isloading,setisloading]=useState(true);

    let handledelete =(id) =>{
        axios.delete(`http://localhost:5001/products/${id}`)
        .then( ()=>{
            setProducts((products) =>
                products.filter((product) => product.id !== id)
            );
           Swal.fire({
                title: "Deleted!",
                text: "Product has been deleted successfully.",
                icon: "success",
                confirmButtonText: "OK",

                showClass: {
                    popup: "animate__animated animate__fadeInUp animate__faster"
                },

                hideClass: {
                    popup: "animate__animated animate__fadeOutDown animate__faster"
                }
            });
        })
        .catch((e)=>{
            console.log(e);

            Swal.fire({
                title: "Error!",
                text: "Product could not be deleted",
                icon: "error"
            });
        })
    }

    useEffect( ()=>{
        fetch("http://localhost:5001/products", {method :"GET"})
        .then(( response )=>{
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error("search proper data")
            }
            
         })
        .then((data)=>{ setProducts(data)})
        .catch((error)=>{
            seterror(error.message);   
        })
        .finally(()=>{
            setisloading(false);
        })
    },[])

    let additemtocart = (product) => {
        let checkcart = cartstate.some(
            (cartproduct) => cartproduct.id === product.id
        );

        if (checkcart) {
            Swal.fire({
                title: "Already Added!",
                text: "This product is already in your wishlist.",
                icon: "info",
                confirmButtonText: "OK"
            });
        } else {
            dispatch(addItems(product));

            Swal.fire({
                title: "Added!",
                text: "Product added to wishlist.",
                icon: "success",
                confirmButtonText: "OK"
            });
        }
    };

    if(isloading){
        return(
             <div>
             <center>
                <Atom color="#3158cc" size="medium" text="Loading..." textColor="" />
             </center>
            </div>
        )
       
    }
    
    return (
        <div>
        <article>
            <span>To create a new product</span>
            <Button variant = "primary" onClick={()=>{navigate("/NewProduct")}}>click me!</Button>
            
        </article>
            <h2>Product List</h2>
            {products.length !==0 && (
            <section className="Products">
                {products.map((product)=>(
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
                            
                            <Button variant="primary" onClick={ ()=>additemtocart(product)}>
                                <FaCartShopping />
                            </Button>
                            <Button variant="secondary" onClick={()=>{navigate(`/update/${product.id}`)}}>
                                <FaEdit />
                            </Button>
                            <Button variant="danger" onClick={()=>handledelete(product.id)}>
                                <MdDelete />
                            </Button>
                            
                        </Card.Footer>
                    </Card>
                    )
                )}
            </section>
            )}
            {
                error &&  <p>{error}</p>
            }
            
        </div>
        
        );
};

export default ProductList;