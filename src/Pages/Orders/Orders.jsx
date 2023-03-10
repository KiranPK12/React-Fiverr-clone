import React from "react";
import "./Orders.scss";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer":"seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="img"
              />
            </td>
            <td>Gig 1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img src="/img/message.png" className="delete" alt="" />
            </td>
          </tr>
          
        </table>
      </div>
    </div>
  );
};

export default Orders;
