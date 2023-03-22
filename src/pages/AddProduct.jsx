import "./styleSheetPages/AddProduct.css"
import { useState } from 'react';
import { productHandler } from '../handlers/productHandler';
import SideBar from '../components/SideBar';
// import { Modal } from 'react-bootstrap';

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [units, setUnits] = useState("");
  const [material, setMaterial] = useState("");
  const [pattern, setPattern] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");

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
  const handleUnitsChange = (event) => {
    let unitsInput = event.target.value;
    setUnits(unitsInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { title, description, price, img, units, material, pattern, category, season };
    productHandler.addProduct(newProduct);
    event.target.reset()
  };

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
    <SideBar/>
    <div className="container-form">
      <form onSubmit={handleSubmit} itemID="form1">
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
          <input name="pattern" type="text" className="form-control" id="input-pattern" required placeholder="Type of pattern." onChange={handlPatternChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="category">Category</label>
          <input name="category" type="text" className="form-control" id="input-category" required placeholder="What is the category?" onChange={handlCategoryChange} />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="season">Season</label>
          <input name="season" type="text" className="form-control" id="input-season" required placeholder="What is the season?" onChange={handlSeasonChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="units" className="form-label">Units</label>
          <input name="units" type="number" min="1" max="25" className="form-control" required placeholder="How many units?" onChange={handleUnitsChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image</label>
          <input name="img" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgChange} required />
        </div>

        <button type="submit" className="btn btn-primary" id="btn-ad">Submit</button>

        {/* <button type="submit" className="btn btn-primary" id="btn" onClick={handleShow}>Upload</button>
        <Modal className="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Successful!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">The product has been added.</Modal.Body>
        </Modal> */}
      </form>
    </div>
  </>
  );
};
export default CreateProduct;
