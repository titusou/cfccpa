import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel className="pa-carousel">
                    <Carousel.Item>
                        <img
                            width={960}
                            height={350}
                            alt="960x350"
                            src="http://www.cfccpaloalto.org/wp-content/uploads/2018/05/pic-e1527315715403-960x350.jpg"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={960}
                            height={350}
                            alt="960x350"
                            src="http://www.cfccpaloalto.org/wp-content/uploads/2018/08/1-960x350.jpg"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            width={960}
                            height={350}
                            alt="960x350"
                            src="http://www.cfccpaloalto.org/wp-content/uploads/2018/08/3-960x350.jpg"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Home;
