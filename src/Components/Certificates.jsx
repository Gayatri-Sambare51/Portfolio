import React from 'react'
import img from '../contact.jpg'
import { Paper, Button } from '@mui/material'
import '../styles/project.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Certificates(props) {
    return (
        <>
            <Paper className=" pro m-8 inline-block p-2"
                sx={{
                    border: 1,
                    borderColor: "gray",
                }}
                style={{ margin: "2%", cursor: 'pointer', backgroundColor: "rgb(248 250 252)" }}>
                <div >
                    <img style={{ width: '100%', height: 'auto' }} src={props.img} alt="efes" />
                </div>
                <div>
                    <h4 className="text-10px font-bold mt-4 ">{props.title}</h4>
                    <p className="text-base">{props.name}</p>
                    <h6 className="flex" >
                        <p>{props.date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ArrowForwardIosIcon
                            onClick={() => window.open(props.file, '_blank')} /></p>
                        <p float="right"></p>
                    </h6>

                </div>
            </Paper>
        </>
    )
}

export default Certificates;