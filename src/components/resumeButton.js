import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

const ResumeButton = () => {
  const handleClick = () => {
    const url =
      "https://drive.google.com/file/d/1J0vrgqLFWXF7eoNjru9tpOU2pBi6ctvk/view?usp=sharing";
    window.open(url, "_blank", "fullscreen=yes");
    return false;
  };
  return (
    <Button
      variant="contained"
      endIcon={<LaunchIcon />}
      sx={{
        borderRadius: 10,
        backgroundColor: "#008000",
        borderColor: "#FDD521",
        padding: "10px 20px",
        fontSize: "18px",
        "&:hover": {
          backgroundColor: "#ebb134",
        },
      }}
      onClick={handleClick}
    >
      Get Resume
    </Button>
  );
};

export default ResumeButton;
