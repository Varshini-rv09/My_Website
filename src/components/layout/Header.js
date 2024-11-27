import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "../../components/Styles/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  //handle toggle Open
  const handleOpen = () => {
    setOpen(!open);
  };
  // Drawer open
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component={"div"}
        sx={{ flexGrow: 1, my: 2 }}
      >
        <IconButton sx={{ color: "inherit" }}>
          <RestaurantIcon edge="start" />
        </IconButton>
        My Restaurent
      </Typography>
      <Divider />
      <ul className="Mobile-Nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
      
      </ul>
    </Box>
  );
  return (
    <Box>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open-drawer"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color={"gold"}
            variant="h6"
            component={"div"}
            sx={{ flexGrow: 1 }}
          >
            <IconButton sx={{ color: "inherit" }} onClick={handleOpen}>
              <RestaurantIcon edge="start" />
            </IconButton>
            My Restaurent
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="Nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleOpen}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
};

export default Header;
