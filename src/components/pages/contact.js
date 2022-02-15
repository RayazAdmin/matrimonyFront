import React from 'react';

function Contact() {
    return (
        <div>
        <section className="inner-page-banners">
            <img className="images img-responsive" src= { require('../../assests/images/87295banner.png') }/>
            <div className="clearfix" />
        </section>

        <section style={{ boxShadow: '0px 3px 23px 0px rgb(244, 246, 249)' }}>
            <div className="container contact-us">
                <div className="contact-banner-heading text-center col-md-offset-4 col-md-5">
                    <div id="triangle_left" />
                    <p>Contact Us</p>
                    <div id="triangle_right" />
                </div>
            </div></section>

        {/*-728x90-*/}
        <div className="aboutdetails">
            <div className="text-center aboutdetail">
                <h2>Mrs. Marriage Information Center</h2>
            </div>
        </div>
        <div className="officeaddress">
            <div className="container">
                <div className="address">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-5 col-sm-6 col-xs-6">
                            <div className="contactaddress">
                                <h2 className="text-center">Main Office</h2>
                                <div className="media">
                                    <div className="media-left">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <p /><pre>31- EMG, Near Canara Bank, {"\n"}Thallakulam,{"\n"}Madurai-625 002</pre><p />
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <i className="fa fa-volume-control-phone" aria-hidden="true" />  </div>
                                    <div className="media-body">
                                        <p>+91 9943315331</p>
                                        <p> 8220204747</p>
                                        <p> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-6">
                            <div className="contactaddress">
                                <h2 className="text-center">Branch Office</h2>
                                <div className="media">
                                    <div className="media-left">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                    </div>
                                    <div className="media-body">
                                        <p /><pre>No 21/23 , Samikannu street ,{"\n"}Bethaniyapuram , {"\n"}Guru Theater OPP,{"\n"}Arappalayam , {"\n"}Madurai - 625016.{"\n"}Tamilnadu ,{"\n"}India .</pre><p />
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <i className="fa fa-volume-control-phone" aria-hidden="true" />  </div>
                                    <div className="media-body">
                                        <p>82 20 20 47 47</p>
                                        <p>0452 495 4442</p>
                                        <p>0452 496 1222</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="working text-center"> Working Hours  :  Monday - Sunday 9 am to 7 pm </p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.856421845306!2d78.14735271415516!3d9.945901876693847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5ce143aacbb%3A0xb43dd2142e1e738a!2sThirumagalMatrimony!5e0!3m2!1sen!2sin!4v1523635098354" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </div>
            </div>
        </div>

        {/*contact enquiry*/}
        <div className="enquiryform">
            <div className="enquiry">
                <h3 className="text-center">GET ENQUIRY</h3>
            </div>
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="group">
                        <form action="#" method="post" className="validation_form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>NAME</label>
                                        <input type="text" className="form-control validate[required]" id="name" placeholder="Your name" name="data[Contact][name]" />
                                    </div>
                                    <div className="form-group">
                                        <label>EMAIL</label>
                                        <input type="email" className="form-control validate[required]" id="email" placeholder="Your email" name="data[Contact][email]" />
                                    </div>
                                    <div className="form-group">
                                        <label>SUBJECT</label>
                                        <input type="text" className="form-control validate[required]" id="subject" placeholder="subject" name="data[Contact][subject]" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>MESSAGE</label>
                                        <textarea className="form-control validate[required]" rows={8} id="message" name="data[Contact][message]" defaultValue={""} />
                                    </div>
                                </div>

                                <div className="form-group text-center">
                                    <input type="submit" className="btn btn-success" defaultValue="Submit" name="submit" id="validation-next" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>













    )
}

export default Contact;