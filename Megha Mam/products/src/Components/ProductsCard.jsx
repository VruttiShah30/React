import React from "react";
import PropTypes from "prop-types";

function ProductsCard({ name, image, price }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={image} alt={name} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Price:</strong> ₹{price}
        </p>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCard;