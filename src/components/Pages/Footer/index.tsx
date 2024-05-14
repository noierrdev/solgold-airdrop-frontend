import { Stack, Box, Typography, Link } from "@mui/material";
import TwitterImg from "../../../assets/imgs/twitter.png";
import MailImg from "../../../assets/imgs/mail.png";
import TelegramImg from "../../../assets/imgs/telegram.png";
import AnimationBox from "../../Animations";
const Footer: React.FC = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#181716",
        borderTop: "1px solid #fff",
        pt: "26px",
        pb: " 57px",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "600",
          color: "#fff",
          textAlign: "center",
        }}
      >
        SolGold © 2024 | All Rights Reserved
      </Typography>
      <Box sx={{ display: "flex", mt: "27px", gap: "32px" }}>
        <AnimationBox option={4} styles={{}}>
          <Link underline="none" href="https://twitter.com/solgoldorg">
            <img src={TwitterImg} alt="" />
          </Link>
        </AnimationBox>
        <AnimationBox option={4} styles={{}}>
          <Link underline="none" href="mailto:contact@solgold.org">
            <img src={MailImg} alt="" />
          </Link>
        </AnimationBox>
        <AnimationBox option={4} styles={{}}>
          <Link underline="none" href="https://t.me/solgoldorg">
            <img src={TelegramImg} alt="" />
          </Link>
        </AnimationBox>
      </Box>
    </Stack>
  );
};

export default Footer;
