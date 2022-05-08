import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ImageOne from '../../../images/banner-images/imageOne.png';
import ImageTwo from '../../../images/banner-images/imageTwo.jpg';
import ImageThree from '../../../images/banner-images/imageThree.jpg';
import { render } from '@testing-library/react';



const Carosel = () => {
    return (

        function ControlledCarousel() {
            const [index, setIndex] = useState(0);

            const handleSelect = (selectedIndex, e) => {
                setIndex(selectedIndex);
            };

            return (
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ImageOne}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ImageTwo}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ImageThree}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            );
        }
          
        render(<ControlledCarousel />);
    );
};

export default Carosel;