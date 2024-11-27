import { Box, Typography, CardMedia } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { menuList } from "../data/Data";

const MenuItemDetails = () => {
  const { id } = useParams();
  const menuItem = menuList.find((item) => item.id === parseInt(id)); //find the id from web

  if (!menuItem) {
    return <Typography variant="h4">Menu item not found</Typography>;
  }
  return (
    <Box
      sx={{
        p: 4,
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "400px",
          margin: "0 auto",
          borderRadius: "10px",
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
        image={menuItem.image}
        alt={menuItem.name}
      />
      <Typography
        variant="h4"
        sx={{
          mt: 1,
          fontWeight: "bold",
          "@media (max-width:600px)": {
            fontSize: "25px",
            fontWeight: "bold",
          },
        }}
        gutterBottom
      >
        {menuItem.name}
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        {menuItem.description}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>
        Price: ${menuItem.price}
      </Typography>
    </Box>
  );
};

export default MenuItemDetails;
