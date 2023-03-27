import { productHandler } from '../handlers/productHandler';
import { useState } from 'react'

function Images() {

    let [imagesArray, setImagesArray] = useState([]);


    async function onChangeImagesArray() {
        let loadedProducts = await productHandler.loadProducts();
        setImagesArray(loadedProducts);
    }

    function buildImgSrc(content) {
        return "data:image/png;base64," + content;
    }
    if (imagesArray != undefined && imagesArray != null && imagesArray.length > 0) {
        return (
            <div>
                <button className="btn btn-primary" id="btn" onClick={onChangeImagesArray}>Cargar Productos</button>
                {imagesArray.map(img => (
                    <img src={buildImgSrc(img.content)} />
                ))}

            </div>
        )
    } else {
        return (
            <div>
                <button className="btn btn-primary" id="btn" onClick={onChangeImagesArray}>Cargar Imagenes</button>
                <div>
                    No hay orcos en la costa.
                </div>
            </div>
        )
    }

}

export default Images;