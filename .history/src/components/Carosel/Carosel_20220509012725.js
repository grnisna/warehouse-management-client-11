import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import imageOne from '..//..//..//images/banner-images/image-1.png';
import imageTwo from '..//..//..//images/banner-images/image-2.png';
import imageThree from '..//..//..//images/banner-images/image-3.png';
import imageFout from '../../../images/banner-images/image-1.png'


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
                            src={imageOne}
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
                            src={imageTwo}
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
                            src={imageThree}
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
          
         
    );
};

export default Carosel;