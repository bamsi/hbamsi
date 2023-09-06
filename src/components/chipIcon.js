import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import AngelistIcon from "../images/angelist.png";
import StackOverflow from "../images/stackoverflow.png";
import Unsplash from "../images/unsplash.png";
import CodePen from "../images/codepen.png";

const ChipIcon = (props) => {
  const { label, icon, url } = props;

  const getIconByName = (name) => {
    switch (name) {
      case "GitHub":
        return <GitHubIcon />;
      case "Twitter":
        return <TwitterIcon />;
      case "LinkedIn":
        return <LinkedInIcon />;
      case "YouTube":
        return <YouTubeIcon />;
      case "AngelList":
        return (
          <img
            src={AngelistIcon}
            alt="AnglelList Icon"
            width="20"
            height="20"
          />
        );
      case "CodePen":
        return <img src={CodePen} alt="CodePen Icon" width="20" height="20" />;
      case "StackOverflow":
        return (
          <img
            src={StackOverflow}
            alt="StackOverflow Icon"
            width="20"
            height="20"
          />
        );
      case "Unsplash":
        return (
          <img src={Unsplash} alt="Unsplash Icon" width="20" height="20" />
        );
      default:
        return <PanoramaFishEyeIcon />;
    }
  };

  const IconComponent = getIconByName(icon);

  return (
    <Chip
      label={label}
      component="a"
      href={url}
      icon={IconComponent}
      clickable
    />
  );
};

export default ChipIcon;
