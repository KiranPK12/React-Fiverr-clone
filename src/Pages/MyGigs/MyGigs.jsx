import React from "react";
import "./MyGigs.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className="mygigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add" className="link">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
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
              <img src="/img/delete.png" className="delete" alt="" />
            </td>
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
              <img src="/img/delete.png" className="delete" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
