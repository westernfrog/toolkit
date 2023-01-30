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
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 my-5">
            <div className="col-lg-8">
              <Name name="Text tools" />
            </div>
            <div className="col-lg-8">
              <Name name="Image tools" />
            </div>
            <div className="col-lg-8">
              <Name name="File tools" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
