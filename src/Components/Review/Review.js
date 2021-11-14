import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{ console.log(data);

    axios.post('https://agile-tor-83300.herokuapp.com/review',data)
    .then(res=>{
       alert("submitted")
        console.log(res)

    })
}
    return (
       
            <div className="col-md-12">
                <h2>Give Review </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
 <label className="fs-5 me-5">Name:</label>
      <input className="w-50 mt-3 py-2" {...register("name", { required: true, maxLength: 20 })} />
      <br/>
      <label className="fs-5 me-5">Review</label>
      <input className="w-50 mt-3 py-4" {...register("description")} />
      <br/>
      {/* <label className="fs-5 me-5"> :</label>
      <input  className="w-50 mt-3 py-2"{...register("img")} />
      <br/> */}
      
      <br/>
      <input className="px-5 py-2 mt-2" type="submit" />
    </form>
        </div>
        
      
    );
};

export default Review;