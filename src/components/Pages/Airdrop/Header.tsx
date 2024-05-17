import {
    Box,
    Typography,
    // Menu,
    // MenuItem,
  } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import { useEffect,  useState } from "react";
// import TwitterImg from "../../../assets/imgs/twitter.png";
// import MailImg from "../../../assets/imgs/mail.png";
// import TelegramImg from "../../../assets/imgs/telegram.png";
// import AnimationBox from "../../Animations";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"; 
import './header.css'
import {useAnchorProvider} from '../../../hooks/useAnchorProvider'
import  { getAssociatedTokenAddressSync, getOrCreateAssociatedTokenAccount,TOKEN_PROGRAM_ID,ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { MINT } from "../../../Config";
import { PublicKey } from "@solana/web3.js";
import solgold_icon from '../../../assets/imgs/solgold_sm.png'
  const Header: React.FC = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const [activeMenu, setActiveMenu] = useState<string>("Home");
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    // const [menuCollapse, setMenuCollapse] = useState<boolean>(false);
    const [AccountInfo,setAccountInfo]=useState<any>(null);
    const [Provider,setProvider]=useState<any>(null);
  
    
    const handleMenuSelect = (location: string) => {
      // setActiveMenu(location);
      if (location === "Market Trend") window.location.replace(`/#Market`);
      window.location.replace(`/#${location}`);
    };
    const provider=useAnchorProvider();
    const mint=new PublicKey(MINT);
    
    useEffect(()=>{
      if(AccountInfo){
        console.log("accountinfo",AccountInfo)
      }
    },[AccountInfo])
    const getTokenInfo=async ()=>{
      const tokenAccount= getAssociatedTokenAddressSync(mint,provider.wallet.publicKey,true,TOKEN_PROGRAM_ID,ASSOCIATED_TOKEN_PROGRAM_ID);
      const tokenAccountInfo=await provider.connection.getParsedAccountInfo(tokenAccount);
      console.log('tokenaccount',tokenAccount)
      setAccountInfo(tokenAccountInfo)
    }
    useEffect(()=>{
      if(provider.wallet.publicKey){
        getTokenInfo()
      }else{
        setAccountInfo(null)
      }
    },[provider.wallet.publicKey])
    // useEffect(() => {
    //   const handleResize = () => {
    //     setScreenWidth(window.innerWidth);
    //   };
  
    //   window.addEventListener("resize", handleResize);
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
  
    // const handleCollapseMenu = () => {
    //   setMenuCollapse(!menuCollapse);
    //   setIsOpen(!isOpen);
    // };
  
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
              flexGrow:1
            }}
            onClick={() => handleMenuSelect("Home")}
          >
            SolGOld
          </Typography>
          {/* {screenWidth < 700 ? (
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
                <AnimationBox option={4} styles={{}}>
                    <a  href="https://twitter.com/solgoldorg">
                        <img src={TwitterImg} alt="" />
                    </a>
                    </AnimationBox>
                    <AnimationBox option={4} styles={{}}>
                    <a  href="mailto:contact@solgold.org">
                        <img src={MailImg} alt="" />
                    </a>
                    </AnimationBox>
                    <AnimationBox option={4} styles={{}}>
                    <a  href="https://t.me/solgoldorg">
                        <img src={TelegramImg} alt="" />
                    </a>
                </AnimationBox>
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
                <AnimationBox option={4} styles={{}}>
                  <a  href="https://twitter.com/solgoldorg">
                      <img src={TwitterImg} alt="" />
                  </a>
                </AnimationBox>
                <AnimationBox option={4} styles={{}}>
                  <a  href="mailto:contact@solgold.org">
                      <img src={MailImg} alt="" />
                  </a>
                </AnimationBox>
                <AnimationBox option={4} styles={{}}>
                  <a  href="https://t.me/solgoldorg">
                      <img src={TelegramImg} alt="" />
                  </a>
                </AnimationBox>
                
            </Box>
          )} */}
            <Box sx={{paddingX:1,display:"flex",alignItems:"center"}} >
            {/* <Button 
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
                textAlign: "center",
                padding: "12px 25px",
                width: "fit-content",
                cursor: "pointer",
                '&:hover':{
                    background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                    WebkitTextFillColor: "black",
                },
                '&:active':{
                    background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }
                }} 
                >
                Connect Wallet
            </Button> */}
            {AccountInfo&&(
              <>
              <img src={solgold_icon} style={{width:"2vw",marginRight:10}} />
              <h1 style={{color:"#FFE370",marginRight:10}} >{AccountInfo.value.data.parsed.info.tokenAmount.uiAmount}</h1>
              </>
            )}
            
            <WalletMultiButton className="walletButton"  style={{
              zIndex: 1,
              fontWeight: "bold",
              fontSize: "16px",
              background: "linear-gradient(211deg, #BC813B, #FFE370, #BC813B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              position: "relative",
              border: "1px solid #BC813B",
              borderRadius: "5px",
              display: "flex",
              alignItems:"center",
              textAlign: "center",
              padding: "12px 25px",
              width: "fit-content",
              cursor: "pointer"}} />
            </Box>
        </Box>
      </Box>
    );
  };
  
  export default Header;
  