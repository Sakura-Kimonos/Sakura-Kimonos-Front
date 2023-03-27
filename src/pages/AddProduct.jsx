import "./styleSheetPages/AddProduct.css"
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import SideBar from '../components/SideBar';


const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [units, setUnits] = useState(0);
  const [material, setMaterial] = useState("");
  const [pattern, setPattern] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");
  let [newProduct, setNewProduct] = useState({});

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setMaterial(event.target.value);
  };

  const handlePatternChange = (event) => {
    setPattern(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const handleUnitsChange = (event) => {
    setUnits(event.target.value);
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
    let newProduct = { title, description, price, img, units, material, pattern, category, season };
    productHandler.addProduct(newProduct);
    event.target.reset()
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SideBar />
      <div className="container-form">
        <form onSubmit={handleSubmit} itemID="form1" enctype="multipart/form-data">
          <h1>Create a new product</h1>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input name="title" type="text" className="form-control" placeholder="Product name" onChange={handleTitleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input name="price" type="number" min="1" className="form-control" placeholder="How much does it cost?" onChange={handlePriceChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="description">Description</label>
            <input name="description" type="text" className="form-control" id="input-description" required placeholder="Tell us about the product." onChange={handleDescriptionChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="material">Material</label>
            <input name="material" type="text" className="form-control" id="input-material" required placeholder="What material is it made of?" onChange={handleMaterialChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="pattern">Pattern</label>
            <input name="pattern" type="text" className="form-control" id="input-pattern" required placeholder="Type of pattern." onChange={handlePatternChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="category">Category</label>
            <input name="category" type="text" className="form-control" id="input-category" required placeholder="What is the category?" onChange={handleCategoryChange} />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="season">Season</label>
            <input name="season" type="text" className="form-control" id="input-season" required placeholder="What is the season?" onChange={handleSeasonChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="units" className="form-label">Units</label>
            <input name="units" type="number" min="1" max="25" className="form-control" required placeholder="How many units?" onChange={handleUnitsChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="img" className="form-label">Image</label>
            <input name="img" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgChange} required />
          </div>

          <button type="submit" className="btn btn-primary" id="btn" onClick={handleShow}>Upload</button>
      </form>
    </div>
    </>
  );
};
export default CreateProduct;
