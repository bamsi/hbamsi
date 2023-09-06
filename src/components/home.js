import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChipIcon from "./chipIcon";
import Box from "@mui/material/Box";
import ResumeButton from "./resumeButton";

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

const MyHome = () => {
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
        I'm <span style={{ color: "#008000" }}>Haji Bamsi,</span> an
        enthusiastic software developer with experience in developing efficient,
        functional, reliable, and user-friendly applications.
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
