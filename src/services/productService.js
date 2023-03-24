import axios from "axios";
import Swal from 'sweetalert2';

const apiClient = axios.create({
    baseURL: 'https://localhost:7021',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
        let response = await apiClient.get("/Product/GetAllProducts");
        if (!response==200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let allProducts = response.data;

        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/Product/GetProductById" + id);
        if (!response==200)
        throw {
            status: response.status,
            statusText: "Not found",
        };
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        let response = await apiClient.post("/Product/AddProduct", newProduct)
        if (response.status === 201) 
        { 
            Swal.fire({ 
            icon: 'success', 
            title: 'New product added', 
            showConfirmButton: true, 
            showClass: { popup: 'animate__animated animate__fadeInDown' }, 
            hideClass: { popup: 'animate__animated animate__fadeOutUp' } })   
         }

    },
    async deleteProduct(id){
        await apiClient.delete("/Product/Delete" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/Product/Patch" + id, updatedProduct)
    }
}

