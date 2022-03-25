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
                    <p><span>George Washington</span> is ipsum dolor sit amet consectetur, adipisicing elit. Ex incidunt voluptate aspernatur architecto laudantium ullam amet reiciendis. Exercitationem dicta adipisci, repellendus fugiat voluptates accusamus nostrum? Voluptatibus itaque voluptas repellat harum quos incidunt magni similique molestiae optio, ipsa eaque quam pariatur nam quis impedit fugit? Provident voluptas consequuntur nobis vitae veritatis!</p>
                </div>
                <div className="aml_bottom">
                    <h3 className="aml_bottom_title">Reach me here</h3>
                    <div className="aml_address">123 Ausspanplatz City heights</div>
                    <div className="aml_email">proxyserver7798@gmail.com</div>
                    <div className="aml_cell">+264 694 757</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe