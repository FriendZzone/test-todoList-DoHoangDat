import Box from "@mui/material/Box";
import { Typography, Avatar } from "@mui/material";
import React from "react";
function Header(props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="0 47px"
      height="70px"
      backgroundColor="#fff"
    >
      <Typography variant="h6" component="span" fontWeight="bold">
        My work
      </Typography>
      <Avatar
        alt="Name"
        src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/c134bc00c64211e8ab94119ecffa3944.jpg"
      />
    </Box>
  );
}

export default Header;
