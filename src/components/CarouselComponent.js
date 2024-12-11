import Carousel from 'react-multi-carousel';
import Gallery from './Gallery';
import ButtonGroup from './ButtonGroup';
import projectData from '../project-data';
import './Project.css';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
          },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
    return (
    <Carousel arrows={false} renderButtonGroupOutside={true} customButtonGroup={ <ButtonGroup /> } partialVisbile={false} draggable={false} responsive={responsive}>
        {projectData.map((data, id) => {
            return <Gallery key={id} projectName={data.name} projectStack={data.technologies} projectImg={data.cover} projectDemo={data.demo} projectCode={data.code}/>
        })}
        {/*<Gallery projectName={'Todo List'} projectStack={'ReactJS - NodeJS'} projectImg={require('../image/portfolio--1.png')}/>*/}
    </Carousel>
    )
};

export default CarouselComponent;