import ButtonOne from './btns/ButtonOne';
import ButtonTwo from './btns/ButtonTwo';
import ButtonThree from './btns/ButtonThree';
import './ButtonGroup.css';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <ButtonOne className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <ButtonTwo onClick={() => next()} />
        {/*<ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>*/}
      </div>
    );
};

export default ButtonGroup;