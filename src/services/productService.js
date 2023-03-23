import axios from "axios";
import Swal from 'sweetalert2';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/Products',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
        let response = await apiClient.get("/");
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let allProducts = response.data;

        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/" + id);
        if (!response == 200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct) {
        let response = await apiClient.post("/", newProduct);
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
    async deleteProduct(id) {
        await apiClient.delete("/" + id)
    },
    async updateProduct(id, updatedProduct) {
        await apiClient.patch("/" + id, updatedProduct)
    }
}

