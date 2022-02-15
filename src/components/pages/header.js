import React from 'react';


function Header() {
    return (
        
<div className="border">
<div className="container">
    <div className="row">
        <div className="col-md-7">
            <a className="navbar-brand" href="https://www.thirumagalmatrimonymadurai.in">
                <img className="logo" src={ require('../../assests/images/logo_Final_new.png') } />
            </a>
        </div>
        <div className="col-md-5">
            <div className="details">
                <ul className="list-unstyled list-inline">
                <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                    <li><img src={ require('../../assests/images/loginph.png') } /><span >99 43 31 53 31</span></li>
                    <li>
                    <select Classname="Language">
<option value="தமிழ்">தமிழ்</option>
<option value="English">English </option>
</select>
                        {/* <div className="dropdown flag">
                            <button className="btn custom dropdown-toggle" type="button" data-toggle="dropdown">
                                தமிழ்
                                <span className="caret" />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a href="#" className="tamil notranslate" data-lang="Tamil">தமிழ்</a></li>
                                <li><a href="#" className="english notranslate" data-lang="English">English</a></li>
                            </ul>
                        </div> */}
                    </li>
                    <li><a href="mailto: thirumagalmatrimonymadurai@gmail.com"> </a><p><a href="mailto: thirumagalmatrimonymadurai@gmail.com">  <img src={ require('../../assests/images/loginmail.png') } /><span>thirumagalmatrimonymadurai@gmail.com</span></a></p></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content" style={{"border-radius":"20px"}}>
            <button type="button" className="close" data-dismiss="modal">×</button>
            <div className="modal-body member-login-popup">          
              <ul className="nav nav-pills">
                <li><i className="fa fa-heart-o" aria-hidden="true" /><a data-toggle="pill" href="#find" id="mysoul">FIND MY SOULMATE</a></li>
                <li className="active"><i className="fa fa-user-circle-o" aria-hidden="true" /><a data-toggle="pill" href="#mlogin" id="mylogin">MEMBER LOGIN</a></li>                 
              </ul>
              <div className="tab-content">
                <div id="find" className="tab-pane fade">
                  <form method="get" action="https://www.thirumagalmatrimonymadurai.in/registers/searchresult">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>ID</label>
                          <input type="text" placeholder="Search by ID (Ex : TMM-200)" autoComplete="off" defaultValue className="form-control validate[required]" name="n" />
                          {/*<input type="text" class="form-control" name="id" onkeypress="javascript:convertThis(event);">*/}
                        </div>
                        <div className="col-md-6">
                          <label>தேடுவது </label>
                          <select className="form-control validate[required]" name="marital">
                            <option value>---Select---</option>
                            <option value="ஆண்">ஆண்</option>
                            <option value="பெண்">பெண்</option>                               
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>மதம்</label>
                          <select className="form-control validate[required]" name="religion">
                            <option value>---Select---</option>
                            <option value="Hindu">இந்து</option>
                            <option value="Muslim">முஸ்லீம்</option>
                            <option value="Christian">கிறிஸ்துவர்</option>
                            <option value="Jain">சமணம் </option>
                            <option value="Jewish">ஜெவிஸ்</option>
                            <option value="Parsi">பார்சி</option>
                            <option value="Sikh">சீக்கியர்</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label>ஜாதி</label>
                          <select className="form-control validate[required]" name="caste">
                            <option value>---Select---</option>
                            <option value={2}>நாடார்</option>
                            <option value={39}>குறவர்</option>
                            <option value={53}>ஐயங்கார்</option>
                            <option value={5}>யாதவர்</option>
                            <option value={38}>அகமுடையார்</option>
                            <option value={8}>கள்ளர்</option>
                            <option value={9}>மறவர்</option>
                            <option value={10}>செட்டியார்</option>
                            <option value={11}>கிறிஸ்தவர்</option>
                            <option value={12}>முதலியார்</option>
                            <option value={36}>நாயுடு</option>
                            <option value={35}>பிள்ளைமார் </option>
                            <option value={15}>PR</option>
                            <option value={16}>PL</option>
                            <option value={17}>ரெட்டியார்</option>
                            <option value={18}>கவுண்டர்</option>
                            <option value={19}>முஸ்லீம்</option>
                            <option value={37}>விஷ்வகர்மா</option>
                            <option value={22}>அருந்ததியர்</option>
                            <option value={23}>நாயர்</option>
                            <option value={24}>மூப்பனார்</option>
                            <option value={25}>மருத்துவர்</option>
                            <option value={26}>வீரசைவம்</option>
                            <option value={27}>வண்ணார்</option>
                            <option value={28}>வன்னியர்</option>
                            <option value={29}>சௌராஷ்டிரா</option>
                            <option value={30}>நாயக்கர்</option>
                            <option value={31}>வெள்ளாளர்</option>
                            <option value={32}>உடையார்</option>
                            <option value={33}>முத்துராஜா</option>
                            <option value={34}>முத்தரையர்</option>
                            <option value={40}>பிராமின்</option>
                            <option value={41}>வேளார்</option>
                            <option value={42}>தேவர் மறவர்</option>
                            <option value={43}>வள்ளுவர்</option>
                            <option value={44}>கருனிகர்</option>
                            <option value={45}>மீனவர்</option>
                            <option value={46}>ஐயர்</option>
                            <option value={47}>போயர்</option>
                            <option value={48}>தேவர்</option>
                            <option value={49}>வள்ளுவன்</option>
                            <option value={52}>குலாளர்</option>
                            <option value={54}>ஐயங்கார்</option>
                            <option value={55}>பத்தர்</option>
                            <option value={56}>வளையர்</option>
                            <option value={58}>மராட்டி</option>
                            <option value={59}>யோகிஸ்வரர்</option>
                            <option value={61}>சத்ரிய ராஜூ</option>
                            <option value={64}>சாத்தாத ஸ்ரீவைஷ்ணவ</option>
                            <option value={65}>எஸ்.டி</option>
                            <option value={66}>ஈலுவர்</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form_group">
                      <div className="row">
                        <div className="col-md-6">
                          <label>உட்பிரிவு</label>
                          <input type="text" className="form-control" name="subcaste" onkeypress="javascript:convertThis(event);" />
                        </div>
                        <div className="col-md-6">
                          <label>திருமண நிலை</label>
                          <select className="form-control validate[required]" name="marriage_condition">
                            <option value>---Select---</option>
                            <option value="unmarried"> முதல் மணம்</option>
                            <option value="married"> மறுமணம்</option>                           
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="age-top">வயது </label>
                      <div className="row">
                        <div className="col-md-6">                                   
                          <select className="form-control validate[required]" name="from">
                            <option value>---From---</option>
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
                            <option value={32}>32</option>
                            <option value={33}>33</option>
                            <option value={34}>34</option>
                            <option value={35}>35</option>
                            <option value={36}>36</option>
                            <option value={37}>37</option>
                            <option value={38}>38</option>
                            <option value={39}>39</option>
                            <option value={40}>40</option>
                            <option value={41}>41</option>
                            <option value={42}>42</option>
                            <option value={43}>43</option>
                            <option value={44}>44</option>
                            <option value={45}>45</option>
                            <option value={46}>46</option>
                            <option value={47}>47</option>
                            <option value={48}>48</option>
                            <option value={49}>49</option>
                            <option value={50}>50</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <select className="form-control validate[required]" name="to">
                            <option value>---To---</option>
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
                            <option value={32}>32</option>
                            <option value={33}>33</option>
                            <option value={34}>34</option>
                            <option value={35}>35</option>
                            <option value={36}>36</option>
                            <option value={37}>37</option>
                            <option value={38}>38</option>
                            <option value={39}>39</option>
                            <option value={40}>40</option>
                            <option value={41}>41</option>
                            <option value={42}>42</option>
                            <option value={43}>43</option>
                            <option value={44}>44</option>
                            <option value={45}>45</option>
                            <option value={46}>46</option>
                            <option value={47}>47</option>
                            <option value={48}>48</option>
                            <option value={49}>49</option>
                            <option value={50}>50</option>
                            <option value={51}>51</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input type="submit" name="search" className="button small btn btn-primary" defaultValue="தேடல்" />                                   
                    </div>
                  </form>
                  <div className="advanced-searc-lnk">
                    <a href="https://www.thirumagalmatrimonymadurai.in/registers/register">புதியதா? இங்கே பதிவு செய்யுங்கள்!</a>
                  </div>
                </div> 
                <div id="mlogin" className="tab-pane fade in active">
                  <form method="post" action="https://www.thirumagalmatrimonymadurai.in/registers/mlogin" className="validation_form geting-otp">
                    <div className="form-group">  
                      <div className="form-group">
                        <label>பிறந்த தேதி</label>
                        <input type="text" autoComplete="off" id="dobdatepicker" className="form-control" name="data[Register][date_of_birth]" />
                      </div>
                      {/*<label>பிறந்த தேதி<span class="reguired">*</span></label>                                   */}
                      {/*<div class="row">*/}
                      {/*    <div class="col-md-4">*/}
                      {/*          */}
                      {/*    </div>*/}
                      {/*    <div class="col-md-4">*/}
                      {/*        */}
                      {/*    </div>*/}
                      {/*    <div class="col-md-4">*/}
                      {/*          */}
                      {/*    </div>*/}
                      {/*</div>*/}
                    </div>
                    <div className="form-group">
                      <label>மொபைல் நம்பர் <span className="reguired">*</span></label>
                      <input type="text" className="form-control validate[required] phone_number" autoComplete="off" id="phone_number" name="data[Register][phone_number]" style={{"margin-bottom":"13px"}} />
                      {/*<small>OTP will be send to this mobile number</small>*/}
                      {/*<small style="float:right"><input type="button" id="resend_otp" value="Resend OTP ?"></small>*/}
                    </div>     
                    {/*<div class="form-group otp">*/}
                    {/*    <label>OTP</label>*/}
                    {/*    <input type="text" id="otp" class="form-control" name="data[Register][otp]"/>*/}
                    {/*</div>*/}
                    <input type="submit" className="btn send-otp" defaultValue="SUBMIT" />
                  </form>  
                  <div className="advanced-searc-lnk">
                    <a href="https://www.thirumagalmatrimonymadurai.in/registers/register">புதியதா? இங்கே பதிவு செய்யுங்கள்!</a>
                  </div>
                </div>                       
              </div>
            </div>             
          </div>
        </div>
      </div>


        
       
     
</div>




)
}
export default Header;