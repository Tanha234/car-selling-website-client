import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{ console.log(data);
  axios.post('http://localhost:7000/cars',data)
    .then(res=>{
        console.log(res)

    })
}
    return (
        <div>

      
<form onSubmit={handleSubmit(onSubmit)}>
 <label className="fs-5 me-5">Name:</label>
      <input className="w-50 mt-3 py-2" {...register("name", { required: true, maxLength: 20 })} />
      <br/>
      <label className="fs-5 me-5">Email:</label>
      <input className="w-50 mt-3 py-2" {...register("description")} />
      <br/>
      <label className="fs-5 me-5"> Place:</label>
      <input  className="w-50 mt-3 py-2"{...register("img")} />
      <br/>
      <label className="fs-5 me-5">Cost:</label>
      <input className="w-50 mt-3 py-2"type="number" {...register("price")} />
      <br/>
      <input className="px-5 py-2 mt-2" type="submit" />
    </form>
           

            </div>
    );
};

export default AddUser;