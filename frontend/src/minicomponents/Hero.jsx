import React from 'react'
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
        <div className='banner'>
            <h1>Volunteers</h1>
            <h3>NEEDED</h3>
            <p>Volunteers are the unsung heroes of communities, dedicating their time, skills, and passion to various causes without expecting monetary compensation. Their altruistic efforts often form the backbone of social initiatives, humanitarian aid, environmental conservation, and more.
            </p>
            <Link to={"/donate"} className="btn" >Donate Now</Link>
        </div>
        <div className="bannar">
            <img src="/hero.png" alt=""hero/>
        </div>
    </section>
  )
}

export default Hero
