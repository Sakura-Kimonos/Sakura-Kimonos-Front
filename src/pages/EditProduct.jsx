import React, { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import "../pages/styleSheetPages/AddProduct.css"
import SideBar from '../components/SideBar';
import { productService } from "../services/productService";


function EditProduct() {

    const { CardUser , params } = useLoaderData();

    // const [productsData, setProductsData] = useState([]);

    // async function getProducts() {
    //     var resultList = await productService.getProducts();
    //     setCardUser(resultList);
    //   }


    // let [updatedProduct, setUpdatedProduct] = useState()
    const id = params.id; 
    const [title, setTitle] = useState(CardUser.title);
    const [price, setPrice] = useState(CardUser.price);
    const [units, setUnits] = useState(CardUser.units);
    const [description, setDescription] = useState(CardUser.description);
    const [img, setImg] = useState(CardUser.img);
    const [material, setMaterial] = useState(CardUser.material);
    const [pattern, setPattern] = useState(CardUser.pattern);
    const [category, setCategory] = useState(CardUser.category);
    const [season, setSeason] = useState(CardUser.season);
   

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    };

    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    };

    const handleMaterialChange = (event) => {
        let materialInput = event.target.value;
        setMaterial(materialInput);
    };

    const handlPatternChange = (event) => {
        let patternInput = event.target.value;
        setPattern(patternInput);
    };

    const handleUnitsChange = (event) => {
        let unitsInput = event.target.value;
        setUnits(unitsInput);
    };

    const handlCategoryChange = (event) => {
        let categoryInput = event.target.value;
        setCategory(categoryInput);
    };

    const handlSeasonChange = (event) => {
        let seasonInput = event.target.value;
        setSeason(seasonInput);
    };

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImg(reader.result)
        };
    };



    const handleSubmit = (event) => {
        event.preventDefault();
       let  updatedProduct= {id, title, description, price, img, units, material, pattern, category, season };
        productHandler.updateProduct(updatedProduct);
        event.target.reset()
    };


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    // useEffect(() => {
    //     getProducts()
    //   },[])

       
    return (
        <>
            <SideBar />
            <div className="container-form">
                <form onSubmit={handleSubmit} itemID="form1">
                <h1>Edit Product</h1>
                <Link to="/admDashboard"> <button type="submit" className="btn btn-primary" id="btn" href="/admDashboard" style={{backgroundColor: "#CB5F5F"}}> Return to your dashboard </button> </Link>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" placeholder={CardUser.title} onChange={handleTitleChange} />
                 

                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input name="price" type="number" min="1" className="form-control" placeholder={CardUser.price} onChange={handlePriceChange}  />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <input name="description" type="text" className="form-control" id="input-description" placeholder={CardUser.description} onChange={handleDescriptionChange} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="units" className="form-label">Units</label>
                        <input name="units" type="number" min="1" max="25" className="form-control" placeholder={CardUser.units} onChange={handleUnitsChange}  />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="material">Material</label>
                        <input name="material" type="text" className="form-control" id="input-material"  placeholder={CardUser.material} onChange={handleMaterialChange}  />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="pattern">Pattern</label>
                        <input name="pattern" type="text" className="form-control" id="input-pattern"  placeholder={CardUser.pattern}  onChange={handlPatternChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="category">Category</label>
                        <input name="category" type="text" className="form-control" id="input-category"  placeholder={CardUser.category}  onChange={handlCategoryChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="season">Season</label>
                        <input name="season" type="text" className="form-control" id="input-season"  placeholder={CardUser.season}  onChange={handlSeasonChange} />
                    </div> 

                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Image</label>
                        <input name="img" type="file" className="form-control"
                            onChange={handleImgChange} />
                    </div>

                   <button type="submit" className="btn btn-primary" id="btn" onClick={handleShow}>Update</button>
                </form>
                
            </div></>
    );
};



export default EditProduct;
