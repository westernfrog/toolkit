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
              url="iamge-tools/image-to-base"
            />
            <div className="row">
              <div className="col-md-6 d-grid">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/8881/8881731.png"
                  class="img-fluid border"
                  alt="..."
                  width={200}
                  height={200}
                ></Image>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}