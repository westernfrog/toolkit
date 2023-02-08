import { Box } from "@mui/material";
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
    <Box sx={{ marginTop: "2rem" }} className="text-dm">
      {slider.map((slide) => (
        <SliderField slide={slide} key={slide.field} />
      ))}
    </Box>
  );
}
