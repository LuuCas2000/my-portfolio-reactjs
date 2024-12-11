import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="returnDiv">
            <Link to="/">
            <IoCloseOutline style={{ fontSize: '25px', color: '#F5FAFA' }} />
            </Link>
            </div>
            <h2 className="section__title">Sobre mim</h2>
            <div className="about_infos">
                <p>Um aspirante a desenvolvedor Backend.</p>
            </div>
        </div>
    )
}

export default About;