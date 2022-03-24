import React, { useState } from "react"
import "../styles/landing_page.css"
import { v4 as uuidv4 } from "uuid"
import { FiChevronLeft, FiChevronRight, FiPauseCircle } from "react-icons/fi"

const LandingPage = () => {
    const [ current, setCurrent ] = useState(1)
    const [ bannerData, setBannerData ] = useState([
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: "Ipsa perferendis similique rerum. Incidunt optio numquam aliasLorem ipsum dolor, sit amet consectetur adipisicing elit.  vel, quibusdam dignissimos id ab modi rerum. Quam exercitationem dolorem officiis optio inventore error magni hic voluptatibus odit! Perspiciatis fugit animi earum quidem veritatis libero aut ad error? Alias debitis aspernatur suscipit voluptatibus architecto.",
        },
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: " Optio numquam alias vel, quibusdam dignissimos id ab modi rerum. Quam exercitationem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa perferendis similique rerum. Incidunt dolorem officiis optio inventore error magni hic voluptatibus odit! Perspiciatis fugit animi earum quidem veritatis libero aut ad error? Alias debitis aspernatur suscipit voluptatibus architecto.",
        },
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: "Dolor, sit amet consectetur adipisicing elit. IpsaLorem ipsum perferendis similique rerum. Incidunt optio numquam alias vel, quibusdam dignissimos id ab modi rerum. Quam exercitationem dolorem officiis optio inventore error magni hic voluptatibus odit! Perspiciatis fugit animi earum quidem veritatis libero aut ad error? Alias debitis aspernatur suscipit voluptatibus architecto.",
        },
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: "Adipisicing elit. Ipsa perferendis similique rerum Lorem ipsum dolor, sit amet consectetur . Incidunt optio numquam alias vel, quibusdam dignissimos id ab modi rerum. Quam exercitationem dolorem officiis optio inventore error magni hic voluptatibus odit! Perspiciatis fugit animi earum quidem veritatis libero aut ad error? Alias debitis aspernatur suscipit voluptatibus architecto.",
        },
        {
            id: uuidv4(),
            title: "Annual General Meeting",
            story: "Sit amet consectetur adipisicing elit. Ipsa Lorem ipsum dolor,  perferendis similique rerum. Incidunt optio numquam alias vel, quibusdam dignissimos id ab modi rerum. Quam exercitationem dolorem officiis optio inventore error magni hic voluptatibus odit! Perspiciatis fugit animi earum quidem veritatis libero aut ad error? Alias debitis aspernatur suscipit voluptatibus architecto.",
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
        <div className="landind_page_container">
            <div className="banner_left">
                <h3 className="banner_name">George Washington</h3>
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
                <div className="banner_controls">
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
                </div>
            </div>
            <div className="banner_right"> 
                <img 
                src={process.env.PUBLIC_URL + "resources/profile1.jpg"} 
                alt="" />
            </div>
        </div>
    )
}

export default LandingPage