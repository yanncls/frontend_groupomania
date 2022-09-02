import { useState, useEffect } from "react";

// Permettre de mettre une image

export default function UploadImages() {
  // states
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // logique
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  //   Setteur Images Update
  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLs.map((imageSrc) => (
        <img alt="img" src={imageSrc} />
      ))}
    </>
  );
}
