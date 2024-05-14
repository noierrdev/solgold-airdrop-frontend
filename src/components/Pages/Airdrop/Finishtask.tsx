import { Dialog,DialogTitle,DialogContent,DialogActions, Typography, Divider  } from "@mui/material"
import './dialog.css'
import MyButton from "./MyButton";
import { Box } from "@mui/material";
import { ContentPaste, Telegram } from "@mui/icons-material";
import MyTextField from "./MyTextField";
import { useEffect, useRef, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
export default (props:any)=>{
    const {open,onClose=()=>{},onNext=()=>{},onBack=()=>{}}=props;
    const [Waiting,setWaiting]=useState(false);
    const refInput=useRef<HTMLInputElement|null>(null);
    const toNext=()=>{
        onNext(refInput.current?.value);
        setWaiting(true);
        
    }
    useEffect(()=>{
        if(!open){
            setWaiting(false)
        }
    },[open])
    return (
        <Dialog
        open={open}
        // onClose={onClose}
        fullWidth
        maxWidth={'xs'}

        >
            <DialogTitle>
                Claim Airdrop
            </DialogTitle>
            {Waiting?(<DialogContent>
                <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center" }}>
                    <CircularProgress />
                </Box>
            </DialogContent>):(
                <>
                <DialogContent>
                    <Typography >
                      You finished all tasks.
                      Now you can claim airdrop token and receive right now.
                    </Typography>
                    <Divider color="white" />
                    <Typography sx={{marginTop:5}} align={'center'} >Enter your wallet address.</Typography>
                    <Box sx={{
                        display:"flex",
                        justifyContent:"center",
                    }} >
                        <MyTextField style={{width:"60%"}} inputRef={refInput} placeholder={'Wallet address'} />
                    </Box>
                </DialogContent>
                <DialogActions>
                  <Box sx={{
                        width:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around"
                    }} >
                    {/* <MyButton text="Cancel" onClick={onClose} />
                    <MyButton text={`Back`} onClick={onBack} /> */}
                    <MyButton text={`Next`} onClick={toNext} />
                  </Box>
                    
                </DialogActions>
                </>
            )}
            
        </Dialog>
    )
}