import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { OpenSetting } from "./OpenSetting";
import Button from "@mui/material/Button";

const Navbar = () => {
  const check = () => {
    const data = window.sessionStorage.getItem("Object");

    if (data) {
      const object = JSON.parse(data);
      if (object.userid) {
        return <OpenSetting />;
      } else {
        return (
          <a href="/Login">
            <Button color="inherit" size="large">
              Login / Register
            </Button>
          </a>
        );
      }
    } else {
      return (
        <a href="/Login">
          <Button color="inherit" size="large">
            Login / Register
          </Button>
        </a>
      );
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            We-Connect
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 600,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            We-Connect
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>{check()}</Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
