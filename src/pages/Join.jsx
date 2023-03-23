
import { useState } from 'react';
// import { productHandler } from '../handlers/productHandler';
import SideBar from '../components/SideBar';
import './styleSheetPages/Join.css';

const CreateJoin = () => {

  const [name, setName] = useState("");
  const [e_Mail, setE_Mail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [shipping_Address, setShipping_Address] = useState("");
  const [phone_Number, setPhone_Number] = useState("");
  


  const handleNameChange = (event) => {
    let nameInput = event.target.value;
    setName (nameInput);
  };
  const handleE_MailChange = (event) => {
    let e_MailInput = event.target.value;
    setE_Mail(e_MailInput);
  };
  const handlePasswordChange = (event) => {
    let passwordInput = event.target.value;
    setPassword(passwordInput);
  };

  const handleAgeChange = (event) => {
    let ageInput = event.target.value;
    setAge(ageInput);
  };

  const handlShipping_AddressChange = (event) => {
    let shipping_AddressInput = event.target.value;
    setShipping_Address(shipping_AddressInput);
  };

  const handlPhone_NumberChange = (event) => {
    let phone_NumberInput = event.target.value;
    setPhone_Number(phone_NumberInpu);
  };
   
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newJoin = { name, e_Mail, password, age, shipping_Address, phone_Number, };
    jointHandler.addJoin(newJoin);
    event.target.reset()
  };



  return (
    <>
    <SideBar/>
    <div className="container-form">
      <form onSubmit={handleSubmit}  itemID="form1">
        <h1>Join Us</h1>

        <div className="mb-3">
          <label htmlFor=" name" className="form-label"> Name Last Name</label>
          <input focus name=" Name" type="text" className="form-control" placeholder="Type Your Name Last Name" onChange={handleNameChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="e_Mail" className="form-label">E-Mail</label>
          <input name="E_Mail" type="text"  className="form-control" placeholder="Type Your E-Mail" onChange={handleE_MailChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input name="Password" type="text" className="form-control" id="input-password" required placeholder="Type Password" onChange={handlePasswordChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="age">Age </label>
          <input name="Age" type="date" min="1" className="form-control" id="input-age" required placeholder="Age (Date Format)" onChange={handleAgeChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="shipping_Address">Shipping Address</label>
          <input name="Shipping_Address" type="text" className="form-control" id="input-shipping Address" required placeholder="Type Shipping Address" onChange={handlShipping_AddressChange} />
        </div>    

        <div className="mb-3">
          <label className="form-label" htmlFor="phone_Number">Phone Number</label>
          <input name="Phone_Number" type="number" className="form-control" id="input-phone_Number" required placeholder="Type Phone Number" onChange={handlPhone_NumberChange} />
        </div>      

        <button type="submit" className="btn btn-primary" id="btn-ad">Send</button>

       
      </form>
    </div>
  </>
  );
};
export default CreateJoin;
