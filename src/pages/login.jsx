import React, { useState } from 'react';
import { login } from '../services/authServcice';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const send = async () => {
    console.log({email})
    console.log({password})
    login({email, password}).then(res=>{
      console.log({res})
      if(res.Success){
        navigate("/")
      }else{
        alert(res.error)
      }
    })
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent : "center"  , alignItems : "center", marginTop: '50px' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ margin: '10px 0', padding: '10px', width: '20rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ margin: '10px 0', padding: '10px', width: '20rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button onClick={send} style={{ padding: '10px 20px', width : "21rem", marginTop : '1rem', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
        Login
      </button>
      <p>Don't have an account? <Link to={"/signup"}>Sign up</Link></p>
    </div>
  );
};

export default Login;
