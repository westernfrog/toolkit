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
    <div className="container-fluid my-5 my-lg-0 ms-0 ms-lg-4 px-0 px-lg-4">
      <h1 className="fs-5 text-rubik">
        <i class="fa-solid fa-filter fa-color me-2"></i>Apply Filters
      </h1>
      <div className="my-3 text-dm">
        {slider.map((slide) => (
          <SliderField slide={slide} key={slide.field} />
        ))}
      </div>
    </div>
  );
}
