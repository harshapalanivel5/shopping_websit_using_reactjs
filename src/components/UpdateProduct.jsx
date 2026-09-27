import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {

    let paperstyle = {
        width: 400,
        margin: "20px auto",
        padding: "20px"
    };

    // Get id from URL
    let { id } = useParams();

    let navigate =useNavigate();
    // Product state
    let [updateproduct, setupdateproduct] = useState(null);

    // Get product from json-server
    useEffect(() => {
        fetch(`http://localhost:5001/products/${id}`)
            .then(res => res.json())
            .then(data => setupdateproduct(data));
    }, [id]);


    // Handle input changes
    let handlechange = (e) => {

        let { value, name } = e.target;

        if (name.includes("rating.")) {

            let fieldname = name.split("rating.")[1];

            setupdateproduct({
                ...updateproduct,
                rating: {
                    ...updateproduct.rating,
                    [fieldname]: value
                }
            });

        } else {

            setupdateproduct({
                ...updateproduct,
                [name]: value
            });

        }
    };


    // Update product
    let handleupdate = (e) => {

        e.preventDefault();

        fetch(`http://localhost:5001/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res => res.json())
        .then(() => {
            alert("Updated successfully!");
            navigate("/products")
        });

    };


    // Loading
    if (updateproduct === null) {
        return <div>Loading...</div>;
    }


    return (
        <div>

            <Paper elevation={5} style={paperstyle}>

                <Typography variant="h5" textAlign="center">
                    Update Product
                </Typography>

                <Grid
                    container
                    component="form"
                    rowSpacing={4}
                    onSubmit={handleupdate}
                >

                    <TextField
                        name="title"
                        value={updateproduct.title}
                        label="Title"
                        variant="outlined"
                        fullWidth
                        onChange={handlechange}
                    />

                    <TextField
                        name="category"
                        value={updateproduct.category}
                        label="Category"
                        variant="outlined"
                        fullWidth
                        onChange={handlechange}
                    />

                    <Grid container spacing={3}>

                        <Grid size={6}>

                            <TextField
                                name="rating.rate"
                                value={updateproduct.rating.rate}
                                type="number"
                                label="Rate"
                                variant="outlined"
                                onChange={handlechange}
                            />

                        </Grid>

                        <Grid size={6}>

                            <TextField
                                name="rating.count"
                                value={updateproduct.rating.count}
                                type="number"
                                label="Count"
                                variant="outlined"
                                onChange={handlechange}
                            />

                        </Grid>

                    </Grid>

                    <Button
                        variant="contained"
                        type="submit"
                        color="success"
                        fullWidth
                    >
                        Update
                    </Button>

                </Grid>

            </Paper>

        </div>
    );
};

export default UpdateProduct;

