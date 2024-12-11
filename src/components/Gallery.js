import { FaEye } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import './Gallery.css';

const Gallery = ({ projectName, projectStack, projectImg, projectDemo, projectCode }) => {
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
                <button onClick={() => window.open(projectDemo ? `${projectDemo}` : '')} style={{ backgroundColor: '#F5FAFA' }}><FaEye style={{ fontSize: '17px' }}/></button>
                <button onClick={() => window.open(projectCode ? `${projectCode}` : '')} style={{ backgroundColor: '#01C38D', borderBottomRightRadius: '8px' }}><IoCodeSlashOutline style={{ fontSize: '17px' }}/></button>
            </div>
        </div>
    )
};

export default Gallery;