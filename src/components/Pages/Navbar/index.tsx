import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";

interface PropsInterface {
  isExpanded: boolean;
  setCurrentPage: (num: number) => void;
}

const Navbar: React.FC<PropsInterface> = ({ isExpanded, setCurrentPage }) => {
  const [activeItem, setActiveItem] = useState("HOME");

  const handleItemClick = (item: any) => {
    setActiveItem(item);
    switch (item) {
      case "HOME":
        setCurrentPage(2);
        break;
      case "ABOUT":
        setCurrentPage(3);
        break;
      case "TOKENOMICS":
        setCurrentPage(4);
        break;
      case "STATICTICS":
        setCurrentPage(5);
        break;
      default:
        setCurrentPage(0);
        break;
    }
  };

  const getItemStyle = (item: any) => ({
    color: activeItem === item ? "transparent" : "#fff",
    fontSize: 28,
    fontFamily: "comics",
    textAlign: "center",
    display: "inline",
    visibility: isExpanded ? "visible" : "hidden",
    opacity: isExpanded ? 1 : 0,
    transition: "visibility 0.5s, opacity 0.5s linear",
    backgroundImage:
      activeItem === item
        ? "linear-gradient(180deg, #FFE801 50%, #F72800 91.33%)"
        : "none",
    WebkitBackgroundClip: activeItem === item ? "text" : "none",
    WebkitTextFillColor: activeItem === item ? "transparent" : "none",
    cursor: "pointer",
  });

  return (
    <Stack
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "50%",
        transform: "translateX(-49%)",
        display: "flex",
        justifyContent: "center",
        gap: "55px",
        height: "100vh",
        background: isExpanded
          ? `linear-gradient(to right, transparent 50%, #1C0A00 50%)`
          : "transparent",
        backgroundSize: "200% 100%",
        transition: "background-position 0.3s linear",
        backgroundPosition: isExpanded ? "100% center" : "0% center",
        animation: isExpanded ? "slideRightToLeft 0.3s linear forwards" : "",
        "@keyframes slideRightToLeft": {
          from: {
            backgroundPosition: "0% center",
          },
          to: {
            backgroundPosition: "100% center",
          },
        },
      }}
    >
      {["HOME", "ABOUT", "TOKENOMICS", "STATICTICS"].map((item) => (
        <Typography
          key={item}
          sx={getItemStyle(item)}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </Typography>
      ))}
    </Stack>
  );
};

export default Navbar;
