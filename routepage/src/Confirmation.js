import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import Button from "@mui/material/Button";


function Confirmation(props) {
    const onChangeValue=()=>{
        alert(JSON.stringify(props.form));
        
}
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">

                <Box
                    sx={{
                        bgcolor: "lightgreen",
                        display: "flex",
                        padding: 5
                    }}
                >
                    <pre>{JSON.stringify(props.form, null, 2)}</pre>
                    <br />
                    
                    </Box>
                    <Box sx={{
                        marginY:2,
                        display:"flex",
                        justifyContent:"flex-end",
                        
                        
                    
        
                    }}>
                        <Button variant="contained" color="success"onClick={onChangeValue}> 
                            Confirmation
                        </Button>
                    </Box>
                
            </Container>
        </>

    );
}
export default Confirmation;