import React from 'react';

function Services() {
    return (
        <div>
             <section style={{"box-shadow":"0px 3px 23px 0px rgb(244, 246, 249)"}}>
        <div className="container about-us">
          <div className="contact-banner-heading text-center col-md-offset-4 col-md-3">
            <div id="triangle_left" />
            <p>Services</p>
            <div id="triangle_right" />
          </div>
        </div>
        {/*//services heading*/}
        {/*services images*/}
        <div className="servicesimages">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/74774services1.png') } alt />
                <p>Venue Management</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/14707services2.png') }  />
                <p>Wedding Halls </p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/10321services3.png') } />
                <p>Orchestra and Bands</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/42132services4.png') } />
                <p>Marriage Sawaari </p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/80042services5.png') } />
                <p>Flowers &amp; Garlands</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/55056Catering.jpg') } />
                <p>Catering Services</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/50458services7.png') } />
                <p>Bridal Makeup</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/16775astrology.jpg') } />
                <p>Ast &amp; Horoscope Matching</p>
              </div>    
              <div className="col-md-4 col-sm-6">
                <img className="images img-responsive1" src={ require('../../assests/images/15658video.jpg') } />
                <p> HD Photography/Video </p>
              </div>    
            </div>
          </div>
        </div>
      </section>
      <div className="w3layouts-footerdesign">
        <div className="footerdesign">
          <img src={ require('../../assests/images/bg.png') }  />
        </div>
        <div className="clearfix" />
      </div>
            </div>
     
     )
 }
 export default Services;
 