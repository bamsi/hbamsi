import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const ToolBar = (props) => {
  const { width } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${width}px)` },
        ml: { sm: `${width}px` },
        padding: "1rem",
        backgroundColor: "secondary.contrastText",
        "&:hover": {
          backgroundColor: "#f5f5f5",
        },
        color: "#000",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h4"
          noWrap
          component="h1"
          sx={{ fontFamily: "Courier, monospace" }}
        >
          Haji Idd Bamsi
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default ToolBar;
