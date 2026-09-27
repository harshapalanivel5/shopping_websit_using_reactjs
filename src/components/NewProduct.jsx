import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';

const NewProduct = () => {
    let paperstyle ={
        width :400,
        margin :"20px auto",
        padding :"20px"
    };

    let [newproduct,setnewproduct]=useState({
            
            "title": "",
            "price": 500,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            "rating": {
            "rate": 0,
            "count": 0
            }
    });

    let handlechange =(e)=>{
        let {value,name} = e.target;

        let fieldname = name.split("rating.")[1];

        if(name.includes("rating.")){
            setnewproduct({
                ...newproduct,
                rating :{
                    ...newproduct.rating,
                    [fieldname] :value
                }
            })
        }
        else{
            setnewproduct({
            ...newproduct,
            [name] :value
        })
        }
    };

    let handleadd =(e)=>{
        e.preventDefault()

        fetch("http://localhost:5001/products",{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body :JSON.stringify(newproduct)
        })
        .then(()=>{
            alert("added sucessfully!!!"),
            setnewproduct({
                
                "title": "",
                "price": 500,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                "rating": {
                "rate": 0,
                "count": 0
                }
            })
        })
    }
  return (
    <div>
        <Paper elevation={5} style={paperstyle} >
            <Typography variant='h5' textAlign="center">Create new product</Typography>  
            <Grid container component="form" rowSpacing={4} onSubmit={handleadd}>
                <TextField name="title" value={newproduct.title} label="title" variant="outlined" fullWidth onChange={handlechange} />
                <TextField name="category" value={newproduct.category} label="category" variant="outlined" fullWidth onChange={handlechange}/>
                <Grid container spacing={3}>
                    <Grid size={6}>
                        <TextField name="rating.rate" value={newproduct.rating.rate} type="number" label="rate" variant="outlined" onChange={handlechange} />
                    </Grid>
                    <Grid size={6}>
                        <TextField name="rating.count" value={newproduct.rating.count} type="number" label="count" variant="outlined" onChange={handlechange} />
                    </Grid>
                </Grid>
                <Button variant="contained" type="submit" fullWidth>ADD</Button>
            
            
            </Grid>      
        </Paper>
    </div>
  )
}

export default NewProduct