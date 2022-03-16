import { Modal } from "bootstrap";
import { useState } from "react";

import logo from "../../static/images/logo.png";
import "./Header.css";

const Header = () => {
  const toggleTheme = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  };

  return (
    <div>
      <div className="container-fluid header-wrapper">
        <div className="row flex-row-reverse header-top-design ">
          {/* Modal starts here  */}

          <button
            className="col-6 coupon-modal"
            data-bs-toggle="modal"
            data-bs-target="#couponModal"
          >
            &#9758; Check deals
          </button>
          <div
            className="modal fade modal-toggle"
            id="couponModal"
            tabIndex="-1"
            aria-labelledby="couponModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Coupons
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Sorry! No Coupons available at the this moment. </p>
                  Try again later or <a href="/contactUs">Contact Us</a> for
                  discount.
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Ends here  */}
          <button
            className="col-lg-2 col-md-2 toggle-button"
            onClick={toggleTheme}
          >
            Toggle Theme
          </button>
        </div>
        <div className="row header-row d-flex align-items-center">
          <div className="col">
            <ul className="list-group list-group-horizontal d-flex justify-content-start menu-options">
              <li className="nav-item list-group-item mx-3">Products</li>
              <li className="nav-item list-group-item mx-3">Organics</li>

              <li className="nav-item list-group-item mx-3">Testimony</li>
              <li className="nav-item list-group-item mx-3">Our Roots</li>
            </ul>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" className="logo" />
            </a>
          </div>
          <div className="col">
            <ul className="list-group list-group-horizontal d-flex justify-content-end menu-options">
              <li className="nav-item list-group-item mx-3">Contact Us</li>
              <li className="nav-item list-group-item mx-2">Account</li>
              <li className="nav-item list-group-item mx-2">Cart (0)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
