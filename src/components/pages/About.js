import React from 'react';

function About() {
    return (
        <div>
        <section className="inner-page-banners">
            <img className="images img-responsive" src={ require('../../assests/images/87295banner.png') }/>
            <div className="clearfix" />
        </section>


        <section style={{ boxShadow: '0px 3px 23px 0px rgb(244, 246, 249)' }}>
            <div className="container about-us">
                <div className="text-center col-md-offset-4 col-md-3">
                    <div id="triangle_left" />
                    <p> About Us</p>
                    <div id="triangle_right" />
                </div>
            </div>
        </section>
        {/*//about heading*/}
        {/*details*/}
        <section className="aboutdetails">
            <div className="container">
                <div className="row">
                    <div className="text-center aboutdetail">
                        <h2>Mrs. Marriage Information Center </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={ require('../../assests/images/25399about_img.png') }/>
                    </div>
                    <div className="col-md-6 content">
                        <ul>
                            <li>Our Lady's Divine Information Center has been approved by the Government and is headquartered in Madurai.</li>
                            <li>We will end the marriage by talking to both housemates through the center if they wish.</li>
                            <li>We kindly request you to register your son / daughter horoscopes for free at the Ms. Marriage Information Center and select the best brides to set up a good marriage.</li>
                            <li>Our service is for all sections ......</li>
                            <li>We run this company with a service mindset.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*//details*/}
        {/*about details*/}
        <section className="aboutsection">
            <div className="container">
                <div className="about">
                    <h2>Note</h2>
                    <p>  Only biodata, horoscope and photo are enough to register in our company. Be sure to record the horoscope (zodiac - aspect) phases of the husbands. Do not forget to ask for the registration number immediately after registration. Inform our center as soon as the marriage is over. </p>
                </div>
            </div>
        </section>
    </div>
     
    )
}
export default About;
