import React from "react";

const Product = (props) => {

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />{" "}
        {/*This Image will come from Prop*/}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <button onClick={() => props.Addtocart(props.title)} className="btn btn-primary">
            Buy THis Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

//Product is the part of productlist.This is the child of productlist.
