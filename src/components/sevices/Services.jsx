import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'
const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="services">
                    <div className="service__head">
                        <h3>Basic</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>$300</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>WEBSITE DESIGN- 1 PAGE</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Contact me first- Complete Home Page to see quality before adding additional pages at $100 per page.</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Revisions 2</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Delivery Time 7 days and for 5 days (+$100)
                                </p>
                            </li>
                            
                        </ul>
                </article>
                {/* Web Development */}
                <article className="services">
                    <div className="service__head">
                        <h3>Standard</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>$400</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>WEBSITE DESIGN- 2 PAGE</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Contact me first- Complete Home Page, About Page, Contact Page. Basic gig first is recommended.</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Revisions 3</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Delivery Time 10 days and for 7 days (+$100)</p>
                            </li>
                            
                        </ul>
                </article>
                {/* Content Creation */}
                <article className="services">
                    <div className="service__head">
                        <h3>Premium</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                            <BsCheck2 className="service__list-icon"/>
                                <p>$550</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>WEBSITE DESIGN- 4 PAGE</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Complete Home Page, About Page, Services Page, Contact Page. Basic gig first is recommended.</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Revisions 2</p>
                            </li>
                            <li>
                                <BsCheck2 className="service__list-icon"/>
                                <p>Delivery Time 14 days and for 10 days (+$100)</p>
                            </li>
                        </ul>
                </article>
            </div>
        </section>

    )
}

export default Services
