import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import "../../app.scss";
import newRequest from "../../utils/NewRequest";

const Navbar = () => {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = () => {
    window.scrollY > 0 ? setactive(true) : setactive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <Link to="/" className="link">
          <div className="logo">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </div>
        </Link>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser?.isSeller && <button>Join</button>}
          {currentUser && (
            <div
              className="user"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gigs
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link to="/" className="link">
              Graphics & Design
            </Link>
            <Link to="/" className="link">
              Video & Animation
            </Link>
            <Link to="/" className="link">
              Writing & Translation
            </Link>
            <Link to="/" className="link">
              AI Services
            </Link>
            <Link to="/" className="link">
              Digital Marketing
            </Link>
            <Link to="/" className="link">
              Music & Audio
            </Link>
            <Link to="/" className="link">
              Progrmming & Tech
            </Link>
            <Link to="/" className="link">
              Business
            </Link>
            <Link to="/" className="link">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
