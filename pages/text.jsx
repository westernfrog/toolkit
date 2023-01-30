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
      <div class="container-fluid">
        <div class="row mx-0">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
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