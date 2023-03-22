import { productService } from "../services/productService";

export const productHandler = {
    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }

        let newProductStructure = {
            "id": "",
            "title": newProduct.title,
            "price": newProduct.price,
            "description": newProduct.description,
            "img": newProduct.img,
            "units": newProduct.units,
            "material": newProduct.material,
            "pattern": newProduct.pattern,
            "category": newProduct.category,
            "season": newProduct.season,
        }

        return productService.submitProduct(newProductStructure);

    },

    loadProducts() {
        return productService.getProducts();
    },
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
        let updatedProductStructure = {
            "title": updatedProduct.title,
            "price": updatedProduct.price,
            "description": updatedProduct.description,
            "img": updatedProduct.img,
            "units": updatedProduct.units,
            "material": updatedProduct.material,
            "pattern": updatedProduct.pattern,
            "category": updatedProduct.category,
            "season": updatedProduct.season,
        }

        return productService.updateProduct(id, updatedProductStructure);
    }
}

