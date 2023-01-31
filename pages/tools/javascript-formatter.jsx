import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";

export default function JSFormat(params) {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar javascriptformatter="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName
              name="Javascript formatter"
              url="tools/javascript-formatter"
            />
          </main>
        </div>
      </div>
    </>
  );
}
