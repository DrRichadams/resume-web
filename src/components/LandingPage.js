import React, { useState } from "react"
import "../styles/landing_page.css"
import { v4 as uuidv4 } from "uuid"
import { FiChevronLeft, FiChevronRight, FiPauseCircle } from "react-icons/fi"
import Education from "./features/landing_page/Education"
import AboutMe from "./features/landing_page/AboutMe"
import WorkExperience from "./features/landing_page/WorkExperience"
import SocialLinks from "./features/landing_page/SocialLinks"

const LandingPage = () => {
    const [ current, setCurrent ] = useState(1)
    const [ bannerData, setBannerData ] = useState([
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: `I am an innovative,commited and ambitious young lady interested in meeting new people and  places.
            I am deeply passionate about technology and enviromental welfare. I posses great leadership skills,
            hence a team player and can work well uder pressure.
            My ultimate goal in life is to be part of a team that brings about change and development to this country in terms of technology.`,
        },
    ])

    const forwardMove = () => {
        if(bannerData.length  === current) return
        let tempVal = current + 1
        setCurrent(tempVal)
    }
    const reverseMove = () => {
        if(current === 1) return
        let tempVal = current - 1
        setCurrent(tempVal)
    }
    const dotMove = (i) => {
        let tempVal = i + 1
        setCurrent(tempVal)
    }

    const mTime = (n) => {
        let yTime = setInterval(() => {
            console.log("interval" + Math.round(Math.random()))
        }, 1000);

        yTime.clearInterval()
    }

    return (
        <>
            <div className="landind_page_container">
                <div className="banner_left">
                    <h3 className="banner_name">Maria T Matheus</h3>
                    <h4 className="banner_about_title">About me | Software developer</h4>
                    {
                        bannerData.map((item, index) => (
                            <p 
                                className="banner_story" 
                                key={item.id}
                                style={{ display: index + 1 === current ? "block":"none" }}>
                                { item.story }
                            </p>
                        ))
                    }
                    {/* <div className="banner_controls">
                        <FiChevronLeft 
                            size={35} 
                            className="banner_arrows"
                            onClick={() => reverseMove()} />
                        <FiPauseCircle size={35}  
                                className="banner_pause banner_arrows"
                                onClick={() => mTime(1)}/>
                                {
                                    bannerData.map((item, index) => (
                                        <div 
                                            className="banner_dot"
                                            style={{ backgroundColor: index+ 1 === current ? "#fff":"transparent" }}
                                            onClick={() => dotMove(index)}></div>
                                    ))
                                }
                        <FiChevronRight 
                            size={35} 
                            className="banner_arrows"
                            onClick={() => forwardMove()} />
                    </div> */}
                </div>
                <div className="banner_right"> 
                    <img 
                    src={process.env.PUBLIC_URL + "resources/profile1.jpg"} 
                    alt="" />
                </div> 
            </div>
            <div className="education_title">About Me | Software Developer</div>
            <AboutMe />
            <div className="education_title">Education</div>
            <Education />
            <div className="education_title">Work Experience</div>
            <WorkExperience />
            <div className="education_title">Social Media Links</div>
            <SocialLinks />
        </>
    )
}

export default LandingPage