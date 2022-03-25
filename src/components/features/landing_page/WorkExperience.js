import React, { useState } from "react"
import "../../../styles/work_exp.css"
import { v4 as uuidv4 } from "uuid"

const WorkExperience = () => {
    const [ works, setWorks ] = useState([
        {
            id: uuidv4(), place: "Abels Restaurant",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem labore incidunt, sunt ad officia, illo magni est, voluptatum optio nulla minus at. Inventore reprehenderit culpa facere neque quisquam ea animi, impedit voluptatibus voluptate ipsum beatae quis porro libero placeat, excepturi odit minima ab consequatur, blanditiis repellat? Blanditiis, cupiditate consectetur!",
            references: [ 
                { id: uuidv4(), name: "Richards", cell: "+264 813 694 757", email: "proxyserver7798@gmail.com" },
                { id: uuidv4(), name: "Johhanes", cell: "+264 813 694 757", email: "JackMa@gmail.com" },
            ]
        },
        { 
            id: uuidv4(), place: "Old Mutual",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem labore incidunt, sunt ad officia, illo magni est, voluptatum optio nulla minus at. Inventore reprehenderit culpa facere neque quisquam ea animi, impedit voluptatibus voluptate ipsum beatae quis porro libero placeat, excepturi odit minima ab consequatur, blanditiis repellat? Blanditiis, cupiditate consectetur!",
            references: [ 
                { id: uuidv4(), name: "Richards", cell: "+264 813 694 757", email: "proxyserver7798@gmail.com" },
                { id: uuidv4(), name: "Johhanes", cell: "+264 813 694 757", email: "JackMa@gmail.com" },
            ]
        },
        {
            id: uuidv4(), place: "University of Namibia",
            story: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit rem labore incidunt, sunt ad officia, illo magni est, voluptatum optio nulla minus at. Inventore reprehenderit culpa facere neque quisquam ea animi, impedit voluptatibus voluptate ipsum beatae quis porro libero placeat, excepturi odit minima ab consequatur, blanditiis repellat? Blanditiis, cupiditate consectetur!",
            references: [ 
                { id: uuidv4(), name: "Richards", cell: "+264 813 694 757", email: "proxyserver7798@gmail.com" },
                { id: uuidv4(), name: "Johhanes", cell: "+264 813 694 757", email: "JackMa@gmail.com" },
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