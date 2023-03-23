import { useState } from 'react';
// import { productHandler } from '../handlers/productHandler';
import SideBar from '../components/SideBar';
import './styleSheetPages/Login.css';

const CreateLogin = () => {

 
  const [e_Mail, setE_Mail] = useState("");
  const [password, setPassword] = useState("");

      
  const handleE_MailChange = (event) => {
    let e_MailInput = event.target.value;
    setE_Mail(e_MailInput);
  };
  const handlePasswordChange = (event) => {
    let passwordInput = event.target.value;
    setPassword(passwordInput);
  };    
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newLogin = { e_Mail, password,  };
    LogintHandler.addLogin(newLogin);
    event.target.reset()
  };


  return (
    <>
    <SideBar/>
    <div className="container-form">
      <form onSubmit={handleSubmit}  itemID="form1">
        <h1>Welcome Back!</h1>

        
        <div className="mb-3">
          <label htmlFor="e_Mail" className="form-label">E-Mail</label>
          <input name="E_Mail" type="text"  className="form-control" placeholder="Type Your E-Mail" onChange={handleE_MailChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input name="Password" type="text" className="form-control" id="input-password" required placeholder="Type Password" onChange={handlePasswordChange} />
        </div>

                    

        <button type="submit" className="btn btn-primary" id="btn-ad">log-In</button>

       
      </form>
    </div>
  </>
  );
};
export default CreateLogin;
