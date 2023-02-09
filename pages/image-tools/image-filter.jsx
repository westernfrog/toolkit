import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import { Grid } from "@mui/material";
import { createContext, useState } from "react";
import CustomFilter from "@/components/CustomFilter";
import ImageField from "@/components/ImageField";
import Footer from "@/components/Footer";

export const FilterContext = createContext();

export default function ImageFilter() {
  const [tabFilter, setTabFilter] = useState("instaFilter");
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });

  const value = {
    tabFilter,
    setTabFilter,
    filterClass,
    setFilterClass,
    customFilter,
    setCustomFilter,
  };
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar imagefilter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share name="Image filters" url="image-tools/image-filter" />
            <p className="text-dm col-lg-10 fs-7">
              A free online tool <mark>for applying filters on images. </mark>
              There are different types of filters you can apply to image. They
              can be color manipulation such as brighten, lighten, darken,
              saturate/desaturate, greyscale, contrast, sepia.
            </p>
            <FilterContext.Provider value={value}>
              <div className="my-4">
                <Grid container>
                  <ImageField />
                  <Grid item xs={12} md={6}>
                    <CustomFilter />
                  </Grid>
                </Grid>
              </div>
            </FilterContext.Provider>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
