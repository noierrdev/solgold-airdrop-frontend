import { useEffect, useState } from "react";
import { Box, Stack, Typography, Skeleton } from "@mui/material";
import AnimationBox from "../../Animations";

import solgold from "../../../assets/imgs/solgold.png";
import gift_box from '../../../assets/imgs/Group_2599.png'
import FirstTask from "./FirstTask";
import SecondTask from "./SecondTask";
import MyButton from "./MyButton";
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import {AnchorProvider, Wallet} from '@coral-xyz/anchor'
import Finishtask from "./Finishtask";
import axios from 'axios'
import {BACKEND_URL} from '../../../Config'
import { useSnackbar } from "notistack";
import ReferralModal from "./ReferralModal";
import {useParams,useLocation} from 'react-router-dom'
import querystring from 'querystring'
const Main= (props:any) => {
  const {onSucceed=()=>{}}=props;
  const {referral}=useParams();
  const [loading, setLoading] = useState(true);
    const [FirstTaskOpen,setFirstTaskOpen]=useState(false);
    const [SecondTaskOpen,setSecondTaskOpen]=useState(false);
    const [FirstTaskValue,setFirstTaskValue]=useState("");
    const [SecondTaskValue,setSecondTaskValue]=useState("");
    const [FinishTaskOpen, setFinishTaskOpen]=useState(false);
    const [ReferralOpen,setReferralOpen]=useState(false);
    const [WalletAddress,setWalletAddress]=useState("");
    const [Referral,setReferral]=useState<string|null>(null);

    const [Provider,setProvider]=useState<AnchorProvider|null>(null);
    const snackbar=useSnackbar();

    const claim=(e:any)=>{
      setWalletAddress(e);
      console.log(FirstTaskValue,SecondTaskValue);
      const solanaAddressRegex = /^[1-9A-HJ-NP-Za-km-z]{44}$/;
      console.log(solanaAddressRegex.test(e));
      return axios.post(`${BACKEND_URL}/links`,{
        tweet:FirstTaskValue,
        telegram:SecondTaskValue,
        referral:referral,
        wallet:e
      })
      .then(response=>{
        console.log(response)
        if(response.data.status=="success")
          {
            snackbar.enqueueSnackbar("You received airdropped tokens into your wallet.",{variant:"success"})
            setFinishTaskOpen(false);
            setReferral(response.data.referral)
            setReferralOpen(true)

          }else{
            snackbar.enqueueSnackbar(response.data.error,{variant:"error"})
            setFinishTaskOpen(false)
            setReferral(response.data.referral)
            setReferralOpen(true)
            
          }
      })
    }
    const nextTask=(e:any)=>{
        setFirstTaskOpen(false);
        setFirstTaskValue(e);
        setSecondTaskOpen(true)
    }
    const backTask=()=>{
        setFirstTaskOpen(true);
        setSecondTaskOpen(false)
    }
    const finishTask=(e:any)=>{
      setSecondTaskValue(e);
      setSecondTaskOpen(false);
      setFinishTaskOpen(true)
    }
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
  const Success=()=>{
    setReferralOpen(false)
  }

  if (loading) {
    return <Skeleton animation="wave" />;
  }

  return (
    <AnimationBox option={1} styles={{}}>
      <Box
        id="Home"
        sx={{
          backgroundColor: "#000000",
          p: {
            xs: "60px 25px 87px 25px",
            sm: "60px 69px 87px 69px",
          },
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "column-reverse",
            md: "row",
          },
          minHeight:"90vh",
          alignItems:"center",
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
              Unlock Your share of Prosperty with <br/>Sol-Gold
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
              Air-Drop
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "17px",
                color: "#fff",
                mt: "26px",
              }}
            >
              Sol-Gold offers you the stability of gold and the agility of blockchain technology, ensuring that your investments
            </Typography>
          </Box>
          {/* <Typography
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
              '&:hover':{
                background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitTextFillColor: "gray",
              },
              '&:active':{
                background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }
            }}
            onClick={()=>setFirstTaskOpen(true)}
          >
            Airdrop Time here
          </Typography> */}
          <MyButton onClick={()=>setFirstTaskOpen(true)} style={{padding:"24px 50px !important",borderRadius:"10px"}} text="Airdrop Time here" />
          <Typography sx={{
            marginTop:"10vh",
            fontSize:"2em"
          }} >
            www.solgold.org
          </Typography>
        </Stack>
        <Stack
          sx={{ flex: "1 1", justifyContent: "start", alignItems: "center" }}
        >
          <img
            src={gift_box}
            alt=""
            style={{ width: "140%", maxWidth: "800px" }}
          />
        </Stack>
      </Box>
      <FirstTask open={FirstTaskOpen}  onClose={()=>setFirstTaskOpen(false)}  onNext={(e:any)=>{nextTask(e)}} />
      <SecondTask open={SecondTaskOpen} onClose={()=>setSecondTaskOpen(false)} onBack={backTask} onNext={(e:any)=>{finishTask(e)}} />
      <Finishtask open={FinishTaskOpen} onClose={()=>setFinishTaskOpen(false)}  onNext={(e:any)=>claim(e)} />
      <ReferralModal open={ReferralOpen} referral={Referral} onOk={()=>{Success()}} />
    </AnimationBox>
  );
};

export default Main;
