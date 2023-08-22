import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ToolBar from "./components/toolbar";
import { useState } from "react";
import NavBar from "./components/navbar";

const navWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ToolBar width={navWidth} drawerToggleHandler={handleDrawerToggle} />
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
      ></Box>
    </Box>
  );
}

export default App;
