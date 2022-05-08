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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosel;