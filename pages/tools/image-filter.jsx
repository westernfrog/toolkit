import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";
import { Grid } from "@mui/material";
import { createContext, useState } from "react";
import CustomFilter from "@/components/CustomFilter";
import ImageField from "@/components/ImageField";

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
            <ToolsName name="Image filters" url="tools/image-filter" />
            <FilterContext.Provider value={value}>
              <div className="my-3">
                <Grid container spacing={10}>
                  <ImageField />
                  <Grid item xs={12} md={5}>
                    <CustomFilter />
                  </Grid>
                </Grid>
              </div>
            </FilterContext.Provider>
          </main>
        </div>
      </div>
    </>
  );
}
