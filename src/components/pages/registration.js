import React from 'react';

function Registration() {
    return (
        <div>
        <section className="inner-page-banners">
            <img className="images img-responsive" src={ require('../../assests/images/87295banner.png') }  />
            <div className="clearfix" />
        </section>

        <div className="container-fluid register-front-end">
            <section style={{ boxShadow: '0px 3px 23px 0px rgb(244, 246, 249)' }}>
                <div className="container about-us">
                    <div className="contact-banner-heading text-center col-md-offset-4 col-md-3">
                        <div id="triangle_left" />
                        <p>Free Registration </p>
                        <div id="triangle_right" />
                    </div>
                </div></section>
            <div className="content">
                <div className="reg-top-links">
                    <div className="col-md-6">
                        <h6>Already Registered ? <span><a href="#" data-target="#myModal" data-toggle="modal">Login Now</a></span></h6>
                    </div>
                    {/*<div class="col-md-6" style="text-align: right;">*/}
                    {/*<a href="/registers/engregister" style="color: #6a2d91;">Free English Registeration</a>*/}
                    {/* </div>*/}
                    <h4 className="text-center" style={{ color: '#da1599' }}>  Register to Meet Your Life Partner</h4>
                </div>
                <div className="panel panel-white">
                    <form className="validation_form" action="#" method="post" id="front-reg" encType="multipart/form-data">
                        <h6 className="form-wizard-title text-semibold">
                            <p>Personal Details</p>
                        </h6>
                        <div className="row register-row">
                            <div className="col-md-6" style={{ paddingRight: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Mobile Number <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control validate[required,custom[onlyNumberSp],minSize[10],maxSize[10]]" id="dob-phone-number" name="data[Register][phone_number]" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label> Name <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8"><input onkeypress="javascript:convertThis(event);" type="text" className="form-control validate[required]" name="data[Register][mname]" /></div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label> Religion </label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control select2" name="data[Register][religion]">
                                            <option value="Hindu">Hindu</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Jain">Jain</option>
                                            <option value="Jewish">Jewish</option>
                                            <option value="Parsi">Parsi</option>
                                            <option value="Sikh">Sikh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Subdivision </label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][subcaste]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Height <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control validate[required]" name="data[Register][height]">
                                            <option value="134C">4ft 5in</option>
                                            <option value="137C">4ft 6in</option>
                                            <option value="139C">4ft 7in</option>
                                            <option value="142C">4ft 8in</option>
                                            <option value="144C">4ft 9in</option>
                                            <option value="147C">4ft 10in</option>
                                            <option value="149C">4ft 11in</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Educational Qualification  <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control validate[required]" name="data[Register][educ]" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Work Place</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][w_place]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Alternative ability<spabel>
                                        </spabel></label></div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][different]">
                                            <option value="No" selected>NO</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row handicap">
                                    <div className="col-md-4">
                                        <label>Specify</label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" name="data[Register][handireason]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Family God<spabel>
                                        </spabel></label></div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][bestgod]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ paddingLeft: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Date of Birth <span className="reguired">*</span></label>
                                    </div>
                                    <div className="form-group col-md-8 row dob" style={{ paddingRight: 'unset' }}>
                                        <div className="col-md-4" style={{ paddingRight: 'unset' }}>
                                            <select name="data[Register][date]" id="dob-date" className="form-control validate[required]">
                                                <option value={0}>-Date-</option>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                                <option value={6}>6</option>
                                                <option value={7}>7</option>
                                                <option value={8}>8</option>
                                                <option value={9}>9</option>
                                                <option value={10}>10</option>
                                                <option value={11}>11</option>
                                                <option value={12}>12</option>
                                                <option value={13}>13</option>
                                                <option value={14}>14</option>
                                                <option value={15}>15</option>
                                                <option value={16}>16</option>
                                                <option value={17}>17</option>
                                                <option value={18}>18</option>
                                                <option value={19}>19</option>
                                                <option value={20}>20</option>
                                                <option value={21}>21</option>
                                                <option value={22}>22</option>
                                                <option value={23}>23</option>
                                                <option value={24}>24</option>
                                                <option value={25}>25</option>
                                                <option value={26}>26</option>
                                                <option value={27}>27</option>
                                                <option value={28}>28</option>
                                                <option value={29}>29</option>
                                                <option value={30}>30</option>
                                                <option value={31}>31</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4" style={{ paddingRight: 'unset' }}>
                                            <select name="data[Register][month]" id="dob-month" className="form-control validate[required]">
                                                <option value={0} selected>-Month-</option>
                                                <option value={1}>January</option>
                                                <option value={2}>February</option>
                                                <option value={3}>March</option>
                                                <option value={4}>April</option>
                                                <option value={5}>May</option>
                                                <option value={6}>June</option>
                                                <option value={7}>July</option>
                                                <option value={8}>August</option>
                                                <option value={9}>September</option>
                                                <option value={10}>October</option>
                                                <option value={11}>November</option>
                                                <option value={12}>December</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4" style={{ paddingRight: 'unset' }}>
                                            <select name="data[Register][year]" id="dob-year" className="form-control validate[required]">
                                                <option value={0}>-Year-</option>

                                                <option value={1981}>1981</option>
                                                <option value={1982}>1982</option>
                                                <option value={1983}>1983</option>
                                                <option value={1984}>1984</option>
                                                <option value={1985}>1985</option>
                                                <option value={1986}>1986</option>
                                                <option value={1987}>1987</option>
                                                <option value={1988}>1988</option>
                                                <option value={1989}>1989</option>
                                                <option value={1990}>1990</option>
                                                <option value={1991}>1991</option>
                                                <option value={1992}>1992</option>
                                                <option value={1993}>1993</option>
                                                <option value={1994}>1994</option>
                                                <option value={1995}>1995</option>
                                                <option value={1996}>1996</option>
                                                <option value={1997}>1997</option>
                                                <option value={1998}>1998</option>
                                                <option value={1999}>1999</option>
                                                <option value={2000}>2000</option>
                                                <option value={2001}>2001</option>
                                                <option value={2002}>2002</option>
                                                <option value={2003}>2003</option>
                                                <option value={2004}>2004</option>
                                                <option value={2005}>2005</option>
                                                <option value={2006}>2006</option>
                                                <option value={2007}>2007</option>
                                                <option value={2008}>2008</option>
                                                <option value={2009}>2009</option>
                                                <option value={2010}>2010</option>
                                                <option value={2011}>2011</option>
                                                <option value={2012}>2012</option>
                                                <option value={2013}>2013</option>
                                                <option value={2014}>2014</option>
                                                <option value={2015}>2015</option>
                                                <option value={2016}>2016</option>
                                                <option value={2017}>2017</option>
                                                <option value={2018}>2018</option>
                                                <option value={2019}>2019</option>
                                                <option value={2020}>2020</option>
                                                <option value={2021}>2021</option>
                                                <option value={2022}>2022</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Gender <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control  validate[required]" name="data[Register][sex]">
                                            <option value="Male">Male&nbsp;&nbsp;</option>
                                            <option value="Female">&nbsp;Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label> Race  <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control validate[required]" name="data[Register][caste]">
                                            <option value>-Select-</option>
                                            <option value={66}>Iyer</option>
                                            <option value={65}>Iyngar</option>
                                            <option value={64}>Fisherman</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Birth Time </label>
                                    </div>
                                    <div className="col-md-8"><input type="text" className="form-control" name="data[Register][birth_time]" /></div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Colour</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][complexion]">
                                            <option value="Fair">Fair</option>


                                            <option value="Black">Black</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Jobs,Career  <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control validate[required]" name="data[Register][occup]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Income </label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][income]" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>marital Status <span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control notranslate" name="data[Register][marital]">
                                            <option value="unmarried">Unmarried</option>
                                            <option value="married"> Married</option>
                                            {/*<option value="divorce"> Divorce</option>*/}
                                            {/*<option value="widow">Widow</option>*/}
                                            {/*<option value="widower">Widower</option>*/}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row children">
                                    <div className="col-md-4">
                                        <label>childrens</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][children]">
                                            <option value="No">No</option>
                                            <option value="Yes">Yes</option>
                                            <option value="Yes living together">Yes, living together</option>
                                            <option value="Yes not living together">Yes, not living together</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row children">
                                    <div className="col-md-4">
                                        <label>Children details
                                        </label></div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" name="data[Register][child_detail]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="form-wizard-title text-semibold">
                            <p>Family Details </p>
                        </h6>
                        <div className="row register-row">
                            <div className="col-md-6" style={{ paddingRight: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Father Name <label>
                                        </label></label></div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][father_name]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Father Work</label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" name="data[Register][dad_work]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Brothers </label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][brother]">
                                            <option>---Select---</option>
                                            <option value={0}>0</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Sisters</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][sister]">
                                            <option>---Select---</option>
                                            <option value={0}>0</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Registrar</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][profile]">
                                            <option value="Self" selected>Self</option>
                                            <option value="Parents">Parents</option>
                                            <option value="Guardian">Guardian</option>
                                            <option value="Relatives">Relatives</option>
                                            <option value="Friends">Friends</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Location</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][livesity]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Assests</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][peroparty]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Anticipation</label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" onkeypress="javascript:convertThis(event);" rows={2} name="data[Register][pob]" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ paddingLeft: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Mother Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][mother_name]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Mother Work</label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" name="data[Register][mom_work]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Married brothers </label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][m_brother]">
                                            <option>---Select---</option>
                                            <option value={0}>0</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Married sisters </label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][m_sister]">
                                            <option>---Select---</option>
                                            <option value={0}>0</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Native</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control " name="data[Register][puriveaam]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>சீர்வரிசை</label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control" name="data[Register][dever]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6 className="form-wizard-title text-semibold">
                            <p>Horoscope Details</p>
                        </h6>
                        <div className="row register-row" style={{ paddingBottom: '0px' }}>
                            <div className="col-md-4" style={{ paddingRight: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Star</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control " name="data[Register][star]">
                                            <option value>Select</option>
                                            <option value="Ashwini">Ashwini</option>
                                            <option value="Bharani">Bharani</option>
                                            <option value="Karthikai">Karthikai</option>
                                            <option value="Rohini">Rohini</option>
                                       
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Direction Balance </label>
                                    <select className="form-control" name="data[Register][stre_face]">
                                        <option value>Select</option>
                                        <option value="The great direction of the sun">The great direction of the sun</option>
                                        <option value="Lunar Great Direction">Lunar Great Direction</option>
                                       
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Foot</label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][patham]">
                                            <option value>---Select---</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label>லக்னம்</label>
                                    <select className="form-control" name="data[Register][gothra]">
                                        <option value>Select</option>
                                        <option value="Aries">Aries</option>
                                        
                                        <option value="Gemini">
                                           Gemini</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4" style={{ paddingLeft: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label> Zodiac Sign </label>
                                    </div>
                                    <div className="col-md-8">
                                        <select className="form-control" name="data[Register][moonsign]">
                                            <option value>Select</option>
                                            <option value="Aries">Aries</option>
                                        
                                        <option value="Gemini">
                                           Gemini</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Year</label>
                                        <input type="text" className="form-control" name="data[Register][s_year]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Month</label>
                                        <input type="text" className="form-control" name="data[Register][s_month]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Day</label>
                                        <input type="text" className="form-control" name="data[Register][s_day]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className style={{ marginTop: '30px' }}>
                            <img src="https://www.thirumagalmatrimonymadurai.in/app/webroot//img/chat_NEW.png" className="img-responsive" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
                            <div className="form-group table-responsive">
                                <table className="rassi-table" style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <textarea rows={2} name="data[Register][r1]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r2]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r3]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r4]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a1]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a2]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a3]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a4]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <textarea rows={2} name="data[Register][r5]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td colSpan={2} rowSpan={2} width={124} align="center">
                                                <img src="https://www.thirumagalmatrimonymadurai.in/app/webroot/img/raaasi.png" width={112} height={45} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r6]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a5]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td rowSpan={2} colSpan={2} width={133} align="center">
                                                <img src="https://www.thirumagalmatrimonymadurai.in/app/webroot/img/amsam.png" width={112} height={45} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a6]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <textarea rows={2} name="data[Register][r7]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r8]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a7]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td width={57} height={63} align="center">
                                                <textarea rows={2} name="data[Register][a8]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <textarea rows={2} name="data[Register][r9]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r10]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][r11]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a10]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a11]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                            <td>
                                                <textarea rows={2} name="data[Register][a12]" cols={2} className="form-control" defaultValue={""} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="form-group register-row" style={{ paddingBottom: '0px' }}>
                            <div className>
                                <h6>Select Your Favorite Star </h6>
                            </div>
                            <div className>
                                <ul className="list-unstyled list-inline your-fav-star">
                                    <li> <input type="checkbox" defaultValue="அசுவினி" name="data[Register][match_star[]]" />அசுவினி</li>
                                    <li> <input type="checkbox" defaultValue="பரணி" name="data[Register][match_star[]]" />பரணி</li>
                                    <li> <input type="checkbox" defaultValue="கார்த்திகை" name="data[Register][match_star[]]" />கார்த்திகை</li>
                                    <li> <input type="checkbox" defaultValue="ரோகிணி" name="data[Register][match_star[]]" />ரோகிணி</li>
                                    <li> <input type="checkbox" defaultValue="மிருகசீரிஷம்" name="data[Register][match_star[]]" />மிருகசீரிஷம்</li>
                                    <li> <input type="checkbox" defaultValue="திருவாதிரை" name="data[Register][match_star[]]" />திருவாதிரை</li>
                                    <li>  <input type="checkbox" defaultValue="புனர்பூசம்" name="data[Register][match_star[]]" />புனர்பூசம்</li>
                                    <li> <input type="checkbox" defaultValue="பூசம்" name="data[Register][match_star[]]" />பூசம்</li>
                                    <li> <input type="checkbox" defaultValue="ஆயில்யம்" name="data[Register][match_star[]]" />ஆயில்யம்</li>
                                    <li> <input type="checkbox" defaultValue="மகம்" name="data[Register][match_star[]]" />மகம்</li>
                                    <li> <input type="checkbox" defaultValue="பூரம்" name="data[Register][match_star[]]" />பூரம்</li>
                                    <li><input type="checkbox" defaultValue="உத்திரம்" name="data[Register][match_star[]]" />உத்திரம்</li>
                                    <li> <input type="checkbox" defaultValue="அஸ்தம்" name="data[Register][match_star[]]" />அஸ்தம்</li>
                                    <li> <input type="checkbox" defaultValue="சித்திரை" name="data[Register][match_star[]]" />சித்திரை</li>
                                    <li> <input type="checkbox" defaultValue="சுவாதி" name="data[Register][match_star[]]" />சுவாதி</li>
                                    <li> <input type="checkbox" defaultValue="விசாகம்" name="data[Register][match_star[]]" />விசாகம்</li>
                                    <li>  <input type="checkbox" defaultValue="அனுஷம்" name="data[Register][match_star[]]" />அனுஷம்</li>
                                    <li> <input type="checkbox" defaultValue="கேட்டை" name="data[Register][match_star[]]" />கேட்டை</li>
                                    <li> <input type="checkbox" defaultValue="மூலம்" name="data[Register][match_star[]]" />மூலம்</li>
                                    <li>  <input type="checkbox" defaultValue="பூராடம்" name="data[Register][match_star[]]" />பூராடம்</li>
                                    <li>  <input type="checkbox" defaultValue="உத்திராடம்" name="data[Register][match_star[]]" />உத்திராடம்</li>
                                    <li>  <input type="checkbox" defaultValue="திருவோணம்" name="data[Register][match_star[]]" />திருவோணம்</li>
                                    <li> <input type="checkbox" defaultValue="அவிட்டம்" name="data[Register][match_star[]]" />அவிட்டம்</li>
                                    <li> <input type="checkbox" defaultValue="சதயம்" name="data[Register][match_star[]]" />சதயம்</li>
                                    <li> <input type="checkbox" defaultValue="பூரட்டாதி" name="data[Register][match_star[]]" />பூரட்டாதி</li>
                                    <li> <input type="checkbox" defaultValue="உத்திரட்டாதி" name="data[Register][match_star[]]" />உத்திரட்டாதி</li>
                                    <li> <input type="checkbox" defaultValue="ரேவதி" name="data[Register][match_star[]]" />ரேவதி</li>
                                </ul>
                            </div>
                        </div>
                        <h6 className="form-wizard-title text-semibold">
                            <p>Contact Details</p>
                        </h6>
                        <div className="row register-row">
                            <div className="col-md-6" style={{ paddingRight: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Address<span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <textarea className="form-control validate[required]" rows={5} name="data[Register][address]" onkeypress="javascript:convertThis(event);" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>photo<span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <input className="validate[required]" type="file" name="data[Register][photopath]" accept="images/*" />
                                        <p style={{ marginTop: '10px', whiteSpace: 'nowrap' }}><small>Recommended Size: 363*523</small></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={{ paddingLeft: '30px' }}>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>City<span className="reguired">*</span></label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control validate[required]" name="data[Register][city]" onkeypress="javascript:convertThis(event);" />
                                    </div>
                                </div>
                                <div className="form-group row" style={{ marginTop: '35px' }}>
                                    <div className="col-md-4">
                                        <label>Extra Phone Number</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][mobile_number]" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label>Email Address </label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type="text" className="form-control" name="data[Register][email_id]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group" style={{ paddingLeft: '20px' }}>
                            <h6 style={{ fontSize: '14px', paddingBottom: '10px' }}>Please describe yourself in brief! like what type of person you are!</h6>
                            <textarea className="form-control" name="data[Register][comment]" rows={5} onkeypress="javascript:convertThis(event);" defaultValue={""} />
                        </div>
                        <div className="form-group" style={{ paddingLeft: '20px', fontSize: '14px' }}>
                            <input type="checkbox" name="data[Register][accept]" defaultValue="ON" defaultChecked style={{ marginRight: '7px' }} />I Accept the <a href="https://www.thirumagalmatrimonymadurai.in/staticpages/terms" target="_blank">term and Conditions</a>
                        </div>
                        <div className>
                            <div className="g-recaptcha" data-sitekey="6LcC4aQUAAAAAKnqHg8grPN1AaevX5HXp1SDNlr_" />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <input className="btn btn-info reg-submit" defaultValue="Submit" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>












    )
}

export default Registration;