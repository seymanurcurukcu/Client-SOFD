import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import pic1 from '../../assets/img/carouselImg/1.png'
import pic2 from '../../assets/img/carouselImg/2.png'
import pic3 from '../../assets/img/carouselImg/3.png'
import './content1.css'

const images = [
    {
        carouselImg: pic1
    },
    {
        carouselImg: pic2
    },
    {
        carouselImg: pic3
    }
]


const Content1 = (props) => {
    return (
        <Container fluid>
            <Carousel >
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image.carouselImg}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))}
           
            </Carousel>
        </Container>
    )
}

export default Content1