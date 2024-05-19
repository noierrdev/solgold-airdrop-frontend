import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Recaptcha from 'react-google-recaptcha'
import axios from 'axios'
import { BACKEND_URL } from '../../../Config';
import MyButton from './MyButton';
import { Check } from '@mui/icons-material';
export default function(props:any){
    const {open,onClose=()=>{},onOk=()=>{}}=props;
    const [SiteKey,setSiteKey]=useState<any>(null);
    const [SecretKey,setSecretKey]=useState<any>(null);
    const refRecaptcha=useRef<any>(null);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/links/captcha`)
        .then(response=>{
            if(response.data.status="success"){
                console.log(response.data.data.site_key)
                setSiteKey(response.data.data.site_key);
                setSecretKey(response.data.data.secret_key);
            }
        })
    },[])
    const handleChange=(e:any)=>{
        console.log(e)
        if(e){
            axios.post(`${BACKEND_URL}/links/captcha`,{
                captcha:e
            })
            .then(response=>{
                if(response.data.success){
                    onOk();
                }
            })
        }
    }
    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                Are you a human?
            </DialogTitle>
            <DialogContent>
                {SiteKey&&<Recaptcha ref={refRecaptcha} onChange={handleChange} sitekey={SiteKey} />}
            </DialogContent>
            <DialogActions>
                {/* <Box sx={{
                    width:"100%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-around"
                }} >
                <MyButton fullWidth  text={<><Check sx={{color:"#BC813B"}} />Next</>} onClick={()=>{}} />
                </Box> */}
            </DialogActions>
        </Dialog>
    )
}