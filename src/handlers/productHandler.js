import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }

        let imgStringData = newProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let newProductRequestModel = {
            "productData": {
                "title": newProduct.title,
                "description": newProduct.description,
                "price": newProduct.price,
                "category": newProduct.category,
                "material": newProduct.material,
                "season": newProduct.season,
                "pattern": newProduct.pattern,
                "units": newProduct.units,
            }, 
            "fileData": {
                "fileName": newProduct.title + "-Photo",
                "base64FileContent": imgContent
            }
           
        }

        return productService.submitProduct(newProductRequestModel);

    },
    async loadProducts() {
        var result = await  productService.getProducts();
        return result; 
    },
    // async loadImages(){
    //     var resultImages = await productService.getImages();
    //     return resultImages; 
    // },
    loadProduct(id) {
        return productService.getProduct(id);
    },
    deleteProduct(id) {
        return productService.deleteProduct(id);
    },
    updateProduct(id, updatedProduct) {
        if (!updatedProduct) {
            return;
        }

        let imgStringData = updatedProduct.img;
        let imgStringDataSplit = imgStringData.split(',');
        let imgContent = imgStringDataSplit[1];

        let updatedProductRequestModel = {
            "productData": {
                "title": updatedProduct.title,
                "description": updatedProduct.description,
                "price": updatedProduct.price,
                "category": updatedProduct.category,
                "material": updatedProduct.material,
                "season": updatedProduct.season,
                "pattern": updatedProduct.pattern,
                "units": updatedProduct.units,
            }, 
            "fileData": {
                "fileName": updatedProduct.title + "-Photo",
                "base64FileContent": imgContent
            }
        }

        return productService.updateProduct(id, updatedProductRequestModel);
    }
}

