import React from 'react';
import AboutUS from '../AboutUS/AboutUS';
import Banner from '../Banner/Banner';
import HomeReview from '../HomeReview/HomeReview';

import Products from '../Products/Products';
import Review from '../Review/Review';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    return (
        <div className="home">
             <Banner/> 
           {/* <AboutUS/> */}
            <Products/> 
            <Vehicle/>
           <HomeReview/>
        </div>
    );
};

export default Home;