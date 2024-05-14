import { Dialog,DialogTitle,DialogContent,DialogActions, Typography, Box } from "@mui/material"
import './dialog.css'
import MyButton from "./MyButton";
import { ContentPaste, Twitter } from "@mui/icons-material";
import MyTextField from "./MyTextField";

export default (props:any)=>{
    const {open,onClose=()=>{},onNext=()=>{}}=props;
    return (
        <Dialog
        open={open}
        // onClose={onClose}
        fullWidth
        maxWidth={'xs'}
        scroll="body"

        >
            <DialogTitle>
                First task
            </DialogTitle>
            <DialogContent  >
                <Typography >
                    Click the tweet button and follow our twitter page. or copy the twitter url and follow manually.
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
                    <MyButton text={<><Twitter sx={{color:"#BC813B"}} />Follow</>}  />
                    <MyButton text={<><ContentPaste sx={{color:"#BC813B"}} />Copy</>}  />
                </Box>
                <Typography>
                Compose a tweet inviting your friends to join our airdrop or presale.
                Include our website URL solgold.org and tag three friends in the tweet.
                </Typography>
                <Typography sx={{marginTop:5}}>
                    For your projection, you must add this custom hashtag: #1234567890 to the tweet.
                </Typography>
                <Typography sx={{marginTop:5}} >
                    You can click the copy button an already-composed tweet that contains everything, and simply add the @friends tag.
                    Submit the link to the tweet after publishing.

                </Typography>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",

                }} >
                    <MyButton text={<><ContentPaste sx={{color:"#BC813B"}} />Copy Custom Tweet</>}  />
                </Box>
                <Typography sx={{marginTop:5}} align={'center'} >Enter the link to your retweet</Typography>
                <Box sx={{
                    display:"flex",
                    justifyContent:"center",
                }} >
                    <MyTextField style={{width:"60%"}} />
                </Box>
                
                
            </DialogContent>
            <DialogActions>
                <Box sx={{
                    width:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-around"
                }} >
                    <MyButton text="Cancel" onClick={onClose} />
                    <MyButton text="Next" onClick={onNext} />
                </Box>
                
                
            </DialogActions>
        </Dialog>
    )
}