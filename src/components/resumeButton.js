import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const ResumeButton = () => {
  return (
    <Button
      variant="contained"
      endIcon={<CloudDownloadIcon />}
      sx={{
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        borderColor: "#FDD521",
        padding: "10px 20px",
        fontSize: "18px",
        "&:hover": {
          backgroundColor: "#ebb134",
        },
      }}
    >
      Get Resume
    </Button>
  );
};

export default ResumeButton;
