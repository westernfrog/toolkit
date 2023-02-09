import SliderField from "./SliderField";

export default function CustomFilter() {
  const slider = [
    { label: "Contrast", defaultValue: 100, field: "contrast" },
    { label: "Brightness", defaultValue: 100, field: "brightness" },
    { label: "Saturation", defaultValue: 100, field: "saturate" },
    { label: "Sepia", defaultValue: 0, field: "sepia" },
    { label: "Grayscale", defaultValue: 0, field: "gray" },
  ];

  return (
    <div className="container-fluid my-5 my-lg-0 ms-4">
      <h1 className="fs-4 text-rubik">Apply Filters</h1>
      <div className="my-3 text-dm">
        {slider.map((slide) => (
          <SliderField slide={slide} key={slide.field} />
        ))}
      </div>
    </div>
  );
}
