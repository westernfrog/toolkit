import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image0 from "@/components/Image";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function Image() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name id="image" name="Image tools" />
              <div className="row my-4">
                <Image0 />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
