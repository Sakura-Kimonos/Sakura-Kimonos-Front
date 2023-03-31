import { userService } from '../services/userService';

export const userHandler = {
    addUser(newUser) {
        if (!newUser) {
            return;
        }

        // let imgStringData = newUser.img;
        // let imgStringDataSplit = imgStringData.split(',');
        // let imgContent = imgStringDataSplit[1];

        let newUserRequestModel = {
                "userData": {
                    "rol": 2,
                    "fullName": newUser.fullName,
                    "email": newUser.email,
                    "password": newUser.password,
                    "age": newUser.age,
                    "shippingAddress": newUser.shippingAddress,
                    "phoneNumber": newUser.phoneNumber,
                }
            // "fileData": {
            //     "fileName": newUser.fullName + "-Photo",
            //     "base64FileContent": imgContent
            // }
           
        }

        return userService.addUser(newUserRequestModel);

    },

    async loadUser() {
        var result = await  userService.getUser();
        return result; 
    },
    loadUser(id) {
        return userService.getUser(id);
    },
    deleteUser(id) {
        return userService.deleteUser(id);
    },
    updateUser(id, updatedUser) {
        if (!updatedUser) {
            return;
        }

        let imgStringData = updatedUser.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updatedUserRequestModel = {
            "userData": {
                "fullName": newUser.fullName,
                "email": newUser.email,
                "password": newUser.password,
                "age": newUser.age,
                "shippingAddress": newUser.shippingAddress,
                "phoneNumber": newUser.phoneNumber,
            }, 
            "fileData": {
                "fileName": newUser.fullName + "-Photo",
                "base64FileContent": imgContent
            }
        }

        return userService.updateUser(id, updatedUserRequestModel);
    }
}