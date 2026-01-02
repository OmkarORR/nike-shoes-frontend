import Product from "./Product";
import { Link } from "react-router-dom";

export default function About()
{
    return(
        <div className="About">
            <h1 className="about-name">About Us</h1>
                <div className="container">
                <div className="about-content">
                    <p className="about-p">Welcome to Nike – a brand fueled by a relentless pursuit of innovation, inspiration, and the power of sport.
                     At Nike, we believe in the transformative power of sport to break barriers, push limits, and drive positive change in the world.
                    Our story is one that spans decades, driven by a passion for performance and a commitment to pushing the boundaries of what is possible.
                    
                    Founded in 1964 by Bill Bowerman and Phil Knight, Nike started as a small distributor of Japanese running shoes under the name Blue Ribbon Sports.
                    From those humble beginnings, we have grown into a global powerhouse, known for our iconic Swoosh logo and a diverse range of cutting-edge products
                    that cater to athletes and enthusiasts alike.
                    </p>
                    {/* <button className="btn-about">Shop Now..</button> */}
                    <Link className="btn-about" to="/Product">Shop Now</Link>
                </div>
                <div className="about-content">
                    <img src="/images/aboutuspageimg.jpg"  className="about-img" alt="about-img" />
                </div>
            </div>
        </div>
    )
}