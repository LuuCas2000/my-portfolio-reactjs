import { useRef, useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import './Gallery.css';

const Gallery = ({ projectName, projectStack, projectImg, projectDemo, projectCode }) => {
    const btn1 = useRef(null);
    const btn2 = useRef(null);

    useEffect(() => {
        if (projectDemo === '') {
            btn1.current.disabled = true;
            btn2.current.disabled = true;
        } else {
            btn1.current.disabled = false;
            btn2.current.disabled = false;
        }
    }, [projectDemo]);

    useEffect(() => {
        btn1.current.style.color = '';
        btn2.current.style.color = '';
    }, []);

    return (
        <div className="gallery">
            <div className="project__image">
                <img src={`${projectImg}`} alt="img"/>
            </div>
            <div className="project__name">
                <span>{projectName}</span>
            </div>
            <div className="project__tools">
                <span>Tecnologias utilizadas:</span>
                <span className="tools">{projectStack}</span>
            </div>
            <div className="project__links">
                <button ref={btn1} onClick={() => window.open(projectDemo ? `${projectDemo}` : '')} style={{ backgroundColor: '#F5FAFA' }}><FaEye style={{ fontSize: '17px' }}/></button>
                <button ref={btn2} onClick={() => window.open(projectCode ? `${projectCode}` : '')} style={{ backgroundColor: '#01C38D', borderBottomRightRadius: '8px' }}><IoCodeSlashOutline style={{ fontSize: '17px' }}/></button>
            </div>
        </div>
    )
};

export default Gallery;