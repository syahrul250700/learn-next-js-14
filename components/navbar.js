import * as React from "react";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";




export default function Navbar() {


  return (

  
      <AppBar position="static" className="bg-[#143447]">
        <Toolbar sx={{ minHeight: "50px" }}>
        <Image
            src="/nash_logo-removebg.png"
            width={80}
            height={80}
            alt="logo"
            className="pt-1 "
          />
          <Typography
            variant="h6"
            color="primary.contrastText"
          >
            NASH JS
          </Typography>
          
        <Avatar className="left-1">H</Avatar>
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    

    // <div>
    //   <div>
    //     <nav className="navbar navbar-expand-lg navbar-light  bg-[#143447]">
    //       <Image
    //         src="/nash_logo-removebg.png"
    //         width={80}
    //         height={80}
    //         alt="logo"
    //         className="pt-1 ml-16"
    //       />
    //     </nav>
    //   </div>
    // </div>
  );
}

