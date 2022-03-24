import React, { useState } from "react"
import "../../../styles/education.css"
import { v4 as uuidv4 } from "uuid"

const Education = () => {
    const [ selected, setSelected ] = useState(1)
    const [ eduData, setEduData ] = useState([
        {
            id: uuidv4(),
            school_name: "Amazing Kids",
            fromYear: "2001",
            toYear: "2008",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse vitae eum sit. Omnis eius corrupti dicta, dolores quis dignissimos et! Ab accusamus dolore reiciendis labore dolor molestias eum voluptatem, eligendi nulla dolorem et culpa eos atque fuga, repellat quos minus laborum quibusdam natus rem assumenda. Quam doloribus ad reiciendis.",
        },
        {
            id: uuidv4(),
            school_name: "Windhoek High",
            fromYear: "2009",
            toYear: "2014",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse vitae eum sit. Omnis eius corrupti dicta, dolores quis dignissimos et! Ab accusamus dolore reiciendis labore dolor molestias eum voluptatem, eligendi nulla dolorem et culpa eos atque fuga, repellat quos minus laborum quibusdam natus rem assumenda. Quam doloribus ad reiciendis.",
        },
        {
            id: uuidv4(),
            school_name: "Polytechnic of Namibia",
            fromYear: "2014",
            toYear: "2018",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse vitae eum sit. Omnis eius corrupti dicta, dolores quis dignissimos et! Ab accusamus dolore reiciendis labore dolor molestias eum voluptatem, eligendi nulla dolorem et culpa eos atque fuga, repellat quos minus laborum quibusdam natus rem assumenda. Quam doloribus ad reiciendis.",
        },
        {
            id: uuidv4(),
            school_name: "University of Namibia",
            fromYear: "2020",
            toYear: "2022",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus esse vitae eum sit. Omnis eius corrupti dicta, dolores quis dignissimos et! Ab accusamus dolore reiciendis labore dolor molestias eum voluptatem, eligendi nulla dolorem et culpa eos atque fuga, repellat quos minus laborum quibusdam natus rem assumenda. Quam doloribus ad reiciendis.",
        },
    ])
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
                            }}>
                            <h3 className="edu_school_name">{item.school_name}</h3>
                            <p className="edu_period">{`${item.fromYear} - ${item.toYear}`}</p>
                        </div>
                    ))
                }
            </div>
            <div className="right_info">
                <div className="r_info_img_box">
                    <img src={process.env.PUBLIC_URL + `/resources/schools_imgs/school${selected}.jpg`} alt="" />
                </div>
                <div className="r_info_details">
                    <div className="r_info_school_name">Windhoek High</div>
                    <p className="r_info_story">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fuga veniam voluptas suscipit minima voluptates quia, et velit nesciunt animi iure eveniet laboriosam nemo optio eligendi accusamus dignissimos omnis, provident assumenda dolorum? Doloremque cum deserunt molestias reprehenderit cupiditate, assumenda blanditiis dolore neque mollitia perspiciatis possimus ab laudantium non exercitationem placeat!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Education