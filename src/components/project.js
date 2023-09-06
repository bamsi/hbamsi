import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ItemCard from "./itemCard";
import { Divider } from "@mui/material";

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
  {
    img: "rocket",
    alt: "Space Travelers Hub",
    title: "Space Travelers Hub",
    techList: ["React/Redux", "CSS3", "Rest API", "Postgres"],
    description:
      "A web application for a company that provides commercial and scientific space travel services. This application allows users to book rockets and join selected space missions.",
    github: "https://github.com/Mikelobi/space-travelers-hub",
    live: "https://space-hub1.netlify.app/",
  },
  {
    img: "jukwaa",
    alt: "Jukwaa",
    title: "Jukwaa",
    techList: ["Bootstrap", "CSS3", "Javascript", "HTML"],
    description:
      "This is a forum for sharing tips about lifestyle diseases. The website has been designed to address the challenge of non communicable disease which is currently affecting lives of young men and women.",
    github: "https://github.com/bamsi/jukwaa",
    live: "https://bamsi.github.io/jukwaa/",
  },
  {
    img: "skongaweb",
    alt: "SkongaWeb",
    title: "SKongaWeb",
    techList: ["Angular", "Postgres", "Laravel", "PrimeNG"],
    description:
      "This is a school management system designed to manage school operations. The system features include: student Registration, Student Academic Performance, Student Fees, Payment Management, Parent's Feedbac,k and Notice Board",
    github: "https://github.com/bamsi/skongaweb-ui",
    live: "https://skongaweb.com/",
  },
];

const MyProjects = () => {
  return (
    <Box style={{ marginTop: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        Featured Projects
      </Typography>
      <Divider />

      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
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
