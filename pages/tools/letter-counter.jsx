import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";

export default function LetterCounter(params) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar lettercounter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName name="Letter counter" url="tools/letter-counter" />
          </main>
        </div>
      </div>
    </>
  );
}
