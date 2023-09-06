import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CodeIcon from "@mui/icons-material/Code";
import Avatar from "@mui/material/Avatar";
import avatar from "../images/avatar.png";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MySkills from "./skills";

const menuItems = [
  { label: "Home", link: "#home" },
  { label: "Featured Projects", link: "#projects" },
  { label: "My Contact", link: "#contact" },
];

const styles = {
  listItem: {
    "&:hover": {
      backgroundColor: "#CAF0C7",
    },
  },
};

const NavBar = (props) => {
  const { mobileOpen, width, drawerToggleHandler } = props;

  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "1rem 0",
        }}
      >
        <Avatar
          alt="Haji I. Bamsi"
          src={avatar}
          sx={{ width: 100, height: 100, marginBottom: "0.5rem" }}
        />

        <Typography variant="h6" noWrap>
          Hi, I'm Bamsi
        </Typography>
      </div>
      <Divider />
      <List>
        {menuItems.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton component="a" href={item.link} sx={styles.listItem}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "90%",
          flexDirection: "column",
        }}
      >
        <MySkills />
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={drawerToggleHandler}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: width },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: width },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
