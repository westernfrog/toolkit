import ToolCard from "./Tool-Card";

export default function ImageCard() {
  return (
    <>
      <ToolCard
        url="/image-tools/image-filter"
        icon={<i className="fa-solid fa-photo-film fa-2xl"></i>}
        title="Image filters"
        desc="Apply different filters to images and change color balance and distribution of the it."
      />
      <ToolCard
        url="/image-tools/image-to-base"
        icon={<i className="fa-solid fa-image fa-2xl"></i>}
        title="Image to Base64"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
      <ToolCard
        url="/image-tools/base-to-image"
        icon={<i className="fa-solid fa-code fa-2xl"></i>}
        title="Base64 to Image"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
    </>
  );
}
