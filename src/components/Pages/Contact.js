import React from "react";
import {
  Typography,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          mt: 10,
          m: 3,
          "& h4": {
            textAlign: "start",
            px: 2,
            fontWeight: "bold",
          },
          "& p": {
            textAlign: "justify",
            p: 2,
          },
        
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tellus risus
          rhoncus aptent molestie porttitor sem cursus felis. Efficitur
          dignissim aliquet quam primis ut sapien. Erat netus platea lacinia
          semper odio ut consequat. Eu ligula magnis et quam finibus nisl hac.
          Tempor bibendum aliquet non pulvinar felis gravida ridiculus.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: {xs:'300px', sm:'500px', lg:'600px'},
          px:2,
        
        
        }}
      >
        <TableContainer component="paper" >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ display: "flex" }}>
                  <SupportAgentIcon sx={{ color: "red", pr: 1 }} />{" "}
                  <Typography variant="body2" sx={{mt:0.5, ml:1}} >4456524322</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: "flex" }}>
                  <EmailIcon sx={{ color: "skyblue", pr: 1 }} />{" "}
                  <Typography variant="body2" sx={{mt:0.5, ml:1}}>help@myres.com</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ display: "flex" }}>
                  <PhoneIcon sx={{ color: "green", pr: 1 }} />{" "}
                  <Typography variant="body2" sx={{mt:0.5, ml:1}}>99565 24322</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
