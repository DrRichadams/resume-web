import React, { useState } from "react"
import "../../../styles/work_exp.css"
import { v4 as uuidv4 } from "uuid"

const WorkExperience = () => { 
    const [ works, setWorks ] = useState([
        {
            id: uuidv4(), place: "Nedbank Namibia",
            story: " I am currently working as an intern at Nedbank Namibia. Dealing in various  IT deparments  like system admin,networking and robotics.",
            references: [ 
                { id: uuidv4(), name: "Ruth Hammerslaght", cell: "", email: "ruthHA@nedbank.com.na" },
                { id: uuidv4(), name: "JackyNekomba", cell: "", email: "jackyne@nedbank.com.na.com" },
            ]
        },
    ])
    return(
        <div className="work_experience">
            {
                works.map((item, index) => (
                    <div className="wexp_box">
                        <div className="wexp_top_img">
                            <img src={process.env.PUBLIC_URL + `/resources/work_imgs/work${index+1}.jpg`} alt="" />
                        </div>
                        <div className="wexp_details_box">
                            <h3 className="wexp_box_title">{item.place}</h3>
                            <p className="wexp_box_story">{item.story}</p>
                            <div className="wexp_box_references">
                                {
                                    item.references.map((sin, i) => (
                                        <div className="wexp_ref_box">
                                            <p>{sin.name}</p>
                                            <p>{sin.email}</p>
                                            <p>{sin.cell}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>   
                ))
            }
        </div>
    )
}

export default WorkExperience