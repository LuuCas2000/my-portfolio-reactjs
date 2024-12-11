import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import './Project.css';

const Project = () => {

    return (
        <div className="project">
            <h2 className="section__title">Projetos</h2>
            <div className="returnDiv">
            <Link to="/">
            <IoCloseOutline style={{ fontSize: '25px', color: '#F5FAFA' }} />
            </Link>
            </div>
            <div className="project__gallery">
                <CarouselComponent />
            </div>
        </div>
    )
}

export default Project;