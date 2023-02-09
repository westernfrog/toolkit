import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import Image from "next/image";

export default function ImageToBase() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar imagetobase="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share
              name="Image to Base64 converter"
              url="image-tools/image-to-base"
            />
          </main>
        </div>
      </div>
    </>
  );
}
