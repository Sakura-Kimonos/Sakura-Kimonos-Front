import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import "../pages/styleSheetPages/AddProduct.css"
import SideBar from '../components/SideBar';

function EditProduct() {
    const { CardAdm } = useLoaderData();
    const id = CardAdm.id;
    const [title, setTitle] = useState(CardAdm.title);
    const [price, setPrice] = useState(CardAdm.price);
    const [units, setUnits] = useState(CardAdm.units);
    const [description, setDescription] = useState(CardAdm.description);
    const [img, setImg] = useState(CardAdm.img);
    const [material, setMaterial] = useState(CardAdm.material);
    const [pattern, setPattern] = useState(CardAdm.pattern);
    const [category, setCategory] = useState(CardAdm.category);
    const [season, setSeason] = useState(CardAdm.season);
    let [updatedProduct, setUpdatedProduct] = useState({});

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
        updatedProduct = { title, description, price, img, units, material, pattern, category, season };
        productHandler.updateProduct(id, updatedProduct);
        event.target.reset()
    };


    return (
        <>
            <SideBar />
            <div className="container-form">
                <form onSubmit={handleSubmit} itemID="form1">
                    <h1>What do you want to sell?</h1>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input name="title" type="text" className="form-control" placeholder={CardAdm.title} onChange={handleTitleChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input name="price" type="number" className="form-control" placeholder={CardAdm.price} onChange={handlePriceChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="description">Description</label>
                        <input name="description" type="text" className="form-control" id="input-description" placeholder={CardAdm.description} onChange={handleDescriptionChange} />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="units" className="form-label">Units</label>
                        <input name="units" type="number" className="form-control" placeholder={CardAdm.units} onChange={handleUnitsChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="material">Material</label>
                        <input name="material" type="text" className="form-control" id="input-material" required placeholder={CardAdm.material} onChange={handleMaterialChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="pattern">Pattern</label>
                        <input name="pattern" type="text" className="form-control" id="input-pattern" required placeholder={CardAdm.pattern}  onChange={handlPatternChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="category">Category</label>
                        <input name="category" type="text" className="form-control" id="input-category" required placeholder={CardAdm.category}  onChange={handlCategoryChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="season">Season</label>
                        <input name="season" type="text" className="form-control" id="input-season" required placeholder={CardAdm.season}  onChange={handlSeasonChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Image</label>
                        <input name="img" type="file" className="form-control"
                            onChange={handleImgChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" id="btn-E" >Update</button>
                </form>
            </div></>
    );
};



export default EditProduct;
