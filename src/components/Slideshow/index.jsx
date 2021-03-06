import PropTypes from 'prop-types';
import React, { useState } from "react";
import cover from "../resource/cover.png";
import header1 from "../resource/header1.png";
import header2 from "../resource/header2.png";
import header3 from "../resource/header3.png";
import header4 from "../resource/header4.png";
import Carousel from "react-simply-carousel";
import './style.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
Slideshow.propTypes = {};

function Slideshow(props) {
    const img = [
        header1, header2, header3, header4, header1, header3
    ];
    const [activeSlide, setActiveSlide] = useState(0);
    return (

        <div style={{ marginTop: 10, }}>
            <div className="style">
                <img className="cover" src={cover} alt="" style={{ width: "100%", height: 300 }} />
            </div>
            <div >
                <Carousel
                    updateOnItemClick
                    arrows

                    containerProps={{
                        style: {
                            width: "100%",
                            justifyContent: "space-between"

                        }
                    }}
                    activeSlideIndex={activeSlide}
                    activeSlideProps={{


                    }}
                    centerMode={true}
                    onRequestChange={setActiveSlide}


                    forwardBtnProps={{

                        children: <ArrowForwardIosIcon className='button' style={{color: "white"}}/>,
                        style: {
                          width: 60,
                          height: 60,
                          minWidth: 60,
                          alignSelf: "center",
                          backgroundColor: "transparent",
                          border: "none"
              
                        }
              
              
                      }}
                      backwardBtnProps={{
                        children: <ArrowBackIosIcon className='button' style={{color: "white"}}/>,
                        style: {
                          width: 60,
                          height: 60,
                          minWidth: 60,
                          alignSelf: "center",
                          backgroundColor: "transparent",
                          border: "none"
              
                        }
                      }}
                    itemsToShow={3}
                    speed={400}

                >

                    {img.map((item, index) => (
                        <div
                            style={{
                                width: 500,
                                height: 300,
                                // border: "30px solid white",
                                textAlign: "center",
                                lineHeight: "240px",
                                boxSizing: "border-box"
                            }}
                            key={index}
                        > <img src={item} alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Slideshow;