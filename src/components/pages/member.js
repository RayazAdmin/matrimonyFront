import React from 'react';

function Member() {
    return (
      
        <div>
        <section className="inner-page-banners">
            <img className="images img-responsive" src={ require('../../assests/images/87295banner.png') }/>
            <div className="clearfix" />
        </section>

        {/*about heading*/}
        <section style={{ boxShadow: '0px 3px 23px 0px rgb(244, 246, 249)' }}>
            <div className="container about-us">
                <div className="text-center col-md-offset-4 col-md-3">
                    <div id="triangle_left" />
                    <p>Registration fee</p>
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
                        <h2>Membership Registration Fee</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={ require('../../assests/images/membership_image.png') } />
                    </div>
                    <div className="col-md-6 content">
                        <ul>
                            <li>Registration with our company is free and you can choose from more than one fee (1000, 2000, 3000).
</li>
                            <li>Only Rs 30 to come directly to our center and get the address and phone numbers of a suitable groom.
</li>
                            <li>The address and telephone numbers of a suitable spouse can be obtained by courier for a fee of Rs. 40 / -. (Courier cost Rs. 50 separate)
</li>
                            <li>You can also pay at the bank
</li>
                            <li>We run this company with a service mindset.
</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*//details*/}
        {/* our packages*/}
        <section className="ourpackages" style={{ background: '#fafbfd', paddingTop: '30px' }}>
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2 className="text-center">OUR PACKAGES</h2>
                    </div>
                </div>
                <div className="selectpackage" id="selectpackage">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="package-boxshadow">
                                <div className="silver">
                                    <h2>Silver</h2>
                                    <div className="pricecircle">
                                        <h4> <img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
                                        <h1>500</h1>
                                        <p>ONLY</p>
                                    </div>
                                    <h5>Number of Profiles</h5>
                                    <h3>25</h3>
                                    <h4 style={{ marginBottom: '20px' }}>Valid for 3 days</h4>
                                    <a className="button">SELECT PACKAGE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="package-boxshadow">
                                <div className="silver">
                                    <h2>Gold</h2>
                                    <div className="pricecircle">
                                        <h4> <img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
                                        <h1>1000</h1>
                                        <p>ONLY</p>
                                    </div>
                                    <h5>Number of Profiles</h5>
                                    <h3>50</h3>
                                    <h4 style={{ marginBottom: '20px' }}>Valid for 6 days</h4>
                                    <a className="button">SELECT PACKAGE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="package-boxshadow">
                                <div className="silver">
                                    <h2>Diamond</h2>
                                    <div className="pricecircle">
                                        <h4> <img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
                                        <h1>1500</h1>
                                        <p>ONLY</p>
                                    </div>
                                    <h5>Number of Profiles</h5>
                                    <h3>75</h3>
                                    <h4 style={{ marginBottom: '20px' }}>Valid for 9 days</h4>
                                    <a className="button">SELECT PACKAGE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="package-boxshadow">
                                <div className="silver">
                                    <h2>Platinum</h2>
                                    <div className="pricecircle">
                                        <h4> <img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
                                        <h1>2000</h1>
                                        <p>ONLY</p>
                                    </div>
                                    <h5>Number of Profiles</h5>
                                    <h3>100</h3>
                                    <h4 style={{ marginBottom: '20px' }}>valid for 12 days</h4>
                                    <a className="button">SELECT PACKAGE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w3layouts-footerdesign">
                <div className="footerdesign">
                    <img src="{ require('../../assests/images/bg.png') }" alt="" />
                </div>
                <div className="clearfix" />
            </div>
        </section>
    </div>






   
)
}

export default Member