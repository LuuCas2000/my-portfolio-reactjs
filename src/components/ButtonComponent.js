import { Link } from 'react-router-dom';
import './ButtonComponent.css';

const ButtonComponent = ({ name, top, bottom, backColor, fontColor, links }) => {
    return (
        <Link to={links} className="button__comp" style={{ borderTopLeftRadius: top ? `${top}` : '0', borderBottomRightRadius: bottom ? `${bottom}` : '0', backgroundColor: backColor ? `${backColor}` : '#191E29', color: fontColor ? `${fontColor}` : '#F5FAFA' }}>
            {name}
        </Link>
    );
}

export default ButtonComponent;