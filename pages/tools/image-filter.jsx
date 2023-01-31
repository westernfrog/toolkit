import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ImageFilters(params) {
  return (
    <>
      <Header />
      <Sidebar imagefilter="active-category" />
    </>
  );
}
