import React, { useState } from "react"
import "../../../styles/education.css"
import { v4 as uuidv4 } from "uuid"

const Education = () => {
    const [ selected, setSelected ] = useState(1)
    const [ eduData, setEduData ] = useState([
        {
            id: uuidv4(),
            school_name: " Namibia University of Science  and Technology ",
            fromYear: "2020",
            toYear: "2022",
            details: ` Namibia University of Science and Technology is a Namibian award winning university.I have completed my 3 year course here n Software dvelopment.The enviroment is very conducive for learning and they have the best teaching stuff from all over the world.
            'A great university that not only gives you knowledge but they also put effort into fully preparing their students for the professional world.`,
        },
        {
            id: uuidv4(),
            school_name: "Rukonga Vision School",
            fromYear: "2015",
            toYear: "2019",
            details: `Rukonga is a state owned boading school in Divundu,Kavango east region.
            It's one of the highest ranked academic schools in Namibia with excellent academics,leadership,sports and culture.
            It also has highly trained stuff.I had a great experience at the school during my years from 2015 to 2019. 
            The school played an important rule in grooming me into who i am a today ,a disciplined ,hardworking and resilient person.`,
        },
        { 
            id: uuidv4(),
            school_name: "Nakambuda Primary school",
            fromYear: "2008",
            toYear: "2014",
            details: `
                
            `,
        },
        
    ])

    const [mobileSchools] = useState(["Nust", "Rukonga", "Nakamba"])
    
    return(
        <div className="education_container">
            <div className="left_controls">
                {
                    eduData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="edu_control_box"
                            style={{
                                borderColor: index + 1 === selected ? "#01050f": "transparent",
                                opacity: index + 1 === selected ? 1 : 0.45
                            }}
                            onClick={() => setSelected(index + 1)}>
                            <h3 className="edu_school_name">{item.school_name}</h3>
                            <p className="edu_period">{`${item.fromYear} - ${item.toYear}`}</p>
                        </div>
                    ))
                }
            </div>
            <div className="mobile_schools_nav">
                {
                    mobileSchools.map((item, index) => (
                        <div 
                            key={item} 
                            className="mobile_schools_box"
                            style={{opacity: index + 1 === selected ? 1:0.45}}
                            onClick={() => setSelected(index + 1)}>
                            {item}
                        </div>
                    ))
                }
            </div>
            {
                eduData.map((item, index) => (
                    <div className="right_info" style={{display: index + 1 === selected ? "block":"none"}}>
                        <div className="r_info_img_box">
                            <img src={process.env.PUBLIC_URL + `/resources/schools_imgs/school${selected}.jpg`} alt="" />
                        </div>
                        <div className="r_info_details">
                            <div className="r_info_school_name">{item.school_name}</div>
                            <p className="r_info_story">{item.details}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Education