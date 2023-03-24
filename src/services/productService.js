import axios from "axios";

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
        await apiClient.post("/Product/AddProduct", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/Product/Delete" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/Product/Patch" + id, updatedProduct)
    }
}

