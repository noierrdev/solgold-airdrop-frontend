import { Button } from "@mui/material";

export default function(props:any){
    const {text="Button",onClick=()=>{},style={}}=props;
    return (
        <Button 
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
            display: "flex",
            alignItems:"center",
            marginTop: "26px",
            textAlign: "center",
            padding: "12px 25px",
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
            },
            ...style,
            }} 
            onClick={onClick}
            >
            {text}
        </Button>
    )
}