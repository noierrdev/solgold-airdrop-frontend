import { Suspense, lazy } from "react";
import { Box, Skeleton } from "@mui/material";

const Home = lazy(() => import("../../components/Pages/Home"));
const Header = lazy(() => import("../../components/Pages/Header"));
const Benifit = lazy(() => import("../../components/Pages/Benifit"));
const About = lazy(() => import("../../components/Pages/About"));
const Market = lazy(() => import("../../components/Pages/Market"));
const RoadMap = lazy(() => import("../../components/Pages/Roadmap"));
const Tokenomics = lazy(() => import("../../components/Pages/Tokenomics"));
const Footer = lazy(() => import("../../components/Pages/Footer"));

const Main = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <Box>
        <Header />
        <Home />
        <About />
        <Benifit />
        <Market />
        <RoadMap />
        <Tokenomics />
        <Footer />
      </Box>
    </Suspense>
  );
};

export default Main;
