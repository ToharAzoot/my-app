import React, { Component } from 'react';
import img1 from './assets/three-focused-children-are-playing-floor-drawing-coloring-books.JPG';
import img2 from './assets/happy-children-posing-together.JPG';
import img3 from './assets/three-happy-kids-playing-ballpit.JPG';
import img4 from './assets/cute-little-baby-white-t-shirt-diapers-playing-home-mat-with-bright-colored-cubes.JPG';
import img5 from './assets/children-play-with-toy-designer-floor-children-s-room-two-kids-playing-with-colorful-blocks-kindergarten-educational-games.JPG';
import './UI/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home-header">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <img src={img1} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img4} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={img5} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}
export default Home;