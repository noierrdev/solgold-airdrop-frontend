import { Check, ContentCopy } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import MyButton from './MyButton'
import {Link} from 'react-router-dom'
import { useSnackbar } from 'notistack'
export default function(props:any){
    const {open,onOk=()=>{},referral}=props;
    const snackbar=useSnackbar()
    const copyUrl=()=>{
        snackbar.enqueueSnackbar("Copyed referral link. Please share link to invite friends.",{variant:"success"})
        window.navigator.clipboard.writeText(window.location.origin+"/referral/"+referral);
    }
    return (
        <Dialog
        open={open}
        fullWidth
        maxWidth={'xs'}>
            <DialogTitle>
                Invite your friend!
            </DialogTitle>
            <DialogContent>
                <MyButton style={{width:"100%"}} onClick={(e:any)=>copyUrl()} fullWidth  text={<><ContentCopy sx={{color:"#BC813B"}} />Copy</>} />
            </DialogContent>
            <DialogActions>
                <Box sx={{
                    width:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-around"
                }} >
                <MyButton fullWidth  text={<><Check sx={{color:"#BC813B"}} />Ok</>} onClick={()=>onOk()} />
                </Box>
            </DialogActions>
        </Dialog>
    )
}