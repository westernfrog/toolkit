import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function BaseToImage(params) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar basetoimage="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <div className="bg-dark">jfhw</div>
          </main>
        </div>
      </div>
    </>
  );
}
