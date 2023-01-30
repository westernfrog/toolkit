import Card from "@/components/Card";
import File0 from "@/components/File";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image0 from "@/components/Image";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";
import Text0 from "@/components/Text";

export default function Playground() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name name="Text tools" />
              <div className="row my-4">
                <Text0 />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="Image tools" />
              <div className="row my-4">
                <Image0 />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="File tools" />
              <div className="row my-4">
                <File0 />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
