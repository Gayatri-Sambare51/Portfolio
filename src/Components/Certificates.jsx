import React from 'react'
import { Paper } from '@mui/material'
import '../styles/project.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Certificates({ data }) {
    return (
        data.map((item) => {
            return (
                <>
                    <Paper className=" pro  inline-block p-2"
                        sx={{
                            border: 1,
                            borderColor: "gray",
                        }}
                        style={{ margin: "2%", cursor: 'pointer', backgroundColor: "rgb(248 250 252)" }}>
                        <div >
                            <img style={{ width: '100%', height: 'auto' }} src={item.img} alt="efes" />
                        </div>
                        <div>
                            <h4 className="text-10px font-bold mt-4 ">{item.title}</h4>
                            <p className="text-base">{item.name}</p>
                            <h6 className="flex" >
                                <p>{item.date}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<ArrowForwardIosIcon
                                    onClick={() => window.open(item.file, '_blank')} /></p>
                                <p float="right"></p>
                            </h6>
                        </div>
                    </Paper>
                </>
            )
        })
    )
}
export default Certificates;