import Card from "./Card";

export default function Image0() {
  return (
    <>
      <Card
        url="/tools/image-filter"
        icon={<i className="fa-solid fa-photo-film fa-2xl"></i>}
        title="Image filters"
        desc="Apply different filters to images and change color balance and distribution of the it."
      />
      <Card
        url="/tools/image-to-base"
        icon={<i className="fa-solid fa-image fa-2xl"></i>}
        title="Image to Base64"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
      <Card
        url="/tools/base-to-image"
        icon={<i className="fa-solid fa-code fa-2xl"></i>}
        title="Base64 to Image"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
    </>
  );
}
