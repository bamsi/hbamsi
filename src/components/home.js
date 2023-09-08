import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChipIcon from "./chipIcon";
import Box from "@mui/material/Box";
import ResumeButton from "./resumeButton";
import theaterJS from "theaterjs";
import { useEffect } from "react";

const iconList = [
  { icon: "GitHub", label: "GitHub", url: "https://github.com/bamsi" },
  { icon: "Twitter", label: "Twitter", url: "https://twitter.com/hibamsi" },
  {
    icon: "LinkedIn",
    label: "Linkedin",
    url: "https://www.linkedin.com/in/bamsi/",
  },
  { icon: "AngelList", label: "AngelList", url: "@bamsi" },
  {
    icon: "CodePen",
    label: "CodePen",
    url: "https://codepen.io/bamsi-the-sasster",
  },
  {
    icon: "YouTube",
    label: "Youtube",
    url: "https://www.youtube.com/@hajiidd1069",
  },
  {
    icon: "StackOverflow",
    label: "StackOverflow",
    url: "https://stackoverflow.com/users/19383260",
  },
  { icon: "Unsplash", label: "Unsplash", url: "https://unsplash.com/@hibamsi" },
];

const typeText = () => {
  let theater = theaterJS({ autoplay: true, minSpeed: 120, maxSpeed: 650 });
  theater
    .on("type:start, erase:start", function () {
      var actor = theater.getCurrentActor();
      actor.$element.classList.add("is-typing");
    })
    .on("type:end, erase:end", function () {
      var actor = theater.getCurrentActor();
      actor.$element.classList.remove("is-typing");
    });
  theater.addActor("bio1", { speed: 0.2, accuracy: 1 });
  theater.addActor("bio2", { speed: 0.2, accuracy: 1 });

  theater
    .addScene("bio1: I'm Haji Bamsi, ", 600)
    .addScene(
      "an enthusiastic software developer ",
      200,
      "with experience ",
      600
    )
    .addScene("bio2: in developing efficient,", 400)
    .addScene(
      " functional, ",
      400,
      " reliable, ",
      400,
      " and user-friendly applications."
    );
};

const MyHome = () => {
  useEffect(() => {
    setTimeout(() => {
      typeText();
    }, 6000);
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      id="home"
    >
      <Typography
        variant="h2"
        gutterBottom
        style={{ marginTop: "5rem", textAlign: "center" }}
      >
        Software Engineer
      </Typography>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        <div id="bio1"></div>
        <div id="bio2"></div>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        <Grid container spacing={2}>
          {iconList.map((item, index) => (
            <Grid item md={3} key={index} style={{ textAlign: "center" }}>
              <ChipIcon icon={item.icon} label={item.label} url={item.url} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box style={{ marginTop: "5rem" }}>
        <ResumeButton />
      </Box>
    </Box>
  );
};

export default MyHome;
