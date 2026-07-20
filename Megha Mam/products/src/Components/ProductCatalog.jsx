import React from "react";
import ProductsCard from "./ProductsCard";
import products from "./ProductData";

function ProductCatalog() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Product Catalog</h2>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <ProductsCard
                name={product.name}
                image={product.image}
                price={product.price}
              />
            </div>
          ))
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;