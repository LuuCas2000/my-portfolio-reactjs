import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import './Stacks.css';

const Stacks = () => {
    return (
        <div className="stacks">
            <div className="returnDiv">
            <Link to="/">
            <IoCloseOutline style={{ fontSize: '25px', color: '#F5FAFA' }} />
            </Link>
            </div>
            <h2 className="section__title">Linguagens & Tools</h2>
            <div className="stack_infos">
                <ul>
                    <ol style={{ fontSize: '30px', color: '#F5FAFA', fontWeight: 'bold', marginBottom: '20px' }}>Linguagens</ol>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>Typescript</li>
                    <ol style={{ fontSize: '30px', color: '#F5FAFA', fontWeight: 'bold', margin: '20px 0' }}>Tools</ol>
                    <li>Git</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <ol style={{ fontSize: '30px', color: '#F5FAFA', fontWeight: 'bold', margin: '20px 0' }}>Idiomas</ol>
                    <li>Inglês - Fluente</li>
                    <li>Francês - Intermediário</li>
                </ul>
            </div>
        </div>
    )
}

export default Stacks; 