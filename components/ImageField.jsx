import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useContext, useRef, useState } from "react";
import { FilterContext } from "@/pages/tools/image-filter";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const StyleBox = styled(Box)({
  background: "#eee",
  minHeight: "20rem",
  maxHeight: "100vh",
  marginBottom: "1rem",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const StyledImage = styled("img")((props) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  filter: `contrast(${props.customFilter.contrast}%) brightness(${props.customFilter.brightness}%) saturate(${props.customFilter.saturate}%) sepia(${props.customFilter.sepia}%) grayScale(${props.customFilter.gray}%)`,
}));

export default function ImageField() {
  const uploadInputRef = useRef(null);
  const imgResultRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const { filterClass, customFilter } = useContext(FilterContext);

  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  const handleDownloadImage = () => {
    domtoimage
      .toBlob(imgResultRef.current)
      .then(function (blob) {
        saveAs(blob, "edited.png");
      })
      .catch(function (error) {
        console.error("Ooops, Something went wrong!", error);
      });
  };

  const renderImage = () => (
    <figure style={{ width: "50%", height: "50%" }}>
      <StyledImage
        customFilter={!filterClass && customFilter}
        className={filterClass}
        src={imageFile}
        alt="uploaded image"
        ref={imgResultRef}
      />
    </figure>
  );
  return (
    <>
      <div className="container-fluid col-lg-6 mx-0 px-0 text-dm fw-bold text-muted d-grid">
        <StyleBox
          onClick={() =>
            uploadInputRef.current && uploadInputRef.current.click()
          }
        >
          {imageFile ? renderImage() : <p>Upload Image</p>}
        </StyleBox>
        <input
          onChange={handleChangeInput}
          ref={uploadInputRef}
          type="file"
          accept="image/*"
          hidden
        />
        <button
          className="btn btn-shrink btn-share text-dm fw-bold"
          onClick={handleDownloadImage}
          disabled={!imageFile}
          variant="contained"
          fullWidth
        >
          <i class="fa-solid fa-download me-2 fa-color"></i>
          Download Image
        </button>
      </div>
    </>
  );
}
