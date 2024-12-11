import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import imageSource from "../picture";
import './MainBody.css';

// Components

import ButtonComponent from "./ButtonComponent";

const MainBody = () => {
    const socialMediaStyle = {
        fontSize: '30px',
        color: '#F5FAFA',
        margin: '0 8px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
    };

    return (
        <div className="main__body">
            <div className="my__infos">
            <div className="my__picture">
                <img src={`${imageSource.image}`} alt="profile" />
            </div>
            <div className="my__name">
                <span>Lucas R. de Souza</span>
            </div>
            <div className="my__description">
                <span>Desenvolvedor Backend</span>
            </div>
            <div className="my__location">
                <CiGlobe style={{ color: '#01C38D', fontSize: '30px' }}/>
                <span>R J - B r a s i l</span>
            </div>
            <div className="button__div">
            <ButtonComponent links={'projetos'} name={'Projetos'} top={'8px'} bottom={'0'}/>
            <ButtonComponent links={'linguagens&tools'} name={'Linguagens & Tools'}/>
            <ButtonComponent links={'sobre'} name={'Sobre mim'}/>
            <ButtonComponent links={'certificados'} name={'Certificados'} top={'0'} bottom={'8px'} backColor={'#01C38D'} fontColor={'#191E29'}/>
            </div>
            <div className="my__social__medias">
                <FaLinkedinIn onClick={() => window.open('https://www.linkedin.com/in/lucassouza200/')} style={socialMediaStyle}/>
                <RiGithubLine onClick={() => window.open('https://github.com/LuuCas21')} style={socialMediaStyle}/>
                <IoIosDocument style={socialMediaStyle}/>
            </div>
            <div className="coding__icon">
                <IoCodeSlashOutline style={{ fontSize: '20px', color: '#01C38D'}}/>
            </div>
            </div>
        </div>
    )
}

export default MainBody;