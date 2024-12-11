import { MdOutlineChevronRight } from "react-icons/md";

const ButtonTwo = ({ onClick }) => {
    return (
        <MdOutlineChevronRight style={{ fontSize: '40px', color: '#01C38D', cursor: 'pointer' }} onClick={() => onClick()}/>
    )
}

export default ButtonTwo;