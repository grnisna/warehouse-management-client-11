import React from 'react';
import imageOne from '../../images/Brands/balanceBody.jpeg';
import imageTwo from '../../images/Brands/cedasa.jpeg';
import imageThree from '../../images/Brands/ceremes.jpeg';
// import imageFour from '../../images/Brands/deposter.jpg';
import imageFive from '../../images/Brands/Stella.png';
import imageSix from '../../images/Brands/stenal.png';
import imageSeven from '../../images/Brands/studio.png';
import './Brands.css';

const Brands = () => {
    return (
        <div>
            <h1 className='text-center text-info p-3 m-2 '>Our Partners</h1>
            <div className='border mx-auto p-4 brand-carosel' >
                <div className="row mx-auto my-auto justify-content-center ">
                    <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageOne} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageTwo} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageThree} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageSeven} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageFive} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src={imageSix} className="img-fluid" alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev  bg-primary w-auto" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next bg-primary w-auto" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;