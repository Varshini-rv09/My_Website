import React from "react";
import { Box, Typography } from "@mui/material";
import FoodTwo from "../Images/FoodTwo.jpg";
import FoodNine from '../Images/FoodNine.jpg'
import FoodTen from '../Images/FoodTen.webp'
import '../Styles/AboutStyle.css'

const About = () => {
  return (
    <div style={{width:'100%', }}>
      <Box sx={{p:1,
         my: {xs:'none', sm:5,
         
         },
      }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: {xs:'1.5rem', sm:'1.6rem', lg:"1.8rem"},
            fontWeight: "bold",
            p:2
          }}
        >
          We've been making healthy food last for 10 years
        </Typography>
        <div className="about-para">
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus risus
          rhoncus aptent molestie porttitor sem cursus felis. Efficitur
          dignissim aliquet quam primis ut sapien. Erat netus platea lacinia
          semper odio ut consequat. Eu ligula magnis et quam finibus nisl hac.
          Tempor bibendum aliquet non pulvinar felis gravida ridiculus.
        </p>
        <p>
          Ligula sed ut augue proin dignissim sociosqu augue. Natoque tempor
          commodo semper vel pellentesque etiam purus egestas. Ultricies rutrum
          velit arcu consectetur venenatis. Fermentum elementum egestas mus,
          natoque nisi rutrum. Quis vitae quis ligula vestibulum tortor lacus.
          Pharetra massa tincidunt felis tincidunt suscipit facilisi. Ipsum
          tempor montes, volutpat ante senectus curabitur placerat nec.
        </p>
        </div>
        <div className="about-images">
        <img src={FoodNine} alt="food" className="about-image1"></img>
        <img src={FoodTwo} alt="food" className="about-image2"></img>
        <img src={FoodTen} alt="food" className="about-image3"></img>
        </div>
      </Box>
    </div>
  );
};

export default About;
