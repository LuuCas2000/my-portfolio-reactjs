import { MdOutlineChevronLeft } from "react-icons/md";

const ButtonOne = ({ onClick }) => {
    return (
        <MdOutlineChevronLeft style={{ fontSize: '40px', color: '#01C38D', cursor: 'pointer' }} onClick={() => onClick()}/>
    )
}

export default ButtonOne;