import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ console.log(data);
  axios.post('https://agile-tor-83300.herokuapp.com/cars',data)
    .then(res=>{
        alert('Added Product')
        console.log(res)

    })
}
    return (
        <div>

      
<form onSubmit={handleSubmit(onSubmit)}>
    <h2>Add a Product</h2>

      <label className="fs-5 me-3"> Product:</label>
      <input  className="w-50 mt-3 py-2"{...register("product")} />
      <br/>
      <label className="fs-5 me-3">Description:</label>
      <input  className="w-50 mt-3 py-2"{...register("description")} />
      <br/>
      <label className="fs-5 me-5">Cost:</label>
      <input className="w-50 mt-3 py-2"type="number" {...register("price")} />
      <br/>
      <label className="fs-5 me-5"> img:</label>
      <input  className="w-50 mt-3 py-2"{...register("img")} />
      <br/>
      
      <input className="px-5 py-2 mt-2" type="submit" />
    </form>
           

            </div>
    );
};

export default AddUser;