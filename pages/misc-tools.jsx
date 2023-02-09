import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToolName from "@/components/Tool-Name";
import Sidebar from "@/components/Sidebar";
import MiscCard from "@/components/Misc-Card";

export default function Json() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar basetoimage="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4 py-1">
            <div className="col-lg-11">
              <ToolName id="text" name="Miscellaneous tools" />
              <div className="row my-4">
                <MiscCard />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
