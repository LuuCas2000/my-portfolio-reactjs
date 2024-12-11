import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import './SocialMediaIcons.css';

const SocialMediaIcons = () => {
    const socialMediaStyle = {
        fontSize: '30px',
        color: '#F5FAFA',
        margin: '12px 0',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out'
    };

    return (
        <div className="social_media_div">
            <div className="icons">
            <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/lucassouza200/')} style={socialMediaStyle}/>
            <RiGithubLine onClick={() => window.open('https://github.com/LuuCas21')} style={socialMediaStyle}/>
            <IoIosDocument style={socialMediaStyle}/>
            </div>
        </div>
    );
}

export default SocialMediaIcons;