import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MyToolBar from "./components/toolbar";
import { useState } from "react";
import NavBar from "./components/navbar";
import MyHome from "./components/home";
import Toolbar from "@mui/material/Toolbar";

const navWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyToolBar width={navWidth} drawerToggleHandler={handleDrawerToggle} />
      <Box
        component="nav"
        sx={{ width: { sm: navWidth }, flexShrink: { sm: 0 } }}
      >
        <NavBar
          width={navWidth}
          mobileOpen={mobileOpen}
          drawerToggleHandler={handleDrawerToggle}
        />
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${navWidth}px)` } }}
      >
        <Toolbar />
        <MyHome />
      </Box>
    </Box>
  );
}

export default App;
