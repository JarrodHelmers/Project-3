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
            id={121234}
            title="Gaming Desktop: Intel i5-9600k, RTX 3060, 16gb DDR4 Ram, 500GB SSD"
            price={1099.99}
            image="https://i5.walmartimages.com/asr/5b8f58b8-b1a5-4be8-a093-99f493c8ee4f.90a8495ad135b7e9474eb9cfc30c21fd.png"
            rating={4}
          />
          <Product
            id={122434}
            title="Official (ICS)2 CISSP for Dummies: In depth study guide for (ICS)2 CISSP"
            price={29.99}
            image="https://www.isc2.org/-/media/ISC2/Textbooks/Self-Study-Resources/cissp-for-dummies-image.ashx?h=251&w=240&hash=D44692A2516BB71A05DC34482FBC364D58B476FB&hash=D44692A2516BB71A05DC34482FBC364D58B476FB&la=en"
            rating={3}
          />
        </div>

        <div className="home-row">
          <Product
            id={342334}
            title="4K LED Samsung Smart TV 49in"
            price={490.99}
            image="https://www.pngall.com/wp-content/uploads/5/Smart-Samsung-TV-PNG.png"
            rating={4}
          />
          <Product
            id={342356}
            title="Nintendo Switch: Nintendo Switch w/ Docking station RED and Blue controllers"
            price={399.99}
            image="https://www.pngall.com/wp-content/uploads/2/Nintendo-Switch-PNG.png"
            rating={5}
          />
          <Product
            id={858344}
            title="Apple IPhone 14 Pro Max: In 4 Brilliant Colors"
            price={1199.99}
            image="http://cdn.shopify.com/s/files/1/0630/4025/8266/products/76E3742B-0AB6-4CEF-ABD6-CF8E7CB6E147.png?v=1662708242"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id={543627}
            title="Apple Watch Series 8: Starting at $399.99"
            price={399.99}
            image="https://www.applemust.com/wp-content/uploads/2022/09/Apple-Watch-SE-8up-hero-220907.png"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
