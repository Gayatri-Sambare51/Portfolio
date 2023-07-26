import React from 'react'
import img from '../images/contactt.jpg'
import { Paper, Button } from '@mui/material'
import '../styles/project.css'
function Project(props) {
    return (
        <>
            <Paper className=" pro  m-8 inline-block p-2" sx={{
                borderLeft: 4,
                borderTop: 4,
                cursor: "pointer",
                borderColor: "gray",
            }} style={{ margin: "2%", cursor: 'pointer', backgroundColor: "rgb(248 250 252)" }}>
                <div >
                    <img style={{ width: '100%', height: 'auto' }} src={props.img} alt="efes" />
                </div>

                <div>
                    <h4 className="text-10px font-bold mt-4 ">{props.title}</h4>
                    <p className="text-base textAlign-justify ">{props.name}</p>
                    <h5 className="flex justify-between">
                        <Button className="btn" onClick={() => window.open(props.file, '_blank')}>Project Code</Button>
                    </h5>
                </div>
            </Paper>
        </>
    )
}
export default Project