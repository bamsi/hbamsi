import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MyToolBar from "./components/toolbar";
import { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import MyHome from "./components/home";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MyProjects from "./components/project";
import MyContact from "./components/myContact";
import "./style/index.css";
import Loader from "./components/loader";

const navWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const setTimer = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  };

  useEffect(() => {
    setTimer();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ display: "flex" }} className="fadeIn">
          <CssBaseline />
          <MyToolBar
            width={navWidth}
            drawerToggleHandler={handleDrawerToggle}
          />
          <Box
            component="nav"
            sx={{ width: { md: navWidth }, flexShrink: { sm: 0 } }}
          >
            <NavBar
              width={navWidth}
              mobileOpen={mobileOpen}
              drawerToggleHandler={handleDrawerToggle}
            />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { md: `calc(100% - ${navWidth}px)` },
            }}
          >
            <Toolbar />
            <Container fixed>
              <MyHome />
              <MyProjects />
              <MyContact />
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;
