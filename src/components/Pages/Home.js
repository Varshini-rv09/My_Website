import React from "react";
import Banner from "../../components/Images/Banner.jpg";
import "../Styles/HomeStyle.css";

const Home = () => {
  return (
    
      <div className="home">
        <div
          className="background-blur"
          style={{
            
            backgroundImage: `url(${Banner})`,
            marginTop: "-21px",
          }}
        ></div>
        <div className="background-overlay"></div>
        <div className="header-container">
          <h1>Welcome To Delicious World</h1>
          <p>For the love of food!</p>
            <button>Order Now</button>
         
        </div>
      </div>
     
  );
};

export default Home;
