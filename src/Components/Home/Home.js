import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';

import Products from '../Products/Products';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    return (
        <div className="home">
             <Banner/> 
           {/* <AboutUS/> */}
            <Products/> 
            <Vehicle/>
        </div>
    );
};

export default Home;