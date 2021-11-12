import React from 'react';
import car from '../../iamges/ppp-removebg-preview.png'

const AboutUS = () => {
    return (
        <div className="d-flex bg-dark
        ">
            <div className="col-md-6">
                <p className="text-white py-5">Part of CarTrade Tech, CarTrade is an automotive portal for cars. Customers come to CarTrade to buy new or used cars or to sell their cars. They can also research our content and use our tools such as car reviews, price guides, car specifications, car images, used car inventory, car finance offers and trade-in tools. They can inquire about a new or used car and we connect them to a new or used car dealer or OEM.</p>
                
            </div>
            <div className="col-md-6">
                <img src={car}alt=""/>
                

            </div>
        </div>
    );
};

export default AboutUS;