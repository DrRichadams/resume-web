import React from "react"
import "../../../styles/about_me.css"

const AboutMe = () => {
    return( 
        <div className="about_me_container">
            <div className="am_right">
                <img src={process.env.PUBLIC_URL + `/resources/profile1.jpg`} alt="" />
            </div>
            <div className="am_left">
                <div className="aml_top">
                    <p><span>Maria T Matheus </span> 
                        I am an innovative,commited and ambitious young lady interested in meeting new people and  places.
                        I am deeply passionate about technology and enviromental welfare. I posses great leadership skills,
                        hence a team player and can work well uder pressure.
                        My ultimate goal in life is to be part of a team that brings about change and development to this country in terms of technology.
                    </p>
                </div>
                <div className="aml_bottom">
                    <h3 className="aml_bottom_title">Reach me here</h3>
                    <div className="aml_address">77 Independence Avenue,Windhoek</div>
                    <div className="aml_email">azeamatheus@gmail.com</div>
                    <div className="aml_cell">+264 81 557 6928</div> 
                </div>
            </div>
        </div>
    )
}

export default AboutMe