import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Form, Spinner, Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import login from '../../iamges/login-removebg-preview.png'
import useAuth from '../hooks/useAuth';


const Register = () => {
//     const[loginData,setLoginData]=useState({})

// const{registerUser}=useAuth()

//     const handleLoginSubmit=e=>{
//         if(loginData.password!==loginData.password2){
//           alert("Your password didn't match")
//           return

//         }
//         registerUser(loginData.email,loginData.password)
//         e.preventDefault();
//       }
  
//       const handleOnChange=e=>{
//         const field=e.target.name;
//         const value=e.target.value;
//        const newLogInData={...loginData}
       
//        newLogInData[field]=value
//        console.log(newLogInData)
//        setLoginData(newLogInData)
  
//       }


//     return (
//         <div className="d-flex mb-5">
//             <div className="col-md-6">
//             <img src={login} alt=""/>
                
//             </div>
//             <div className="col-md-6">
//             <h2 className="pt-2">Please Register</h2>
//             <form onSubmit={handleLoginSubmit}>
              
//             <input className="w-50 my-2 p-2" type="email" name="email" onChange={handleOnChange} placeholder="Your email" id="" />
               
               
//                <br/>
//                 <input className="w-50 my-2 p-2" type="password" name="password" onChange={handleOnChange} placeholder="Your password" id="" />
//                 <br/>
//                 <input className="w-50 my-2 p-2" type="password" name="password2" onChange={handleOnChange} placeholder="Rewrite Your Password" id="" />
//                 <br/>
//                 <Button className="px-5">Login</Button>
//                 </form>
//                 Already Registered <Link to="/login">Please Login</Link> 

//             </div>
//              <h2 className="pt-2">Please Register</h2>
            
//                 Already Registered?<Link style={{
//   textDecoration:"none"
// }} to="/login">Please Login</Link> 
//         </div>
//     );
// };
const [loginData, setLoginData] = useState([]);
const { registerUser, isLoading, user, authError } = useAuth();
const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
}
console.log(loginData);
const handleRegisterSubmit = e => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
        alert('Password did not match!');
        return;
    }
    registerUser(loginData.email, loginData.password)
}
return (
    <Container>
        {!isLoading && <Form className="w-25 mx-auto" onSubmit={handleRegisterSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name="password2" onChange={handleOnChange} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <NavLink style={{ textDecoration: 'none' }} to="/login">Already Registerd? Please click here to login</NavLink>
        </Form>}
        {
            isLoading && <div className="d-flex justify-content-center "> <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner></div>
        }
        {
            user?.email && <Alert variant="success">
                Succesfully Registered! <NavLink to="/login">Click Here</NavLink> to login.
            </Alert>
        }
        {
            authError && <Alert variant="danger">
                {authError}
            </Alert>
        }
    </Container>
);
};

    

export default Register;