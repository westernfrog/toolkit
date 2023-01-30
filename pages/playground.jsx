import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function Playground() {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name name="Text tools" />
              <div className="row my-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="Image tools" />
              <div className="row my-4">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="File tools" />
              <div className="row my-4">
                <Card />
                <Card />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
