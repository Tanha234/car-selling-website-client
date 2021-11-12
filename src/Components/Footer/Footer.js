import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="col-md-12 pt-5">
                <h4 >CarFlick</h4>
                <hr className="w-25 mx-auto" />
                <p>: Showroom location :</p>
             <div className="d-flex px-5 mx-5 container"> <p>  32 Market St.128, Deeja Town, Florida, CA 12345 </p>
              <p className="me-4">PHONE: +1 (234) 567 8900 </p>
              <p className="me-4">  FAX: +1 (234) 567 8998 </p>
              <p className="me-4">  EMAIL: info@autozone.com </p>
              <p className="me-4">HOURS: Mon - Fri :: 9am - 6pm</p></div>
              <p>Follow us</p>
            <i className="fab fa-facebook-square me-2"></i>

<i className="fab fa-instagram-square me-2"></i>
<i className="fab fa-youtube me-2"></i>
<i className="fab fa-twitter-square"></i>

<br/>
<br/>

            </div>
            
        </div>
    );
};

export default Footer;