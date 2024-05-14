import { Box, Stack, Typography } from "@mui/material";

import chartImg from "../../../assets/imgs/chart.png";
import supplyImg from "../../../assets/imgs/supply.png";
import allocationImg from "../../../assets/imgs/allocation.png";
import txFeeImg from "../../../assets/imgs/txFee.png";
import LtValueImg from "../../../assets/imgs/LtValue.png";
import EllipseImg from "../../../assets/imgs/Ellipse.png";
import EllipseBottomImg from "../../../assets/imgs/EllipseBottom.png";
import AnimationBox from "../../Animations";

const Tokenomics: React.FC = () => {
  return (
    <Box
      id="Tokenomics"
      sx={{
        bgcolor: "#181716",
        p: { xs: "54px 25px", sm: "54px 82px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
      <Stack
        sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <AnimationBox option={3} styles={{}}>
          <Box
            sx={{
              display: "flex",
              position: "relative",
              justifyContent: "center",
              flex: "1 1",
            }}
          >
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
              SolGold
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                mr: "15px",
              }}
            >
              Tokenomics
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "19px",
              fontWeight: "400",
              color: "#fff",
              maxWidth: "600px",
              textAlign: "center",
            }}
          >
            Stagflation presents a unique challenge to investors, blending the
            difficulties of high inflation with the stagnation of economic
            growth.
          </Typography>
        </AnimationBox>
      </Stack>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "none", sm: "center", md: "none" },
            mt: "80px",
            gap: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flex: "1 1",
              p: "25px",
              maxWidth: "472px",
              maxHeight: "472px",
            }}
          >
            <AnimationBox option={2} styles={{}}>
              <img src={chartImg} alt="" style={{ width: "100%" }} />
            </AnimationBox>
          </Box>
          <Stack sx={{ flex: "1 1" }}>
            <AnimationBox option={1} styles={{}}>
              <Stack sx={{ mt: "28px", gap: "77px" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "27px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "unset" },
                  }}
                >
                  <img
                    src={supplyImg}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "26px",
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Impact of Stagflation
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "300",
                        color: "#fff",
                      }}
                    >
                      SolGold issues 1 billion tokens, each initially priced at
                      $0.001163275. This pricing is calculated based on the
                      value of 500 ounces of gold.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </AnimationBox>
            <AnimationBox option={1} styles={{}}>
              <Stack sx={{ mt: "28px", gap: "77px" }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: "27px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "unset" },
                  }}
                >
                  <img
                    src={allocationImg}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "26px",
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Allocation of Raised Funds
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "300",
                        color: "#fff",
                      }}
                    >
                      90% of the raised funds are utilized to purchase physical
                      gold to back SolGold tokens, securing their intrinsic
                      value.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </AnimationBox>
            <AnimationBox option={1} styles={{}}>
              <Stack
                sx={{
                  mt: "28px",
                  gap: "77px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "27px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "unset" },
                  }}
                >
                  <img
                    src={txFeeImg}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "26px",
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Transaction Fees
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "300",
                        color: "#fff",
                      }}
                    >
                      SolGold implements a 4% transaction fee on all trades,
                      which is strategically reinvested into the ecosystem: 2%
                      for additional gold purchases .
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </AnimationBox>
            <AnimationBox option={1} styles={{}}>
              <Stack sx={{ mt: "28px", gap: "77px" }} >
                <Box
                  sx={{
                    display: "flex",
                    gap: "27px",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "center", sm: "unset" },
                  }}
                >
                  <img
                    src={LtValueImg}
                    alt=""
                    style={{ width: "80px", height: "80px" }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: "26px",
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Long-term Value Growth
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "300",
                        color: "#fff",
                      }}
                    >
                      This mechanism not only strengthens the market position of
                      SolGold but also builds investor confidence through
                      demonstrable asset growth.
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
            </AnimationBox>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Tokenomics;
