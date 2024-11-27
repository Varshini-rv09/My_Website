import React from "react";
import { menuList } from "../data/Data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import "../Styles/MenuStyle.css"

const Menu = () => {
  return (
    <>
      <Typography sx={{
        fontSize:{xs:'1.5rem', sm:'1.7rem', lg:"1.8rem"},
        fontWeight:"bold",
        textAlign:"center",
        
      }}>Flavours Of India</Typography>

      <Box className="menu-container"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          
        }}
      >
        {menuList.map((menu) => (
          <Card
            sx={{
           
              maxWidth: "500px",
              width: "280px",
              height: "250px",
              display: "flex",
              m: 2,
              boxShadow:
                "0 4px 6px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.2)",
           "@media (max-width:600px)":{
                    maxWidth:'500px',
                    height:'300px'
                  },

                  "@media (min-width:600px) and (max-width:900px)":{
                    width: '250px',
                  }
              }}
          >
            <CardActionArea
              sx={{
                position: "relative",
                overflow: "hidden",
                "&:hover .hover-content": {
                  opacity: 1,
                  transform: "translateY(-25px)",
                  transition: "transform 0.6s",

                },
              }}
            >
              <CardMedia
                sx={{
                  width: "300px",
                  display: "block",
                  minHeight: "300px",
                 
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent
                className="hover-content"
                sx={{
                  width: "90%",
                  height: "100%",
                  position: "absolute",
                  top: "10%",
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  background: "rgba(0,0,0,0.9)",
                  opacity: 0,
                  transition: "0.6s",
               
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  component={"div"}
                  sx={{
                    color: "gold",
                    mb: 1,
                    fontSize:'1.3rem',
                  }}
                >
                  {menu.name}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {menu.description}
                </Typography>
                <Button
                  sx={{
                    mt: 2,
                    background: "white",
                    color: "black",
                    borderRadius: "10px",
                  }}
                >
                  See More
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Menu;
