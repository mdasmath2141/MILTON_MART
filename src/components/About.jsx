import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              An ecommerce marketplace is a website where the products are
              provided by several third parties while the transactions are
              processed by the marketplace itself. The transaction is processed
              by the marketplace and then the order is fulfilled by the chosen
              retailer or dropshipper. And since ecommerce marketplaces list
              products from a number of different sellers, there is usually more
              variety and availability in terms of products, compared to online
              retail stores.If you have an online store, or are planning to
              start an ecommerce store, it’s important for you to consider your
              payment gateways. You need to always ensure that you provide your
              customers a secure and easy checkout experience.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
