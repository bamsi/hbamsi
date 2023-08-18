import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ToolBar from "./components/toolbar";

const navWidth = 300;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ToolBar width={navWidth} />
      <Box
        component="nav"
        sx={{ width: { sm: navWidth }, flexShrink: { sm: 0 } }}
      ></Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${navWidth}px)` } }}
      ></Box>
    </Box>
  );
}

export default App;
