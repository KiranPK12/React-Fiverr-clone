import React from "react";
import { Link } from "react-router-dom";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES 
          </Link>{" "}
          > JOHN DOE
        </span>
        <div className="message">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hic porro praesentium minima, asperiores soluta
              perspiciatis repellat sequi tempore quibusdam voluptatibus aut
              labore. Expedita, inventore. Ipsa, doloribus autem!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hic porro praesentium minima, asperiores soluta
              perspiciatis repellat sequi tempore quibusdam voluptatibus aut
              labore. Expedita, inventore. Ipsa, doloribus autem!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hic porro praesentium minima, asperiores soluta
              perspiciatis repellat sequi tempore quibusdam voluptatibus aut
              labore. Expedita, inventore. Ipsa, doloribus autem!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hic porro praesentium minima, asperiores soluta
              perspiciatis repellat sequi tempore quibusdam voluptatibus aut
              labore. Expedita, inventore. Ipsa, doloribus autem!
            </p>
          </div>
          <div className="item owner ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hsa, doloribus autem!
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hic porro praesentium minima, asperiores soluta
              perspiciatis repellat sequi tempore quibusdam voluptatibus aut
              labore. Expedita, inventore. Ipsa, doloribus autem!
            </p>
          </div>
          <div className="item owner ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              quas tempora hsa, doloribus autem!
            </p>
          </div>
          <hr />
          <div className="write">
            <textarea
              name=""
              placeholder="Write a message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
