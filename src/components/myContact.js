import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MuiTexField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

const MyContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const validateForm = () => {
    return name !== "" || email !== "" || message !== "";
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(email) ? setValidEmail(true) : setValidEmail(false);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const payload = { name, email, message };
        const response = await axios.post(
          "https://formspree.io/f/mjvlodlr",
          payload
        );
        if (response.status === 200) {
          setSuccessMessage("Thank you for contacting me!");
        } else {
          setErrorMessage("Woops!! Something went wrong.. Please try again");
        }
      } catch (error) {
        setErrorMessage("Woops!! Something went wrong.. Please try again");
      }
    } else {
      setErrorMessage("Woops!! Please fill all required fields");
    }
  };
  return (
    <Box style={{ marginTop: "3rem" }}>
      <Typography variant="h4" gutterBottom>
        My Contacts
      </Typography>
      <Divider />

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
          marginTop: "2rem",
        })}
      >
        <div>
          <Typography variant="h5" gutterBottom>
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </Typography>
        </div>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div>
              {successMessage !== "" && (
                <Alert severity="success">{successMessage}</Alert>
              )}
              {errorMessage !== "" && (
                <Alert severity="error">{errorMessage}</Alert>
              )}
            </div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="full name">Full Name</InputLabel>
                  <Input
                    id="full-name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!validEmail}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <MuiTexField
                    fullWidth
                    multiline
                    rows={3}
                    value={message}
                    onChange={handleMessageChange}
                    required
                  />
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
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </Box>
  );
};

export default MyContact;
