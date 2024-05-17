import { Check } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import MyButton from './MyButton'
import {Link} from 'react-router-dom'
export default function(props:any){
    const {open,onOk=()=>{},referral}=props;
    return (
        <Dialog
        open={open}
        fullWidth
        maxWidth={'xs'}>
            <DialogTitle>
                Invite your friend!
            </DialogTitle>
            <DialogContent>
                <Link to={`/refferral/${referral&&referral}`}>{referral&&referral}</Link>
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