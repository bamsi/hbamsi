import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Biskop from "../images/biskop.png";
import Rocket from "../images/rocket.png";
import Jukwaa from "../images/jukwaa.png";
import skongaweb from "../images/skongaweb.png";

const ItemCard = (props) => {
  const { img, alt, title, techList, description, github, live } = props;

  const getImg = (name) => {
    switch (name) {
      case "biskop":
        return Biskop;
      case "rocket":
        return Rocket;
      case "jukwaa":
        return Jukwaa;
      case "skongaweb":
        return skongaweb;
      default:
        return null;
    }
  };
  const imageComponent = getImg(img);

  return (
    <Card sx={{ display: "flex", padding: "0.7rem" }}>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "row",
          },
        })}
      >
        <CardMedia
          component="img"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              height: "350px;",
            },
            [theme.breakpoints.up("md")]: {
              height: "350px;",
              width: "50%",
            },
          })}
          image={imageComponent}
          alt={alt}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Grid container spacing={2}>
            {techList.map((item, index) => (
              <Grid item md={3} key={index}>
                <Chip label={item} variant="outlined" />
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" sx={{ textAlign: "justify" }}>
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="GitHub" href={github} target="_blank">
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label="Live Demo" href={live} target="_blank">
                <OpenInNewIcon />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCard;
