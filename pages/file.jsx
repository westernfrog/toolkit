import File0 from "@/components/File";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function File() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name id="file" name="File tools" />
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
