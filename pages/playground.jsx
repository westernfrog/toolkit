import FileCard from "@/components/File";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageCard from "@/components/Image";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";
import TextCard from "@/components/Text";

export default function Playground() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <div className="col-lg-11">
              <Name name="Text tools" />
              <div className="row my-4">
                <TextCard />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="Image tools" />
              <div className="row my-4">
                <ImageCard />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="File tools" />
              <div className="row my-4">
                <FileCard />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
