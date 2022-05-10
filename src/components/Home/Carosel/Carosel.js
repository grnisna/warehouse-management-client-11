import React from 'react';
import imageOne from '../../../images/banner-images/laptop-onee.jpg';
import imageTwo from '../../../images/banner-images/laptop-twoo.jpg';
import imageThree from '../../../images/banner-images/laptop-threee.jpg';
import { Carousel } from 'react-bootstrap';
import './Carosel.css';

const Carosel = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <div className="imageContainer">
                        <img
                            className=" "
                            src={imageThree}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imageContainer">
                        <img
                            className=" "
                            src={imageOne}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="imageContainer">
                        <img
                            className=""
                            src={imageTwo}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;