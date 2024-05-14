import { Dialog,DialogTitle,DialogContent,DialogActions, Typography, Divider  } from "@mui/material"
import './dialog.css'
import MyButton from "./MyButton";
import { Box } from "@mui/material";
import { ContentPaste, Telegram } from "@mui/icons-material";
import MyTextField from "./MyTextField";
import { useRef } from "react";

export default (props:any)=>{
    const {open,onClose=()=>{},onNext=()=>{},onBack=()=>{}}=props;
    const refInput=useRef<HTMLInputElement|null>(null);
    return (
        <Dialog
        open={open}
        // onClose={onClose}
        fullWidth
        maxWidth={'xs'}

        >
            <DialogTitle>
                SecondTask
            </DialogTitle>
            <DialogContent>
                <Typography >
                  Click the join telegram button to navigate to our telegram group.
                  Copy the group link and manually join the group if the join button does not work
                </Typography>
                <Typography sx={{marginTop:5}} >
                  Ensure to complete the human verification process to be able to join the telegram chat.
                </Typography>
                <Typography sx={{marginTop:5}} >
                  Enter your unique telegram ID into the from below.
                  To get your telegram ID, Search and start solgold_bot via telegram.
                </Typography>
                <Box sx={{
                    display:"flex",
                    width:"100%",
                    marginLeft:"auto",
                    marginRight:"auto",
                    marginTop:5,
                    marginBottom:5,
                    alignItems:"center",
                    justifyContent:"space-around"
                }} >
                    <MyButton text={<><Telegram sx={{color:"#BC813B"}} />Follow</>}  />
                    <MyButton text={<><ContentPaste sx={{color:"#BC813B"}} />Copy</>}  />
                </Box>
                <Divider color="white" />
                <Typography sx={{marginTop:5}} align={'center'} >Enter your telegram ID.</Typography>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                }} >
                    <MyTextField style={{width:"60%"}} inputRef={refInput} placeholder={'Enter your 6-15 digit TID'} />
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
                <MyButton text={`Next`} onClick={()=>onNext(refInput.current?.value)} />
              </Box>
                
            </DialogActions>
        </Dialog>
    )
}