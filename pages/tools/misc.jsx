import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function Json() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-5">
            <div className="col-lg-11">
              <Name id="text" name="Miscellaneous tools" />
              <div className="row my-4">
                <Card
                  url="/tools/javascript-formatter"
                  icon={<i className="fa-regular fa-file-pdf fa-2xl"></i>}
                  title="Javascript formatter"
                  desc="Format/beautify your JavaScript code and copy the formatted code to your clipboard or download as a file"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
