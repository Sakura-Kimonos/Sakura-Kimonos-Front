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
    
    <h1 class="text-center">My Account </h1>
    
    <div className="container-form" >
      
     
      <form onSubmit={handleSubmit}  itemID="form1">

       
      <div class="row">
        
        <div class="col-md-5 text-dark" >

        <div class="profile">

          <center><img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="200"></img></center>
          <center><button class="btn btn-primary" type="button" className="btn btn-info">UNPLOAD NEW PHOTO</button></center>

        </div>

         <center><GrFavorite name="document-text-outline"><GrFavorite/></GrFavorite><p> Wish List</p></center>
         <center><GoMail name="document-text-outline"><GoMail/></GoMail><p> MailBox</p></center>          
      
        </div>

      
      
         <div class="col-md-7">

          <div>

             <div class="div1 bg-white text-dark"><span>NAME</span></div>
             <div class="div2 bg-white text-dark"><span>LAST NAME</span></div>
             <div class="div3 bg-white text-dark"><span>PHONE NUMBER</span></div>

          </div>

        

       

        <div className="d-grid gap-3">
        
          <button class="btn btn-primary" type="button" className="btn btn-info">My Last Orders</button>
          <button class="btn btn-primary" type="button" className="btn btn-info">My Favorite Address</button>
          <button class="btn btn-primary" type="button" className="btn btn-info">Latest Payment Method</button>

        </div>

        
      </div>




        
        
      </div>





        

      </form>
          



          
        

     



        
        
       
      
    </div>
  </>
  );
};
export default UserProfile;
