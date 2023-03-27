import { useState } from 'react';
import { userHandler } from '../handlers/userHandler';
import SideBar from '../components/SideBar';


const CreateJoin = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  


  const handleFullNameChange = (event) => {
    let fullNameInput = event.target.value;
    setFullName (fullNameInput);
  };
  const handleEmailChange = (event) => {
    let emailInput = event.target.value;
    setEmail(emailInput);
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
    let shippingAddressInput = event.target.value;
    setShippingAddress(shippingAddressInput);
  };

  const handlePhone_NumberChange = (event) => {
    let phoneNumberInput = event.target.value;
    setPhoneNumber(phoneNumberInput);
  };
   
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = { fullName, email, password, age, shippingAddress, phoneNumber, };
    userHandler.addUser(newUser);
    event.target.reset()
  };



  return (
    <>
    <SideBar/>
    <div className="container-form">
      <form onSubmit={handleSubmit}  itemID="form1">
        <h1>Join Us</h1>

        <div className="mb-3">
          <label htmlFor=" name" className="form-label"> Full Name</label>
          <input focus name=" Name" type="text" className="form-control" placeholder="Type Your Full Name" onChange={handleFullNameChange} required />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input name="email" type="text"  className="form-control" placeholder="Type Your E-Mail" onChange={handleEmailChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input name="Password" type="Password" className="form-control" id="input-password" required placeholder="Type Password" onChange={handlePasswordChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">Confirm Password</label>
          <input name="Password" type="Password" className="form-control" id="confirm-input-password" required placeholder="Type Password" onChange={handlePasswordChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="age">Age </label>
          <input name="Age" type="number" min="1" className="form-control" id="input-age" required placeholder="Age (Date Format)" onChange={handleAgeChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="shipping_Address">Shipping Address</label>
          <input name="Shipping_Address" type="text" className="form-control" id="input-shipping Address" required placeholder="Type Shipping Address" onChange={handlShipping_AddressChange} />
        </div>    

        <div className="mb-3">
          <label className="form-label" htmlFor="phone_Number">Phone Number</label>
          <input name="Phone_Number" type="number" className="form-control" id="input-phone_Number" required placeholder="Type Phone Number" onChange={handlePhone_NumberChange} />
        </div>      

        <button type="submit" className="btn btn-primary" id="btn-ad">Send</button>
       
      </form>
    </div>
  </>
  );
};
export default CreateJoin;