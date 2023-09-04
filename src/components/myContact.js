import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MuiTexField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const MyContact = () => {
  return (
    <Box style={{ marginTop: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        My Contacts
      </Typography>

      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column",
          },
          [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "row",
          },
        })}
      >
        <div>
          <Typography variant="h5" gutterBottom>
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </Typography>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="full name">Full Name</InputLabel>
                <Input id="full-name" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <MuiTexField fullWidth multiline rows={3} />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "center",
                  paddingLeft: "5px",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  style={{ width: "200px" }}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default MyContact;
