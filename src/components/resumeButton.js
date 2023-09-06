import Button from "@mui/material/Button";
import LaunchIcon from "@mui/icons-material/Launch";

const ResumeButton = () => {
  const handleClick = () => {
    const url =
      "https://docs.google.com/document/d/10gKoPyIX3vMsCWv_Ha9J_KrXk5DXhPUAWlnWvz4AlPE/edit?usp=sharing";
    window.open(url, "_blank");
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
