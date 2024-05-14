import { Box, Stack, Typography } from "@mui/material";
import AnimationBox from "../../Animations";

import SolGoldImg from "../../../assets/imgs/solgold_sm.png";
import TradeChartImg from "../../../assets/imgs/tradeChart.png";
import EllipseImg from "../../../assets/imgs/Ellipse.png";
import EllipseBottomImg from "../../../assets/imgs/EllipseBottom.png";

const Market: React.FC = () => {
  return (
    <Stack
      id="Market"
      sx={{
        bgcolor: "#212121",
        p: { xs: "77px 25px", sm: "77px 69px" },
        position: "relative",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "300px", sm: "300px", md: "500px" },
          height: { xs: "300px", sm: "300px", md: "500px" },
          backgroundImage: `url(${EllipseImg})`,
          backgroundSize: "100% 100%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: { xs: "300px", sm: "300px", md: "500px" },
          height: { xs: "300px", sm: "300px", md: "500px" },
          backgroundImage: `url(${EllipseBottomImg})`,
          backgroundSize: "100% 100%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "20px",
        }}
      >
        <Box
          sx={{
            maxWidth: "531px",
            position: "relative",
            justifyContent: "space-around",
            flex: "1 1",
          }}
        >
          <AnimationBox option={3} styles={{}}>
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
                mr: "15px",
              }}
            >
              Live SolGold
            </Typography>
          </AnimationBox>
          <AnimationBox option={3} styles={{}}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                mr: "15px",
              }}
            >
              Market Stats
            </Typography>
          </AnimationBox>
        </Box>
        <Box sx={{ maxWidth: "640px" }}>
          <AnimationBox option={3} styles={{}}>
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: "400",
                color: "#fff",
              }}
            >
              Stagflation presents a unique challenge to investors, blending the
              difficulties of high inflation with the stagnation of economic
              growth. Traditional investments often falter under these
              conditions, struggling with eroding returns and increased
              volatility. In contrast, gold-backed cryptocurrencies offer a
              modern solution.
            </Typography>
          </AnimationBox>
        </Box>
      </Box>
      <Stack
        sx={{ bgcolor: "#161616", borderRadius: "10px", p: "28px", mt: "54px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",

              gap: { xs: "18px", sm: "18px", md: "28px" },
            }}
          >
            <Box sx={{ width: "70px", height: "70px" }}>
              <img
                src={SolGoldImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "18px", md: "26px" },
                  fontWeight: 500,
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                Solana GOLD
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "18px", sm: "18px", md: "18px" },
                  fontWeight: 500,
                  color: "#fff",
                }}
              >
                Sol Gold
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "column", md: "row" },
              gap: { xs: "20px", sm: "20px", md: "76px" },
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography
                sx={{ fontSize: { xs: "13px", sm: "12px", md: "18px" } }}
              >
                Last Price
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "20px", md: "25px" },
                  color: "#fff",
                }}
              >
                $0.00789
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{ fontSize: { xs: "13px", sm: "13px", md: "18px" } }}
              >
                Vol
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "20px", md: "25px" },
                  color: "#fff",
                }}
              >
                $0.00789
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{ fontSize: { xs: "13px", sm: "13px", md: "18px" } }}
              >
                High
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "20px", sm: "20px", md: "25px" },
                  color: "#fff",
                }}
              >
                $0.00789
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{ fontSize: { xs: "13px", sm: "13px", md: "18px" } }}
              >
                Low
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "25px",
                    color: "#fff",
                  },
                }}
              >
                $0.00789
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: "43px" }}>
          <img src={TradeChartImg} alt="" width={"100%"} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Market;
