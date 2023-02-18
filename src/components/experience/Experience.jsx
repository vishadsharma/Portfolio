import React from 'react'
import './experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className=" container experience__container">
            
            {/* Front End */}
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>HTML</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>Javascript</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>React js</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>React Native</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                </div>
            </div>

            {/* Backend Development */}
            <div className="experience__backend">
                <h3>Backend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>Node js</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>MySQL</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                        <div>
                        <h4>PHP</h4>
                        <small className="text-light">Experienced</small>
                        </div>
                        </article>
                    <article className="experience__details">
                        <BsShieldFillCheck className="experience__detail-icon"/>
                       <div>
                       <h4>Python</h4>
                        <small className="text-light">Experienced</small>
                       </div>
                        </article>
                
                </div>
            </div>
        </div>
    </section>

    )
}

export default Experience
