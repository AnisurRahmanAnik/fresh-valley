import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import NavBar from '../NavBar/NavBar';




const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const [imgUrl, setImgURL] = useState(null)

    const onSubmit = data => {

        const eventData = {
            name: data.name,
            price: data.price,
            stock: data.stock,
            imgUrl: imgUrl
        };
        const url = `http://localhost:3000/addProduct`

        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side responded', res))
    }

    const handleImgUpload = event => {

        console.log(event.target.files[0])

        const imageData = new FormData();
        imageData.set('key', '69ac3dd8e559919d99712ad0cf744a58')

        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (

        <div className="container">
            <NavBar></NavBar>
            <div className="row">
                <div className="col-md-5">
                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">


                                <Link to="/manageProduct">
                                    <button class="btn btn-danger mb-3" type="submit">manage product</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div class="card text-center">
                            <div class="card-body">

                            

                                <Link to="/admin">
                                    <button class="btn btn-secondary mb-3" type="submit">Add product</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                

                </div>

                <div className="col-md-7">
                    <div className="row ">

                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="col-md-6">

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Product Name</label>
                                   
                                    <input name="name" class="form-control" placeholder="Products name" defaultValue="" ref={register}></input>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Price</label>
                                    <input name="price" class="form-control" placeholder="price" ref={register} />
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Stock</label>
                                       
                                        <input name="stock" class="form-control" placeholder="stock" ref={register} />
                                    </div>

                                    <label for="formFile" class="form-label">Upload Image</label>
                                   
                                    <input name="exampleRequired" class="form-control" type="file" onChange={handleImgUpload} />

                                </div>
                                <input type="submit" class="btn btn-primary mb-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;