import React from 'react'
import './about.css';
import ME from '../../assets/me-about.png'
import {TbMilitaryAward} from 'react-icons/tb'
import {HiOutlineFolderOpen} from 'react-icons/hi'
const About = () => {
    return (
    <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>


        <div className="container about__container">
            <div className="about__me">
              
              <div className="about__me-image">
                  <img src={ME} alt="me"/>
              </div>
            </div>

            <div className="about__content">
          <div className="about__cards">
              <article className="about__card">
                  <TbMilitaryAward className="about__icon"/>
                  <h5>Experience</h5>
                  <small>2.5 Year Working</small>
              </article>

            {/* <article className="about__card">
                  <HiOutlineFolderOpen className="about__icon"/>
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
              </article>  */}

          </div>
<p>
    Versatile,accurate & integrated services hub.
</p>
<a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
            </div>    
    
    </section>
    )
}

export default About
