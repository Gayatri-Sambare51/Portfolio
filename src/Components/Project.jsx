import React from 'react'
import { Paper, Button } from '@mui/material'
import '../styles/project.css'
function Project({ data }) {
    return (
        data.map((item) => {
            return (
                <>
                    <Paper className=" pro  m-8 inline-block p-2" sx={{
                        borderLeft: 4,
                        borderTop: 4,
                        cursor: "pointer",
                        borderColor: "gray",
                    }} style={{ margin: "2%", cursor: 'pointer', backgroundColor: "rgb(248 250 252)", marginBottom: "5%" }}>
                        <div >
                            <img style={{ width: '100%', height: 'auto' }} src={item.img} alt="efes" />
                        </div>

                        <div>
                            <h4 className="text-10px font-bold mt-4 ">{item.title}</h4>
                            <p className="text-base textAlign-justify ">{item.name}</p>
                            <h5 className="flex justify-between">
                                <Button className="btn" onClick={() => window.open(item.file, '_blank')}>Project Code</Button>
                            </h5>
                        </div>
                    </Paper>
                </>
            )
        }
        ))
}
export default Project