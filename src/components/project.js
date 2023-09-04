import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "./itemCard";

const projectList = [
  {
    img: "biskop",
    alt: "Movie Biskop Application",
    title: "Movie Biskop",
    techList: ["React/Redux", "CSS3", "Ruby on Rails", "Postgres"],
    description:
      "is a movie booking app that allows a user to signup and log in. Add movies or books available from the list. This app was built with react-redux for the front-end, along with rails for the back-end.",
    github: "https://github.com/bamsi/movie-booking-app-frontend",
    live: "https://exquisite-marigold-3a82c1.netlify.app/",
  },
];

const MyProjects = () => {
  return (
    <Box style={{ marginTop: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        Featured Projects
      </Typography>
      <Grid container spacing={2}>
        {projectList.map((item, index) => (
          <Grid item key={index} xs={12}>
            <ItemCard
              img={item.img}
              alt={item.alt}
              title={item.title}
              description={item.description}
              techList={item.techList}
              live={item.live}
              github={item.github}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;
