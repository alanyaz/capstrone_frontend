import React, { useState } from 'react';

const Contact = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent : "center"  , alignItems : "center", marginTop: '50px' }}>
        <p style={{fontWeight : 600 , fontSize : "1.4rem"}}>Contact Us</p>
      <input
        type="text"
        placeholder="Full Name"
        style={{ margin: '10px 0', padding: '10px', width: '20rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        placeholder="email"
        style={{ margin: '10px 0', padding: '10px', width: '20rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        placeholder="Enter Your message"
        style={{ margin: '10px 0', padding: '10px', width: '20rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button  style={{ padding: '10px 20px', width : "21rem", marginTop : '1rem', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>
        Submit
      </button>
    </div>
  );
};

export default Contact;
