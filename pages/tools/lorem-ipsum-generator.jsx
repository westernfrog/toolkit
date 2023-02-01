import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ToolsName from "@/components/ToolsName";

export default function LoremIpsum() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar loremipsum="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <ToolsName
              name="Lorem Ipsum generator"
              url="tools/lorem-ipsum-generator"
            />
          </main>
        </div>
      </div>
    </>
  );
}
