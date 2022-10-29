import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61z19-15r0L._SX3000_.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            title="Gaming Desktop"
            price={1099.99}
            image="https://i5.walmartimages.com/asr/5b8f58b8-b1a5-4be8-a093-99f493c8ee4f.90a8495ad135b7e9474eb9cfc30c21fd.png"
            rating={4}
          />
          <Product />
        </div>

        <div className="home-row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home-row"></div>
      </div>
    </div>
  );
}

export default Home;
