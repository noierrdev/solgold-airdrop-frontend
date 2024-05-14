import { Box, Skeleton } from "@mui/material";
import { FC, Suspense } from "react";
import Header from "../../components/Pages/Airdrop/Header";
import Main from "../../components/Pages/Airdrop/Main";

const AirDropPage:FC=()=>{
    return (
        <Suspense fallback={<Skeleton/>} >
            <Box>
                <Header/>
                <Main />
            </Box>
        </Suspense>
    )
}
export default AirDropPage