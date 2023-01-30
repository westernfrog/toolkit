import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function File() {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row">
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name id="file" name="File tools" />
              <div className="row my-4">
                <Card
                  icon={<i class="fa-regular fa-file-pdf fa-2xl"></i>}
                  title="PDF to Word converter"
                  desc="Convert PDF file to a Word file."
                />
                <Card
                  icon={<i class="fa-regular fa-file-word fa-2xl"></i>}
                  title="Word to PDF converter"
                  desc="Convert Word file to a PDF file."
                />
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
