import Chip from "@mui/material/Chip";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const ChipIcon = (props) => {
  const { label, icon } = props;

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
      default:
        return <PanoramaFishEyeIcon />;
    }
  };

  const IconComponent = getIconByName(icon);

  return (
    <Chip
      label={label}
      component="a"
      href="#basic-chip"
      icon={IconComponent}
      clickable
    />
  );
};

export default ChipIcon;
