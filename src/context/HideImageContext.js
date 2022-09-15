import { createContext, useState } from "react";

export const HideImageContext = createContext({
  imageIsUpload: false,
  setImageIsUploadContext: (info) => {},
});

const HideImageContextProvider = ({ children }) => {
  const HideImageState = {
    imageIsUpload: false,
    setImageIsUploadContext: (info) =>
      setHideImage((prevState) => ({
        ...prevState,
        imageIsUpload: info.imageIsUpload,
      })),
  };

  const [hideImage, setHideImage] = useState(HideImageState);

  return (
    <HideImageContextProvider value={hideImage}>
      {children}
    </HideImageContextProvider>
  );
};

export default HideImageContextProvider;
