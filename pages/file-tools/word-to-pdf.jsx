import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";

export default function WordToPDF() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar wordtopdf="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share name="Word to PDF converter" url="file-tools/word-to-pdf" />
          </main>
        </div>
      </div>
    </>
  );
}
