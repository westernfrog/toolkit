import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCard from "@/components/Image-Card";
import ToolName from "@/components/Tool-Name";
import Sidebar from "@/components/Sidebar";

export default function Image() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4 py-1">
            <div className="col-lg-10">
              <ToolName id="image" name="Image tools" />
              <div className="row my-4">
                <ImageCard />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
