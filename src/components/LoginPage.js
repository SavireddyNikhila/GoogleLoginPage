import React from "react";
import useStyles from "./Styles";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function LoginPage() {
  const classes = useStyles();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [err, setErr] = useState("");
  const [lang, setLang] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    let temp = "";
    temp = emailOrPhone ? "" : "Enter an email or phone number.";
    setErr(temp);
    if (temp === "") return true;
    else return false;
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (validate()) navigate("/");
  };

  return (
    <>
      <div className={classes.mainDiv}>
        <div align="center">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
            alt="google icon"
            className={classes.img1}
          ></img>
        </div>
        <div>
          <div>
            <Typography variant="h5" className={classes.signinDiv} align="center">
              Sign in
            </Typography>
          </div>
          <div className={classes.textDiv}>
            {" "}
            <Typography align="center">Use your Google Account</Typography>
          </div>
          <div className={classes.innerDiv}>
            <div className={classes.div2}>
              <div>
                <TextField
                  fullWidth
                  label="Email or Phone"
                  name="emailOrPhone"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Email or phone"
                  {...(err && { error: true, helperText: err })}
                />
              </div>
              <div>
                <Link to="/" className={classes.link1}>
                  <b>Forgot email?</b>
                </Link>
              </div>
              <div className={classes.textDiv2}>
                Not your computer? Use Guest mode to sign in privately.
              </div>
              <div>
                <Link to="/" className={classes.link2}>
                  <b>Learn more</b>
                </Link>
              </div>
            </div>
            <div className={classes.div3}>
                <Button className={classes.btn1} style={{textTransform:'none'}}>
                  <b>Create account</b>
                </Button>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={(e) => clickHandler(e)}
                  style={{textTransform:'none'}}
                >
                  Next
                </Button>
              </div>
          </div>
        </div>
      </div>
      {/* <div className={classes.bottomDiv}>
        <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
          <Select
            value={lang}
            name="lang"
            onChange={(e) => setLang(e.target.value)}
          >
            <MenuItem value=""><em>English (United Kingdom)</em></MenuItem>
            <MenuItem value="English (United Kingdom)"><em>English (United Kingdom)</em></MenuItem>
            <MenuItem value="English (United States)">
              English (United States)
            </MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Italiano">Italiano</MenuItem>
          </Select>
        </FormControl>
      </div> */}
    </>
  );
}

export default LoginPage;
