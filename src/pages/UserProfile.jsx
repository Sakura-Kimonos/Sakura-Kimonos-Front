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
    
    <h1 className="text-center">My Account </h1>
    
    <div className="container-form" >
      <form onSubmit={handleSubmit}  itemID="form1">
      <div className="row"> 
        <div className="col-md-5 text-dark" > 
        <div className="profile">

          <center><img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="200"></img></center>
          <center><button className="btn btn-primary" type="button">UNPLOAD NEW PHOTO</button></center>

        </div>

         <center><GrFavorite name="document-text-outline"><GrFavorite/></GrFavorite><p> Wish List</p></center>
         <center><GoMail name="document-text-outline"><GoMail/></GoMail><p> MailBox</p></center>          
      
        </div>
         <div className="col-md-7">

          <div>

             <div className="div1 bg-white text-dark"><span>NAME</span></div>
             <div className="div2 bg-white text-dark"><span>LAST NAME</span></div>
             <div className="div3 bg-white text-dark"><span>PHONE NUMBER</span></div>

          </div>
        <div className="d-grid gap-3">
        
          <button className="btn btn-primary" type="button" >My Last Orders</button>
          <button className="btn btn-primary" type="button" >My Favorite Address</button>
          <button className="btn btn-primary" type="button" >Latest Payment Method</button>

        </div>   
      </div>   
      </div>   
      </form>
    </div>
  </>
  );
};
export default UserProfile;