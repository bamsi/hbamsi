import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const MyToolBar = (props) => {
  const { width, drawerToggleHandler } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${width}px)` },
        ml: { sm: `${width}px` },
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
          onClick={drawerToggleHandler}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          noWrap
          component="h1"
          sx={{ color: "#008000" }}
        >
          <span className="styleFont">
            # Engineering Excellence in Every Line of Code
          </span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolBar;
