import React from 'react';

const OrderDetail = (props) => {

  return (
    <div className="container">

      <table class="table">

        <thead>
          <tr>
            <th scope="col">User's name</th>
            <th scope="col">Email</th>
            <th scope="col"> Product name </th>
            <th scope="col">Price</th>
            <th scope="col">Ordered Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">{props.orderD.name}</th>
            <td>{props.orderD.email}</td>
            <td>{props.orderD.Shipment.name}</td>
            <td>{props.orderD.Shipment.price}</td>
            <td>{(new Date(props.orderD.orderTime).toDateString('dd/mm/yyyy'))}</td>
          </tr>
        </tbody>

      </table>
    </div>

  );
};

export default OrderDetail;