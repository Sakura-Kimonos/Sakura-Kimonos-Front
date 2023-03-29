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
        
          <div class="col-md-5 bg-warning text-dark text-center position-relative" >

           

            <div class="bg-danger position-absolute top-50 start-50 translate-middle">

             <GrFavorite name="document-text-outline"><GrFavorite/></GrFavorite><p> Wish List</p>
             <GoMail name="document-text-outline"><GoMail/></GoMail><p> MailBox</p>            
          
            </div>

          
          </div>

        <div class="col-md-7 bg-dark">

         
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

         

          <div class="d-grid gap-3">
          
            <button class="btn btn-primary" type="button" class="btn btn-info">My Last Orders</button>
            <button class="btn btn-primary" type="button" class="btn btn-info">My Favorite Addres</button>
            <button class="btn btn-primary" type="button" class="btn btn-info">Latest Payment Method</button>

          </div>

          
        </div>




          
          
        </div>


    </form>
          



          
        

     



        
        
       
      
    </div>
  </>
  );
};
export default UserProfile;
