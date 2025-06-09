import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import RatingStar from "../components/RatingStar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/actions/cartAction";
import { APP_URL, IMG_URL } from "../config";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const pid = params.productId;
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${APP_URL}/productdetails/${pid}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [pid]);

  const addToCart = () => {
    dispatch(addItemToCart(params.productId));
    toast.success("product is added to cart");
  };
  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container my-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-4">
            <img
              src={`${IMG_URL}/${product.product_image}`}
              alt={product.product_name}
              width={"300"}
            />
          </div>
          <div className="col-md-7">
            <h2>{product.product_name}</h2>
            <h1>${product.product_price}</h1>
            <p>
              <strong>
                Category:{product.category && product.category.category_name}
              </strong>
            </p>
            <p>{product.product_description}</p>
            {product.rating && (
              <>
                {/* <RatingStar rating={product.rating.rate} />
                &nbsp;<span>({product.rating.count})</span> */}
              </>
            )}
            <div className="my-3">
              <button className="btn btn-warning" onClick={addToCart}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
