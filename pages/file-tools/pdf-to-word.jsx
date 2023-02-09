import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";

export default function PDFToWord() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar pdftoword="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share name="PDF to Word converter" url="file-tools/pdf-to-word" />
          </main>
        </div>
      </div>
    </>
  );
}
