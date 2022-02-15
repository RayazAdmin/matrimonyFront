import React from 'react';


function Payment() {
    return (
        <div >
        <section className="inner-page-banners">
            <img className="images img-responsive" src={ require('../../assests/images/87295banner.png') } />
            <div className="clearfix" />
        </section>

        {/*about heading*/}
        <section style={{ boxShadow: '0px 3px 23px 0px rgb(244, 246, 249)' }} id="payment_way">
            <div className="container about-us">
                <div className="text-center col-md-offset-4 col-md-3">
                    <div id="triangle_left" />
                    <p>To pay </p>
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
                        <h2>Payment Methods</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={ require('../../assests/images/payment_img.png') }/>
                    </div>
                    <div className="col-md-6 content">
                        <ul>
                            <li>Now you can pay through the bank and know the address and phone number of the spouses.
</li>
                            <li>You can pay Rs.40 (+50 rupees courier cost) to the bank of your choice.
</li>
                            <li>Also, the details of their selected spouses will be sent by courier as soon as they let us know over the phone.
</li>
                            <li>We will end the marriage by talking to both housemates through the center if they wish
</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*//details*/}
        {/*bank details*/}
        <section className="bankdetail">
            <div className="container">
                <div className="bank">
                    <div className="row">
                        <h3>Bank Account Details</h3>
                        <h4>Pay directly at the bank / Pay online
</h4>
                        {/*<h4>CLICK BELOW LINK FOR ONLINE / MOBILE PAYMENT</h4>*/}
                        {/*<p style="color: #fff;text-align: center;margin-top: 15px;font-size: 21px;font-weight: 500;">GOOGLE PAY : 9943315331 & PHONE PAY : 9943315331</p>*/}
                        <div className="img-pay"><span className="img-go"><img src={ require('../../assests/images/Goog-Pay.jpg') }  style={{ height:'25px',marginLeft:'44%' }}/></span><span>GOOGLE PAY : 9943315331</span></div>
                        <div className="img-pay"><span className="img-come"><img src={ require('../../assests/images/phonepe-logo.png') }  style={{ height:'25px',marginLeft:'44%' }}/></span><span>PHONE PAY : 9943315331</span></div>
                    </div>
                    <div className="col-md-10 col-md-offset-1 bankdetails">
                        <div className="row">
                            <div className="col-md-2 col-sm-1" />
                            <div className=" col-md-8 col-sm-10">
                                <div className="item">
                                    <div className="card">
                                        <img src="{ require('../assests/images/canarabank.jpg') }" alt="" />
                                        <div className="content match-height">
                                            <p><b>BANK</b><span className="dot">:</span><span>CANARA BANK</span></p>
                                            <p><b>A/C NAME </b><span className="dot">:</span><span> SRI SASTHA DRIVING</span></p>
                                            <p><b>A/C NO </b><span className="dot">:</span><span> 62161010000763</span></p>
                                            <p><b>BRANCH</b><span className="dot">:</span><span> SPECIALISED SME BRANCH, MADURAI-II</span></p>
                                            {/*<p><b>BRANCH CODE </b><span class="dot">:</span><span>253</span></p> */}
                                            <p><b>IFSC CODE</b><span className="dot">:</span><span> CNRB0016200</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-1" />

                        </div >
                    </div >
                </div >
            </div >
        </section >
        <section class="after-payment">
            <div className="container">
                <p>Payment can be made in cash or through online money transfer. Please let us know the name of the branch where the payment was made or the REFFERENCE NUMBER of the money transfer after payment</p>
                <h5>Send Maniyadar to the following address </h5>
                <div className="money-order text-center">
                    <p /><pre /><p />
                </div>
            </div>
        </section>
    </div>







        

        )
        }


export default Payment
   