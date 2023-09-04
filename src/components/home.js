import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChipIcon from "./chipIcon";
import Box from "@mui/material/Box";
import ResumeButton from "./resumeButton";

const iconList = [
  { icon: "GitHub", label: "GitHub" },
  { icon: "Twitter", label: "Twitter" },
  { icon: "LinkedIn", label: "Linkedin" },
  { icon: "PanoramaFishEye", label: "Angel" },
  { icon: "PanoramaFishEye", label: "CodePen" },
  { icon: "YouTube", label: "Youtube" },
  { icon: "PanoramaFishEye", label: "StackOverflow" },
  { icon: "PanoramaFishEye", label: "Unsplash" },
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
    >
      <Typography
        variant="h2"
        gutterBottom
        style={{ marginTop: "5rem", textAlign: "center" }}
      >
        Software Engineer
      </Typography>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        I'm Haji Bamsi, an enthusiastic software developer with experience in
        developing efficient, functional, reliable, and user-friendly
        applications.
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
              <ChipIcon icon={item.icon} label={item.label} />
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
