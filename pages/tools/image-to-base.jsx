import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ImageToBase(params) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar imagetobase="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <div className="">jfhw</div>
          </main>
        </div>
      </div>
    </>
  );
}
