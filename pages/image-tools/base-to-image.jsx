import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";

export default function BaseToImage() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar basetoimage="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share
              name="Base64 to Image converter"
              url="image-tools/base-to-image"
            />
          </main>
        </div>
      </div>
    </>
  );
}
