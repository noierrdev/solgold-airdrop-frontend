import {
  Box,
  Typography,
  // Dropdown,
  Menu,
  MenuItem,
  // MenuButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuCollapse, setMenuCollapse] = useState<boolean>(false);

  const handleMenuSelect = (location: string) => {
    setActiveMenu(location);
    if (location === "Market Trend") window.location.replace(`/#Market`);
    window.location.replace(`/#${location}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getMenuStyle = (selectedMenu: string) => {
    return {
      color: activeMenu === selectedMenu ? "#FFE26F" : "#ffffff",
      cursor: "pointer",
      fontSize: { xs: "13px", sm: "13px", md: "18px" },
      textAlign: "center",
      "&:hover": {
        backgroundColor: "transparent !important",
        color: "#FFE26F !important",
      },
    };
  };

  const handleCollapseMenu = () => {
    setMenuCollapse(!menuCollapse);
    setIsOpen(!isOpen);
  };

  return (
    <Box
      sx={{
        p: { xs: "36px 25px", sm: "36px 69px" },
        position: "fixed",
        top: 0,
        width: "100%",
        boxSizing: "border-box",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontSize: { xs: "20px", sm: "20px", md: "29px" },
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => handleMenuSelect("Home")}
        >
          SolGOld
        </Typography>
        {screenWidth < 700 ? (
          <Menu open={true}>
            <MenuItem
              sx={{
                border: "none",
                "&:hover": { backgroundColor: "#000 !important" },
              }}
              onClick={handleCollapseMenu}
            >
              <MenuIcon sx={{ color: "#fff", cursor: "pointer" }} />
            </MenuItem>
            <Menu
              sx={{
                backgroundColor: "#181716",
                border: "none",
                width: "80%",
                px: "69px",
                boxShadow: "5px 4px 7px 0px #2a271f",
              }}
              open={menuCollapse}
            >
              {[
                "Home",
                "About",
                "Benefits",
                "Market Trend",
                "RoadMap",
                "Tokenomics",
              ].map((value: string) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.3, filter: "blur(20px)" }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0,
                    filter: isOpen ? "blur(0px)" : "blur(20px)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MenuItem
                    sx={getMenuStyle(value)}
                    onClick={() => handleMenuSelect(value)}
                  >
                    {value}
                  </MenuItem>
                </motion.div>
              ))}
            </Menu>
          </Menu>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: { xs: "20px", sm: "20px", lg: "51px" },
              alignItems: "center",
            }}
          >
            {[
              "Home",
              "About",
              "Benefits",
              "Market Trend",
              "RoadMap",
              "Tokenomics",
            ].map((value: string, index: number) => (
              <Typography
                key={index}
                sx={getMenuStyle(value)}
                onClick={() => handleMenuSelect(value)}
              >
                {value}
              </Typography>
            ))}
          </Box>
        )}
        <Box
          sx={{
            background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
            width: { xs: "80px", sm: "80px", md: "165px" },
            height: { xs: "40px", sm: "40px", md: "51px" },
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() =>
            window.location.replace("https://solgold.gitbook.io/docs/")
          }
        >
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "10px", md: "14px" },
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            Learn More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
