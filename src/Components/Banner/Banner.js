import React, { useEffect } from 'react';
import car from '../../iamges/ppp-removebg-preview.png'
import '../Banner/Banner.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration:1000})

    },[])
    return (
        <div className="banner d-flex ">
            <div className="col-md-6 pt-5 mt-5 my-5">
                <div className="pt-5 mt-5">
                <h1 className="mt-5 pt-5 fs-1 fw-bolder bold ">Find your dream car with CarFlick</h1>
              <h5 className="mt-2 pt-4 bold">High Performance & Outstanding Technology Combined
</h5>
</div>
              
                

            </div>
            
            <div   className="col-md-6 pt-5  ">
                <div data-aos="fade-left"  className="mx-auto my-5 pt-5">
                <img  className="mx-auto my-5 pt-5" src={car}alt=""/>
                </div>
                
                

            </div>
            
            
        </div>
    );
};

export default Banner;