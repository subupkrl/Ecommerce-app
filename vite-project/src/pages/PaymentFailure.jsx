import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <>
      <div className="container text-center my-5">
        <h2>Payment Failed</h2>
        <p>
          Unfortunately, your payment could b=not be processed. Please try again
        </p>
        <Link to="/confirm" className="btn btn-success mt-4">
          Try again
        </Link>
      </div>
    </>
  );
};

export default PaymentFailure;
