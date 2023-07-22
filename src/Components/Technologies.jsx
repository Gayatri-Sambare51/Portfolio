import React from 'react'
import { Box, Paper, Typography } from "@mui/material"
export default function Technologies(props) {
    return (
        <>
            <div className='paper'>
                <Paper sx={{
                    width: {
                        xs: "90%",
                        md: "70%",
                        lg: "70%",
                        xl: "70%"
                    },
                    gap: {
                        xs: 0.2,
                        md: 4,
                        lg: 6,
                        xl: 6
                    },
                    mx: 1,
                    px: 0.4,
                    py: 2,
                    borderRadius: 2,
                    // direction: "row",
                    // display: "flex",
                    //gap: 4,
                    my: 1,
                    mb: 3,
                    display: 'flex',
                    borderLeft: 6,
                    cursor: "pointer",
                    borderColor: "green",
                    backgroundColor: "rgb(248 250 252)"
                }}
                    elevation={2}
                >
                    <img src={props.img} width="30" height="30"></img>
                    <Box>
                        <Typography variant='h6' style={{
                            textAlign: "center",
                            color: "black",

                            fontSize: {
                                xs: "50px",
                                md: "10px",
                            },
                        }}>
                            {props.title}</Typography>
                    </Box>
                </Paper>
            </div >
        </>
    )
}
