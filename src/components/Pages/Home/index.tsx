import { useEffect, useState } from "react";
import { Box, Stack, Typography, Skeleton } from "@mui/material";
import AnimationBox from "../../Animations";

import solgold from "../../../assets/imgs/solgold.png";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = solgold;
    img.onload = () => {
      setLoading(false);
    };
    img.onerror = () => {
      console.error("Failed to load image:", solgold);
    };
  }, [solgold]);

  if (loading) {
    return <Skeleton animation="wave" />;
  }

  return (
    <AnimationBox option={1} styles={{}}>
      <Box
        id="Home"
        sx={{
          bgcolor: "#181716",
          p: {
            xs: "168px 25px 87px 25px",
            sm: "168px 69px 87px 69px",
          },
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
        }}
      >
        <Stack sx={{ flex: "1 1" }}>
          <Box
            sx={{
              maxWidth: "631px",
              position: "relative",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-90px",
                left: { xs: "-100px", sm: "50px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b1c, #dfb66314, transparent)",
              }}
            />
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                mr: "15px",
              }}
            >
              Secure Your Wealth with
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
            >
              Sol-Gold
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#fff",
                mt: "26px",
              }}
            >
              A brief sentence or two explaining the value proposition, such as
              “Offering stability and security when traditional investments
              falter.
            </Typography>
          </Box>
          <Typography
            sx={{
              zIndex: 1,
              fontWeight: "bold",
              fontSize: "16px",
              background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textFillColor: "transparent",
              position: "relative",
              border: "1px solid #BC813B",
              borderRadius: "5px",
              display: "inline-block",
              marginTop: "26px",
              textAlign: "center",
              padding: "24px 51px",
              width: "fit-content",
              cursor: "pointer",
            }}
          >
            Read WhitePaper
          </Typography>
        </Stack>
        <Stack
          sx={{ flex: "1 1", justifyContent: "center", alignItems: "center" }}
        >
          <img
            src={solgold}
            alt=""
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </Stack>
      </Box>
    </AnimationBox>
  );
};

export default Home;
