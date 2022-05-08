import React from 'react';
import imageOne from '../../../images/banner-images/imageOnee.png';
import imageTwo from '../../../images/banner-images/imageTwoo.jpg';
import imageThree from '../../../images/banner-images/imageThreee.jpg';
import { Carousel } from 'react-bootstrap';
import './Carosel.css';

const Carosel = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <div className="imageContainer">
                        <img
                            className="d-block w-100 "
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
                            className="d-block w-100 "
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
                            className="d-block w-100"
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