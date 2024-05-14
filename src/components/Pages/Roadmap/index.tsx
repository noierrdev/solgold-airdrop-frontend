import { Stack, Box, Typography, List, ListItem, Divider } from "@mui/material";

import AnimationBox from "../../Animations";
import EllipseImg from "../../../assets/imgs/Ellipse.png";
import EllipseBottomImg from "../../../assets/imgs/EllipseBottom.png";

const RoadMap: React.FC = () => {
  return (
    <Stack
      id="RoadMap"
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
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            justifyContent: "space-around",
            flex: "1 1",
          }}
        >
          <AnimationBox option={3} styles={{}}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "30px", md: "62px" },
                color: "#fff",
                mr: "15px",
              }}
            >
              Sol Gold journey
            </Typography>
          </AnimationBox>
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
              Roadmap
            </Typography>
          </AnimationBox>
        </Box>
        <Box sx={{ flex: "1 1" }}>
          <Typography
            sx={{ fontSize: "19px", color: "#fff", lineHeight: "180%" }}
          >
            Embark on a transformative journey with Sol Gold as we navigate the
            complexities of a changing economic landscape through our detailed
            roadmap. Our journey begins with an innovative approach to
            confronting stagflation
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mt: "63px",
          height: { xs: "auto", md: "1000px" },
        }}
      >
        <Stack
          sx={{
            flex: "1 1",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            gap: { xs: "20px", md: 0 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              width: "1px",
              height: "90%",
              top: 0,
              right: 0,
              bgcolor: "#474746",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: { xs: "7%", lg: "15%" },
              height: "80%",
              top: "10%",
              right: 0,
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
              paddingInline: { xs: "0", lg: "2%" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                mb: "-12px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  borderRadius: "10px",
                  mt: "5px",
                  zIndex: 1,
                }}
              />
              <Divider
                sx={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #BC813B 50%, rgba(0, 0, 0, 0) 50%)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: { xs: "1px 1px", lg: "8px 2px" },
                  borderRadius: "10px",
                  mt: "10px",
                  zIndex: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                mb: "-12px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  borderRadius: "10px",
                  mt: "5px",
                  zIndex: 1,
                }}
              />
              <Divider
                sx={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #BC813B 50%, rgba(0, 0, 0, 0) 50%)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: { xs: "1px 1px", lg: "8px 2px" },
                  borderRadius: "10px",
                  mt: "10px",
                  zIndex: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                position: "relative",
                mb: "-12px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  borderRadius: "10px",
                  mt: "5px",
                  zIndex: 1,
                }}
              />
              <Divider
                sx={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #BC813B 50%, rgba(0, 0, 0, 0) 50%)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: { xs: "1px 1px", lg: "8px 2px" },
                  borderRadius: "10px",
                  mt: "10px",
                  zIndex: 0,
                }}
              />
            </Box>
          </Box>
          <AnimationBox
            option={4}
            styles={{
              backgroundColor: "#161616",
              borderRadius: "10px",
              padding: "18px 32px",
              position: "relative",
            }}
          >
            <Box />
            <Box
              sx={{
                position: "absolute",
                top: "-130px",
                left: { xs: "-100px", sm: "-80px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
              }}
            />
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              May 2024
            </Typography>

            <List sx={{ maxWidth: "303px" }}>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Project Announcement & Team Formation
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Community Building
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Smart Contract Development & Audits
              </ListItem>
            </List>
          </AnimationBox>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <AnimationBox
              option={4}
              styles={{
                backgroundColor: "#161616",
                borderRadius: "10px",
                padding: "18px 32px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-130px",
                  left: { xs: "-100px", sm: "-80px" },
                  width: { xs: "300px", sm: "500px" },
                  height: { xs: "300px", sm: "500px" },
                  background:
                    "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
                }}
              />
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "20px", md: "26px" },
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  mr: "15px",
                }}
              >
                June - July 2024
              </Typography>

              <List sx={{ maxWidth: "303px" }}>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  Secure Partnerships & Regulatory Compliance
                </ListItem>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  Finalize Tokenomics & Marketing
                </ListItem>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  Smart Contract Development & Audits
                </ListItem>
              </List>
            </AnimationBox>
          </Box>
          <AnimationBox
            option={4}
            styles={{
              backgroundColor: "#161616",
              borderRadius: "10px",
              padding: "18px 32px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-130px",
                left: { xs: "-100px", sm: "-80px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
              }}
            />
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              Aug - Sep 2024
            </Typography>

            <List  sx={{ maxWidth: "303px" }}>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Testnet Launch & Community Engagement
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Secure Liquidity & Exchange Listings
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Smart Contract Development & Audits
              </ListItem>
            </List>
          </AnimationBox>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <AnimationBox
              option={4}
              styles={{
                backgroundColor: "#161616",
                borderRadius: "10px",
                padding: "18px 32px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "-130px",
                  left: { xs: "-100px", sm: "-80px" },
                  width: { xs: "300px", sm: "500px" },
                  height: { xs: "300px", sm: "500px" },
                  background:
                    "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: 700,
                    fontSize: { xs: "20px", sm: "20px", md: "26px" },
                    background: "linear-gradient(211deg, #FFE370, #BC813B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                    mr: "15px",
                  }}
                >
                  Oct - Nov 2024
                </Typography>
                <Typography
                  sx={{
                    display: "inline",
                    fontWeight: 700,
                    fontSize: { xs: "20px", sm: "20px", md: "13px" },
                    background: "linear-gradient(211deg, #BC813B, #FFE370)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textFillColor: "transparent",
                  }}
                >
                  (Target Launch)
                </Typography>
              </Box>

              <List sx={{ maxWidth: "303px" }}>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  Mainnet Launch & Token Sale
                </ListItem>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  Community Building
                </ListItem>
                <ListItem
                  sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
                >
                  List on DEXs & Develop Use Cases
                </ListItem>
              </List>
            </AnimationBox>
          </Box>
          <AnimationBox
            option={4}
            styles={{
              backgroundColor: "#161616",
              borderRadius: "10px",
              padding: "18px 32px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-130px",
                left: { xs: "-100px", sm: "-80px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
              }}
            />
            <Box>
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "20px", md: "26px" },
                  background: "linear-gradient(211deg, #FFE370, #BC813B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  mr: "15px",
                }}
              >
                December 2024
              </Typography>
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "20px", md: "13px" },
                  background: "linear-gradient(211deg, #BC813B, #FFE370)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                (Onward)
              </Typography>
            </Box>

            <List sx={{ maxWidth: "303px" }}>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Monitor Peg & Security
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Product Development & Community Growth
              </ListItem>
            </List>
          </AnimationBox>
        </Stack>
        <Stack
          sx={{
            flex: "1 1",
            alignItems: "center",
            justifyContent: "space-evenly",
            position: "relative",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: { xs: "7%", lg: "15%" },
              height: "80%",
              top: "10%",
              left: 0,
              display: { xs: "none", lg: "flex" },
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingInline: { xs: "0", lg: "2%" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                mb: "-12px",
              }}
            >
              <Divider
                sx={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #BC813B 50%, rgba(0, 0, 0, 0) 50%)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: { xs: "1px 1px", lg: "8px 2px" },
                  borderRadius: "10px",
                  mt: "10px",
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  borderRadius: "10px",
                  mt: "-6px",
                  zIndex: 1,
                  right: 0,
                }}
              />
            </Box>
            <Box />
            <Box
              sx={{
                position: "relative",
                mb: "-12px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "12px",
                  height: "12px",
                  background:
                    "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                  borderRadius: "10px",
                  mt: "5px",
                  zIndex: 1,
                  right: 0,
                }}
              />
              <Divider
                sx={{
                  width: "100%",
                  backgroundImage:
                    "linear-gradient(to right, #BC813B 50%, rgba(0, 0, 0, 0) 50%)",
                  backgroundRepeat: "repeat-x",
                  backgroundSize: { xs: "1px 1px", lg: "8px 2px" },
                  borderRadius: "10px",
                  mt: "10px",
                  zIndex: 0,
                }}
              />
            </Box>
          </Box>
          <AnimationBox
            option={4}
            styles={{
              backgroundColor: "#161616",
              borderRadius: "10px",
              padding: "18px 32px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-130px",
                left: { xs: "-100px", sm: "-80px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
              }}
            />
            <Typography
              sx={{
                display: "inline",
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "20px", md: "26px" },
                background:
                  "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
                mr: "15px",
              }}
            >
              June - July 2024
            </Typography>

            <List sx={{ maxWidth: "303px" }}>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Secure Partnerships & Regulatory Compliance
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Finalize Tokenomics & Marketing
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Smart Contract Development & Audits
              </ListItem>
            </List>
          </AnimationBox>
          <AnimationBox
            option={4}
            styles={{
              backgroundColor: "#161616",
              borderRadius: "10px",
              padding: "18px 32px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-130px",
                left: { xs: "-100px", sm: "-80px" },
                width: { xs: "300px", sm: "500px" },
                height: { xs: "300px", sm: "500px" },
                background:
                  "radial-gradient(closest-side, #f9e07b00 8%, #dfb66308, transparent)",
              }}
            />
            <Box>
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "20px", md: "26px" },
                  background: "linear-gradient(211deg, #FFE370, #BC813B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  mr: "15px",
                }}
              >
                Oct - Nov 2024
              </Typography>
              <Typography
                sx={{
                  display: "inline",
                  fontWeight: 700,
                  fontSize: { xs: "20px", sm: "20px", md: "13px" },
                  background: "linear-gradient(211deg, #BC813B, #FFE370)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                }}
              >
                (Target Launch)
              </Typography>
            </Box>

            <List sx={{ maxWidth: "303px" }}>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Mainnet Launch & Token Sale
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                Community Building
              </ListItem>
              <ListItem
                sx={{ color: "#fff", fontSize: "15px", fontWeight: "400" }}
              >
                List on DEXs & Develop Use Cases
              </ListItem>
            </List>
          </AnimationBox>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RoadMap;
