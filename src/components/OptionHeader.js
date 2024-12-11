import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import './OptionHeader.css';

const OptionHeader = () => {
    const anchorStyles = {
        listStyleType: 'none',
        color: '#F5FAFA',
        textDecoration: 'none'
    };

    const menuIcon = {
        fontSize: '20px',
        color: '#01C38D',
        margin:'20px',
        cursor: 'pointer'
    }

    return (
        <div className="option__header">
            <FaBarsStaggered style={menuIcon}/>
        </div> 
    )
}

export default OptionHeader;