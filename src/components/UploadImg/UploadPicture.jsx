import { useState, useEffect } from "react";

// Permettre de mettre une image

export default function UploadPicture({ setImageLink, setImageHasChange }) {
  // states
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  // const [imageChange, setImageChange] = useState(false);

  // logique
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  //   Setteur Images Update
  function onImageChange(e) {
    console.log(e);
    setImages([...e.target.files]);
    setImageLink([...e.target.files]);
    setImageHasChange(true);
  }

  return (
    <>
      {imageURLs.map((imageUrl) => (
        <div className="picture_container">
          <img alt="img" name="imageUrl" src={imageUrl} key={imageUrl.length} />
        </div>
      ))}
      <input
        type="file"
        id="file"
        name="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
    </>
  );
}
