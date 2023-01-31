import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";
import Text0 from "@/components/Text";

export default function Text() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-11">
              <Name id="text" name="Text tools" />
              <div className="row my-4">
                <Text0 />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
