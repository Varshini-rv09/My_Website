import { Typography, Box, IconButton } from "@mui/material";
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width:'100%',
          textAlign: "center",
          bgcolor: "black",
          color: "white",
          padding: 1,
          '& svg': {
            fontSize:{xs:'1.5em', lg:'1.2em'},
            mr:2
          },
          '& svg:hover':{
            color:'goldenrod',
            cursor:'pointer',
            transition:'all 300ms '
          },
        }}
      >
        <IconButton sx={{color:"inherit"}}>
            <WhatsAppIcon />
            <InstagramIcon />
            <GitHubIcon />
        </IconButton>
        <Typography sx={{fontSize:{xs:'1.2rem', sm:'none'}}}>All Rights Reserved &copy; Varshu RV </Typography>
      </Box>
    </>
  );
};

export default Footer;
