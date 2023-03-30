import axios from "axios";
import Swal from 'sweetalert2';

const apiClient = axios.create({
    baseURL: 'https://localhost:7021',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'   
    }
})

export const userService = {
    async getUser() {
        let response = await apiClient.get("/User/GetAllUsers");
        if (!response==200)
            {
                alert('These are not the users you are looking for');
            };
        let allUser = response.data;
       
        return allUser;
    },
    async getUser(id) {
        let response = await apiClient.get("/" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let user = response.data;
        return user;
    },
    async addUser(newUserRequestModel){
        let response = await apiClient.post("/User/InsertUser", newUserRequestModel)
        if (response.status === 200) 
        {   
            Swal.fire({ 
            icon: 'success', 
            title: 'New user registered', 
            showConfirmButton: true, 
            showClass: { popup: 'animate__animated animate__fadeInDown' }, 
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })   
         } else { 
            alert("Upsi...");
         }

    },
    async deleteUser(id) {
        await apiClient.delete("/User/DeactivateUser?id=" + id)
    },
    async updateUser(id, updatedUserRequestModel){
        await apiClient.patch("/User/Patch" + id, updatedUserRequestModel)
    }
}
