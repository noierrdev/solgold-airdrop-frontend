import { TextField } from "@mui/material"
import './textfield.css'
import { useState } from "react";
export default function(props:any){
    const {style={},placeholder="",inputRef={}}=props;
    const [Value,setValue]=useState("")
    return (
        <TextField
        variant="outlined"
        sx={{...style,
            border: "1px solid #BC813B",
            borderRadius: "5px",
            color:"#BC813B"
        }}
        placeholder={placeholder}
        inputProps={{
            style:{color:"#FFE370"}
        }}
        inputRef={inputRef}
        onChange={e=>setValue(e.target.value)}
        defaultValue={Value}
        
        />
    )
}