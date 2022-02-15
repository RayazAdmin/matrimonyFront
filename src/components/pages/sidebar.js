import React from 'react';
import './sidebar.css';


function Sidebar() {
    return (
        <div>
             
        <div className="sidebar">
        <div>
         
          {/* <img  className="circular--square" src={ require('../../assests/images/user.jpg') }  /> */}
        
        
      </div>
          <a  href="#myprofile">My Profile</a>
          <a href="#Membership">Membership Details</a>
          <a href="#contact">Payment Details</a>
          <a href="#about">Password Change</a>
          <a href="#about">Logout</a>
        </div>
        <section  id= "myprofile">
        <div className="content">
        <div className="container-fluid" >
        <div className="row">
          <div className="text-center single-user col-md-8">
            <div className="edit text-right">
              <a href="https://www.thirumagalmatrimonymadurai.in/registers/editprofile/" style={{background: 'linear-gradient(#da189b,#9f2496)', color: '#fff', fontWeight: 600, padding: '8px 33px', textAlign: 'left'}}>Edit Profile</a>
            </div>
            <div className="row">
              <div>
                <a  href="https://www.thirumagalmatrimonymadurai.in/profiles/86243IMG-20210811-WA0047.jpg">
                  <img src="https://www.thirumagalmatrimonymadurai.in/profiles/86243IMG-20210811-WA0047.jpg" className="img-responsive view-user-profile" />
                </a>
                <p style={{color: '#000', fontSize: '20px', marginBottom: '25px'}}>TMM-38574</p>
              </div>
              <div className="col-md-6">
                <p style={{background: 'linear-gradient(#da189b,#9f2496)', color: '#fff', fontWeight: 600, padding: '8px 33px', textAlign: 'left'}}>PERSONAL DETAILS</p><table className="table">
                  <tbody>      
                    <tr />   
                    <tr>
                      <th scope="row">பெயர்</th>
                      <td>N. ரமேஷ்குமார் </td>                
                    </tr>   
                    <tr>
                      <th scope="row">கல்வித்தகுதி</th>
                      <td>D. (EEE)</td>                
                    </tr> 
                    <tr>
                      <th scope="row">திருமண நிலை </th>
                      <td>unmarried</td>                
                    </tr>
                    <tr>
                      <th scope="row">உட்பிரிவு </th>
                      <td>கம்மவர் நாயுடு (மஞ்சிநிலார்)</td>                
                    </tr>
                    <tr>
                      <th scope="row">இனம்</th>
                      <td>நாயுடு</td>                
                    </tr>
                    <tr>
                      <th scope="row">வயது</th>
                      <td>34</td>                
                    </tr>
                    <tr>
                      <th scope="row">பிறந்த தேதி</th>
                      <td>1 - 5 - 1988 &amp; </td>                
                    </tr>
                    <tr>
                      <th scope="row">உயரம்</th>
                      <td>5ft 8in</td>                
                    </tr>
                    <tr>
                      <th scope="row">நிறம்</th>
                      <td>சிகப்பு</td>                
                    </tr>
                    <tr>
                      <th scope="row">வேலை/தொழில்</th>
                      <td>லேப் டெக்னீசியன் </td>                
                    </tr>
                    <tr>
                      <th scope="row">சம்பள வருமானம்</th>
                      <td>23000</td>                
                    </tr>
                    <tr>
                      <th scope="row">பணிபுரியும் இடம்</th>
                      <td>கோவில்பாளையம் </td>                
                    </tr>
                    <tr style={{background: 'linear-gradient(#da189b,#9f2496)', color: '#fff', fontWeight: 600, padding: '8px'}}><td style={{padding: '8px 33px'}}>FAMILTY DETAILS</td><td /></tr>
                    <tr>
                      <th scope="row">தந்தை பெயர்</th>
                      <td>நாராயணசாமி </td>                
                    </tr>
                    <tr>
                      <th scope="row">தாய் பெயர்</th>
                      <td>விமலா</td>                
                    </tr>
                    <tr>
                      <th>தந்தையின் வேலை</th>
                      <td>டெய்லர்</td>
                    </tr>
                    <tr>
                      <th>தாயின் வேலை</th>
                      <td>இல்லத்தரசி </td>
                    </tr>
                    <tr><th scope="row">உடன் பிறப்பு (இவரையும் சேர்த்து)</th>
                      <td>0</td>                
                    </tr>
                    <tr>
                      <th scope="row">ஆண்</th>
                      <td>0</td>                
                    </tr>
                    <tr>
                      <th scope="row">பெண்</th>
                      <td>0</td>                
                    </tr>
                    <tr>
                      <th scope="row">திருமணமானவர்</th>
                      <td>0</td>                
                    </tr>
                    <tr>
                      <th scope="row">ஆண்</th>
                      <td>0</td>                
                    </tr>
                    <tr>
                      <th scope="row">பெண்</th>
                      <td>0</td>                
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table">
                  <tbody>  
                    <tr>
                      <th scope="row">இருப்பிடம்</th>
                      <td>கோவை</td>                
                    </tr>
                    <tr>
                      <th>குல தெய்வம்</th>
                      <td>ரேணுகாஅக்கம்மாள்</td>
                    </tr>
                    <tr>
                      <th scope="row">சீர் வருசை</th>
                      <td>நேரில் </td>                
                    </tr>
                    <tr>
                      <th scope="row">எதிர்பார்ப்பு</th>
                      <td>  மறுமணம் குழந்தை இல்லாத வரன் சம்மதம் நாயுடு கம்மவர் மட்டும் கோவை சரோண்டிங் மட்டும் </td>                
                    </tr>
                    <tr>
                      <th scope="row">சொத்துக்கள்</th>
                      <td>சொந்த வீடு2 1கோடி சொத்து இருக்கு 3செண்ட் பிளாட்</td>                
                    </tr>
                    <tr>
                      <th scope="row">பதிவுசெய்பவர்</th>
                      <td>Self</td>                
                    </tr>
                    <tr>
                      <th scope="row">பூர்வீகம்</th>
                      <td>அத்திபாளையம், கோவை </td>                
                    </tr>
                    <tr style={{background: 'linear-gradient(#da189b,#9f2496)', color: '#fff', fontWeight: 600, padding: '8px'}}>
                      <td style={{padding: '8px 33px'}}>HOROSCOPE DETAILS</td><td />
                    </tr>
                    <tr>
                      <th scope="row">நட்சத்திரம்</th>
                      <td>சித்திரை</td>                
                    </tr>
                    <tr>
                      <th scope="row">ராசி</th>
                      <td>துலாம்</td>                
                    </tr>
                    <tr>
                      <th scope="row">லக்னம்</th>
                      <td>கும்பம்</td>                
                    </tr>
                    <tr>
                      <th scope="row">திசை இருப்பு</th>
                      <td>செவ்வாய் மகா திசை</td>                
                    </tr>
                    <tr>
                      <th scope="row">வருடம்</th>
                      <td />                
                    </tr>
                    <tr>
                      <th scope="row">மாதம்</th>
                      <td />                
                    </tr>
                    <tr>
                      <th scope="row">நாள்</th>
                      <td />                
                    </tr>
                    <tr>
                      <th scope="row">பாதம்</th>
                      <td />                
                    </tr>
                    <tr>
                      <th scope="row">தங்களை பற்றி</th>
                      <td />                
                    </tr>
                    <tr style={{background: 'linear-gradient(#da189b,#9f2496)', color: '#fff', fontWeight: 600, padding: '8px'}}><td style={{padding: '8px 33px'}}>ADDRESS DETAILS</td><td /></tr>
                    <tr>
                      <th scope="row">கைபேசி எண்</th>
                      <td>8675527277  
                        9942732749                                                </td>                
                    </tr>
                    <tr>
                      <th scope="row">முகவரி</th>
                      <td>   2/50, அத்திபாளையம் (போஸ்ட்),
                        மேற்கு வீதி, 
                        வையம்பாளையம்,
                        கோவை _ 641 110.
                      </td>                
                    </tr>
                    <tr>
                      <th scope="row">இமெயில் முகவரி</th>
                      <td />                
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div id="kattam">
              <table border={0}>
                <tbody><tr>
                    <td align="center">                     
                      <textarea rows={3} cols={5} name="data[Register][r1]" defaultValue={"                     \n                    "} />
                    </td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r2]" defaultValue={"                    சூவி                    "} />
                    </td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r3]" defaultValue={"                   \n                    "} />
                    </td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r4]" defaultValue={"                   புசு                    "} />
                    </td> 
                    <td rowSpan={4} align="center" style={{background: '#fff'}}><img src="https://www.thirumagalmatrimonymadurai.in/img/thambulam-green.png" height={100} /></td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a1]" defaultValue={"                   பு                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a2]" defaultValue={"                   சனி                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a3]" defaultValue={"                   ரா                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a4]" defaultValue={"                                       "} />
                    </td> 
                  </tr>
                  <tr>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r5]" defaultValue={"                   லரா                    "} />
                    </td> 
                    <td colSpan={2} rowSpan={2} align="center">
                      <p align="center"><img src="https://www.thirumagalmatrimonymadurai.in/img/rasi-blue.png" width={112} height={45} /></p>
                    </td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r6]" defaultValue={"                                       "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a5]" defaultValue={"                                       "} />
                    </td> 
                    <td rowSpan={2} colSpan={2} align="center">
                      <p align="center"><img src="https://www.thirumagalmatrimonymadurai.in/img/amsam-blue.png" width={112} height={45} />
                      </p></td>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a6]" defaultValue={"                                       "} />
                    </td> 
                  </tr>
                  <tr>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r7]" defaultValue={"                   செ                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r8]" defaultValue={"                   கே                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a7]" defaultValue={"                   செ                \n                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a8]" defaultValue={"                   கே                    "} />
                    </td> 
                  </tr>
                  <tr>
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r9]" defaultValue={"                   சனி                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r10]" defaultValue={"                                       "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r11]" defaultValue={"                   ச                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][r12]" defaultValue={"                                       "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a9]" defaultValue={"                   ல                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a10]" defaultValue={"                   ச                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a11]" defaultValue={"                   சு                    "} />
                    </td> 
                    <td align="center">
                      <textarea rows={3} cols={5} name="data[Register][a12]" defaultValue={"                   சூவி                    "} />
                    </td> 
                  </tr>
                </tbody></table>
            </div>
          </div>
         
        </div>
      </div>
      </div>
      </section>
      <section   >
        <h1>hello</h1>
     





      </section>
      


</div>
     
     )
 }
 export default Sidebar;