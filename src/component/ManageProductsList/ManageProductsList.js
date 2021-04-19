import React from 'react';
import { useHistory } from 'react-router';
import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'


const ManageProductsList = (props) => {
  const history = useHistory()

  const { _id, name, price, stock } = props.product
  // console.log(props)

  const deleteProduct = (id, event) => {
    console.log(_id)
    fetch(`http://localhost:5000/deleteProduct/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        console.log('deleted successfullyy')
        if (result) {
          history.go(0)
        }
      })

  }

  return (


    <table class="table">
      <thead>

        <tr>
          <th scope="col">Product name </th>
          <th scope="col">Stock</th>
          <th scope="col">Price</th>
        </tr>

      </thead>
      <tbody>

        <tr>
          <th scope="row">{name}</th>
          <td>{stock}</td>
          <td>{price}</td>
          <td> <button class="btn btn-danger" onClick={() => deleteProduct(_id)}>delete</button></td>
        </tr>

      </tbody>

    </table>

  );
};

export default ManageProductsList;