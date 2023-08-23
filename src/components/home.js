import Typography from "@mui/material/Typography";

const MyHome = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" gutterBottom style={{ marginTop: "3rem" }}>
        Software Engineer
      </Typography>
      <Typography variant="h5" style={{ width: "70%", textAlign: "center" }}>
        I'm Haji Bamsi, an enthusiastic software developer with experience in
        developing efficient, functional, reliable, and user-friendly
        applications.
      </Typography>
    </div>
  );
};

export default MyHome;
