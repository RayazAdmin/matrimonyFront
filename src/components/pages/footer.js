import React from 'react';


function Footer() {
    return (
        <div>
        <div className="footer">
            <div className="container footer-info">
                <div className="footer-info w3-agileits-info row">
                    <div className="col-md-4 address-left agileinfo">
                        <span>  <img src={ require('../../assests/images/footer_logo.png') }/></span>
                        <ul>
                            <p>Our Lady's Marriage Information Center has been approved by the Government and is headquartered in Madurai.</p><br />
                            <p> Free their daughter / son horoscopes at Ms. Marriage Information Center ....   ReadMore
                                <label  style={{ color: '#0fc10f', marginLeft: '11px', fontSize: '14px' }}>ReadMore &gt;</label>

                            </p>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-grids">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li><img src={ require('../../assests/images/locate.png') } /><span>31- EMG, Near Canara Bank,
                                , {"\n"}Thallakulam,{"\n"}Madurai-625 002</span></li>
                            <li><img src={ require('../../assests/images/phone.png') } /><span>9943315331</span></li>
                            <li><img src={ require('../../assests/images/mail.png') } /><span>thirumagalmatrimonymadurai@gmail.com</span></li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-grids quick">
                        <h3>QUICK LINK</h3>
                        <ul className="qik-lnk">
                            <li><a href="/">Home</a></li>
                            <li><a href='/about'>About Us</a></li>
                            <li><a href='/services'>Services</a></li>
                            <li><a href='/contact'>Contact Us</a></li>
                            <li><a href="pages/modal.js" data-target="#myModal" data-toggle="modal" onclick="$('#mysoul').trigger('click')">Free Search</a></li>
                            <li><a href='/member'>Member</a></li>
                        </ul>
                        <div className="social">
                            <ul className="list-inline">
                                <li><a  href="https://www.facebook.com/Thirumagalmatrimony-249442865999426" target="_blank"><img src={ require('../../assests/images/fb.png') } /></a></li>
                                <li><a  href="https://twitter.com/thirumagalmatri" target="_blank"><img src={ require('../../assests/images/tr.png') } /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix" />
                    {/*                </div>*/}
                    <div className="clearfix" />
                </div>
            </div>
        </div>
        <div className="copy-right">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p style={{ wordSpacing: '6px' }}><img style={{height:'20px'}} src={ require('../../assests/images/copyright.png') } /> 2019 Thirumagal Matrimony. All rights reserved.</p>
                    </div>
                    <div className="col-md-offset-1 col-md-5" style={{ textAlign: 'right' }}>
                        <p><a href="https://www.thirumagalmatrimonymadurai.in/staticpages/terms" style={{ wordSpacing: '5px' }}>Terms &amp; Condition </a> <span style={{ marginLeft: '20px', marginRight: '20px' }}> | </span>  <a href="https://www.thirumagalmatrimonymadurai.in/staticpages/privacypolicy" style={{ wordSpacing: '10px' }}>Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


        )
    }
export default Footer;