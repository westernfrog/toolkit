import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function CaseConverter(params) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0">
          <Sidebar caseconverter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 my-4 px-0">
            <div className="">jfhw</div>
          </main>
        </div>
      </div>
    </>
  );
}
