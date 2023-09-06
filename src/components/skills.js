import Grid from "@mui/material/Grid";
import Github from "../images/github.png";
import Ruby from "../images/ruby.png";
import Php from "../images/php.png";
import Javascript from "../images/java-script.png";
import Mysql from "../images/mysql.png";
import Postgres from "../images/postgre.png";
import Bootstrap from "../images/bootstrap.png";
import Avatar from "@mui/material/Avatar";
import Html from "../images/html.png";
import Css from "../images/css.png";
import Angular from "../images/angular.png";
import Material from "../images/material.png";
import Typescript from "../images/typescript.png";
import Typography from "@mui/material/Typography";

const iconList = [
  {
    img: "ruby",
    title: "Ruby on Rails",
  },
  {
    img: "php",
    title: "PHP",
  },
  {
    img: "javascript",
    title: "JavaScript",
  },
  {
    img: "mysql",
    title: "MySql",
  },
  {
    img: "postgres",
    title: "Postgres",
  },
  {
    img: "bootstrap",
    title: "BootStrap",
  },
  {
    img: "github",
    title: "GitHub",
  },
  {
    img: "html",
    title: "HTML5",
  },
  {
    img: "css",
    title: "CSS3",
  },
  {
    img: "angular",
    title: "Angular",
  },
  {
    img: "material",
    title: "Material",
  },
  {
    img: "typescript",
    title: "Typescript",
  },
];
const MySkills = () => {
  const getImg = (name) => {
    switch (name) {
      case "html":
        return Html;
      case "css":
        return Css;
      case "javascript":
        return Javascript;
      case "typescript":
        return Typescript;
      case "ruby":
        return Ruby;
      case "php":
        return Php;
      case "mysql":
        return Mysql;
      case "postgres":
        return Postgres;
      case "bootstrap":
        return Bootstrap;
      case "github":
        return Github;
      case "angular":
        return Angular;
      case "material":
        return Material;
      default:
        return null;
    }
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        style={{ display: "flex", justifyContent: "center" }}
      >
        My Skills
      </Typography>

      <Grid container spacing={2}>
        {iconList.map((item, index) => (
          <Grid
            item
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar src={getImg(item.img)} alt={item.title} variant="square" />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MySkills;