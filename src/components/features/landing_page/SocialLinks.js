import React, { useState } from "react"
import "../../../styles/social_links.css"
import { v4 as uuidv4 } from "uuid"
import { FiPlus, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi"

const SocialLinks = () => {
    const [ links, setLinks ] = useState([
        {
            id: uuidv4(),
            social_name: "instagram", 
            username: "@georgewash",
            story: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores tempora error vero repellat sequi facilis! Pariatur modi repellendus accusantium quis, nobis vero! Blanditiis pariatur at quibusdam facilis praesentium laboriosam nisi debitis asperiores repellat laudantium! Ipsum dolores ratione vitae atque maiores necessitatibus soluta, doloribus placeat natus. Eveniet, mollitia. Delectus, expedita!",
        },
        {
            id: uuidv4(),
            social_name: "facebook",
            username: "@georgewash",
            story: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores tempora error vero repellat sequi facilis! Pariatur modi repellendus accusantium quis, nobis vero! Blanditiis pariatur at quibusdam facilis praesentium laboriosam nisi debitis asperiores repellat laudantium! Ipsum dolores ratione vitae atque maiores necessitatibus soluta, doloribus placeat natus. Eveniet, mollitia. Delectus, expedita!",
        },
        {
            id: uuidv4(),
            social_name: "twitter",
            username: "@georgewash",
            story: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores tempora error vero repellat sequi facilis! Pariatur modi repellendus accusantium quis, nobis vero! Blanditiis pariatur at quibusdam facilis praesentium laboriosam nisi debitis asperiores repellat laudantium! Ipsum dolores ratione vitae atque maiores necessitatibus soluta, doloribus placeat natus. Eveniet, mollitia. Delectus, expedita!",
        },
        {
            id: uuidv4(),
            social_name: "linkedIn",
            username: "@georgewash",
            story: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores tempora error vero repellat sequi facilis! Pariatur modi repellendus accusantium quis, nobis vero! Blanditiis pariatur at quibusdam facilis praesentium laboriosam nisi debitis asperiores repellat laudantium! Ipsum dolores ratione vitae atque maiores necessitatibus soluta, doloribus placeat natus. Eveniet, mollitia. Delectus, expedita!",
        },
    ])

    const [ current, setCurrent ] = useState(1)

    return (
        <div className="social_links_container">
            <div className="soc_left_box">
                {
                    links.map((item, index) => (
                        <div 
                            className="soc_link_box"
                            style={{
                                opacity: index + 1 === current ? 1 : 0.45
                            }}
                            onClick  = {() => setCurrent(index + 1)}>
                            <div className="soc_titles_box">
                                <p>{item.social_name}</p>
                                {/* <FiPlus /> */}
                                {/* <FiInstagram size={30} /> */}
                                {
                                    item.social_name === "instagram" 
                                    ? <FiInstagram size={30} color="#d11d4d" />
                                    : item.social_name === "facebook"  
                                    ? <FiFacebook size={30} color="#3b5998" />
                                    : item.social_name === "twitter"  
                                    ? <FiTwitter size={30} color="#3b5998" />
                                    : item.social_name === "linkedIn"  
                                    ? <FiLinkedin size={30} color="#3b5998" /> : ""
                                }
                            </div>
                            <p className="soc_username">{item.username}</p>
                        </div>
                    ))
                } 
            </div>
            <div className="soc_right_box">
                {
                    links.map((item, index) => (
                        <div 
                            className={index + 1 === current ? "soc_right_box_contents" : "soc_right_box_contents close_class"}>
                            <div className="socr_img">
                                <img src={process.env.PUBLIC_URL + `/resources/social/social${index + 1}.jpg`} alt="" />
                            </div>
                            <div className="socr_details_box">
                                <div className="socr_titles">
                                    <p>{item.social_name}</p>
                                    <FiInstagram size={30} className="socr_titles_icon" />
                                </div>
                                <div className="socr_story">{item.story}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SocialLinks