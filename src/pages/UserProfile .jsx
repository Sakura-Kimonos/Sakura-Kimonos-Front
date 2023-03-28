import { useState } from 'react';
// import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import './styleSheetPages/UserProfile.css';
import { GrFavorite } from 'react-icons/gr';
import { GoMail } from 'react-icons/go';
// import { userProfileHandler } from '../handlers/userProfileHandler';

const UserProfile= () => {

  const [name, setName] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [phone_Number, setPhone_Number] = useState("");



  const handleNameChange = (event) => {
    let nameInput = event.target.value;
    setName (nameInput);
  };
  const handleLast_NameChange = (event) => {
    let last_NameInput = event.target.value;
    setLast_Name(last_NameInput);
  };
  const handlePhone_NumberChange = (event) => {
    let phone_NumberInput = event.target.value;
    setPhone_Number(phone_NumberInput);
  };

   
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let newUserProfile = { name, last_Name,  phone_Number, };
    userProfileHandler.addUserProfile(newUserProfile);
    event.target.reset()
  };



  return (
    <>
    <SideBar/>
    <div className="container-form" >
      <div class="row "> 
     
        <form onSubmit={handleSubmit}  itemID="form1">
          <h1>My Account</h1>

        <div class="col-sm-2">

          <div className="mb-3">       
            <label htmlFor=" name" className="form-label"> </label>
            <span focus name=" Name"  type="text" className="form-control" onChange={handleNameChange} required />
          </div>

         <div className="mb-3">
          <label htmlFor="last_Name" className="form-label"> </label>
          <span  name="Last_Name" type="text"  className="form-control"  onChange={handleLast_NameChange} required />
         </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="phone_Number"> </label>
            <span  name="Phone_Number" type="text" className="form-control" id="input-Phone_Number" required  onChange={handlePhone_NumberChange} />
          </div>

        
              <button  type="submit"  className="btn btn-primary  btn-lg" id="btn-ad">My last Orders</button><br></br><br></br>
              <button type="submit" className="btn btn-primary" id="btn-ad">My Favorite Address</button><br></br><br></br>
              <button type="submit" className="btn btn-primary" id="btn-ad">Latest Payment Method</button>
        

        </div>

          <div class="col-sm3">        
            <GrFavorite name="document-text-outline"><GrFavorite/></GrFavorite><p> Wish List</p>
            <GoMail name="document-text-outline"><GoMail/></GoMail><p> MailBox</p>            
          </div>     
         



        
        
            <div class="col-">
            </div>  

        </form>
       
      </div>
    </div>
  </>
  );
};
export default UserProfile;
