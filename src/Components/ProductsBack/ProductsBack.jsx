import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsBack = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, []);

  console.log(setProducts);

  return (
    <div
      style={{
        width: "100%",

        display: "flex",

        gap: "30px",

        justifyContent: "space-around",

        alignItems: "center",

        minHeight: "90vh",
      }}
    >
      {products.map((e) => {
        return (
          <div
            style={{
              width: "300px",

              height: "300px",

              border: "2px solid black",

              textAlign: "center",
            }}
            key={e.id}
          >
            <h2>{e.title}</h2>

            <img
              src={e.img}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsBack;
