import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 


function Homepage() {
    return (
        <>
         <div className='container-fluid' >  

<Carousel interval={1000} keyboard={false} pauseOnHover={true}>  

<Carousel.Item style={{'height':"450px"}}  >  

<img style={{'height':"450px"}}  

className="d-block w-100"  

src={require('../../assests/images/87295banner.png')}  />  



        </Carousel.Item  >  

        <Carousel.Item style={{'height':"450px"}}>  

        <img style={{'height':"450px"}}  

          className="d-block w-100"  

           src={require('../../assests/images/20525home-banner.png')}    />  

             
                </Carousel.Item>  

              <Carousel.Item style={{'height':"450px"}}>  

              <img style={{'height':"450px"}}  

               className="d-block w-100"  

                src={require('../../assests/images/32930Banner.png')}   />  


                </Carousel.Item>  
                </Carousel>
                <div>
      
                <section className="under-banner-title">
        <div className="text-center">
          <p>தாங்கள்  விரும்பினால் மையத்தின் மூலமாக இருவீட்டாரிடமும் பேசி திருமணத்தை முடித்து தருகிறோம்</p>
        </div>
      </section>
      </div>
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
                                                <h4><img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
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
                                                <h4><img style={{height:'20px'}}src={ require('../../assests/images/rupee.png') } /></h4>
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
                <section className="userprofile">
        <div className="container">
          <div className="row">
            <div className="text-center title">
              <h2>FEATURED PROFILES</h2>
            </div>
          </div>
          <div className="featureprofile owl-carousel owl-theme">
            <div className="item">
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') }  style={{width: '100%'}} />
                <div className="agile-overlay">
                  <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') } style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  aaaa</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') } style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') }style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') } style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') } style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') } style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 biseller-column">
                <img src={ require('../../assests/images/profile.jpg') }style={{width: '100%'}} />
                <div className="agile-overlay">
                <h4>Register No 
                    <span className="colen">: </span>TMM-69773</h4>
                  <ul>
                    <li><span>Name</span> <span className="colen">: </span>   aaaa </li>
                    <li><span>Age / Height</span><span className="colen">: </span>   27 / 
                      5ft 2in </li>
                    <li><span>Religion</span> <span className="colen">: </span> Hindu</li>
                    <li><span>Caste</span> <span className="colen">: </span>  bbbb</li>
                    <li><span>உட்பிரிவு</span> <span className="colen">: </span> aaaaa</li>
                    <li><span>Star</span> <span className="colen">: </span> bbbb</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="use-full-links">
        <div className="container">
          <div className="row">
            <div className="text-center title">
              <h2 style={{marginTop: '36px', marginBottom: '30px'}}>பயனுள்ள இணைப்புகள்</h2>
            </div>
          </div>
         
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=10">செட்டியார் <span>(5701)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=35">பிள்ளைமார்  <span>(4913)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=2">நாடார் <span>(4832)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=28">வன்னியர் <span>(3408)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=36">நாயுடு <span>(2875)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=5">யாதவர் <span>(2822)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=12">முதலியார் <span>(2582)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=37">விஷ்வகர்மா <span>(2364)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=18">கவுண்டர் <span>(2109)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=38">அகமுடையார் <span>(2033)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=15">PR <span>(1606)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=9">bbbb <span>(1438)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=8">கள்ளர் <span>(1394)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=16">PL <span>(1119)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=11">கிறிஸ்தவர் <span>(1034)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=26">வீரசைவம் <span>(604)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=32">உடையார் <span>(577)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=17">ரெட்டியார் <span>(523)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=25">மருத்துவர் <span>(473)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=33">முத்துராஜா <span>(328)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=30">நாயக்கர் <span>(320)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=22">அருந்ததியர் <span>(318)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=24">மூப்பனார் <span>(287)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=34">முத்தரையர் <span>(281)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=19">முஸ்லீம் <span>(265)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=27">வண்ணார் <span>(256)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=40">பிராமின் <span>(205)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=52">குலாளர் <span>(190)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=48">தேவர் <span>(162)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=29">சௌராஷ்டிரா <span>(149)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=31">வெள்ளாளர் <span>(136)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=47">போயர் <span>(132)</span></a></p>
          </div>
          <div className="caste-name">    
            <p><a href="https://www.thirumagalmatrimonymadurai.in/registers/varanlist?id=46">ஐயர் <span>(112)</span></a></p>
          </div>
        </div>
      </section>
      <section className="bankdetail">
            <div className="container">
                <div className="bank">
                    <div className="row">
                        <h3>Bank Account Details</h3>
                        <h4>Pay directly at the bank / Pay online
</h4>
                        {/*<h4>CLICK BELOW LINK FOR ONLINE / MOBILE PAYMENT</h4>*/}
                        {/*<p style="color: #fff;text-align: center;margin-top: 15px;font-size: 21px;font-weight: 500;">GOOGLE PAY : 9943315331 & PHONE PAY : 9943315331</p>*/}
                        <div className="img-pay"><span ><img className="img-go" src={ require('../../assests/images/Goog-Pay.jpg') } style={{ height:'25px',marginLeft:'44%' }} /></span><span>GOOGLE PAY : 9943315331</span></div>
                        <div className="img-pay"><span className="img-come"><img src={ require('../../assests/images/phonepe-logo.png') }  style={{ height:'25px',marginLeft:'44%' }} /></span><span>PHONE PAY : 9943315331</span></div>
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

      


       </div>
      
</>

                      






                     
                        

                )  
      
    
}

export default Homepage;
