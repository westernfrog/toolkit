import Card from "./Card";

export default function Image0() {
  return (
    <>
      <Card
        color={{ color: "#7B2869" }}
        icon={<i class="fa-solid fa-image fa-2xl"></i>}
        title="Image filters"
        desc="Apply different filters to images and change color balance and distribution of the it."
      />
      <Card
        color={{ color: "#F94A29" }}
        icon={<i class="fa-solid fa-photo-film fa-2xl"></i>}
        title="Image to Base64"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
      <Card
        color={{ color: "#1F8A70" }}
        icon={<i class="fa-solid fa-terminal fa-2xl"></i>}
        title="Base64 to Image"
        desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
      />
    </>
  );
}
