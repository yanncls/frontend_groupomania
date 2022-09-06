import { useState, useEffect } from "react";

// Permettre de mettre une image

export default function UploadImages({ imageLink, setImageLink }) {
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
    setImageLink([...e.target.files]);
  }
  return (
    <>
      <input
        type="file"
        id="file"
        name="file"
        multiple
        accept="image/*"
        onChange={onImageChange}
      />
      {imageURLs.map((imageUrl) => (
        <img alt="img" name="imageUrl" src={imageUrl} key={imageUrl.length} />
      ))}
    </>
  );
}
