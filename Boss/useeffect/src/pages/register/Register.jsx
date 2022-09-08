import React from "react";
import MyInput from "../../components/inputs/Inputs";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function Register() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#532da8",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    width:'100%',
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "5px 5px 15px 5px #000000",
    color: "#9889ba",
    display: 'flex',
    flex: 'row'
  }));

  return (
    <Box sx={{display:'flex', justifyContent:'center', marginTop:'200px'}}>
      <Grid
        className="form"
        style={{
          backgroundColor: "grey",
          boxShadow: "5px 5px 15px 5px #000000",
        //   width: "50%",
        minWidth: '50%',
        maxWidth: '90%',
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderRadius: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "grey",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10%",
            // width: '70%',
          }}
        >
          <Grid className="username">
            <Item>
              <label className="form__label" for="firstName">
                First Name{" "}
              </label>
              <MyInput
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </Item>
          </Grid>
          <Grid className="lastname">
            <Item>
              <label className="form__label" for="lastName">
                Last Name{" "}
              </label>
              <MyInput
                type="text"
                name=""
                id="lastName"
                className="form__input"
                placeholder="LastName"
              />
            </Item>
          </Grid>
          <Grid className="email">
            <Item>
              <label className="form__label" for="email">
                Email{" "}
              </label>
              <MyInput
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
              />
            </Item>
          </Grid>
          <Grid className="password">
            <Item>
              <label className="form__label" for="password">
                Password{" "}
              </label>
              <MyInput
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </Item>
          </Grid>
          <Grid className="confirm-password">
            <Item>
              <label className="form__label" for="confirmPassword">
                Confirm Password{" "}
              </label>
              <MyInput
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </Item>
          </Grid>
        </div>
        <div class="footer">
          <button type="submit" class="btn">
            Register
          </button>
        </div>
      </Grid>
    </Box>
  );
}
export default Register;
