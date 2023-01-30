import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function Playground() {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row mx-0">
          <Sidebar />
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name name="Text tools" />
              <div className="row my-4">
                <Card
                  icon={<i class="fa-solid fa-font fa-2xl"></i>}
                  title="Case converter"
                  desc="Convert your text or string to uppercase, lowercase, title-case or sentence-case."
                />
                <Card
                  icon={<i class="fa-solid fa-text-height fa-2xl"></i>}
                  title="Text formatting"
                  desc="Convert your text into handwriting with desired paper type and ink color and download as PDF."
                />
                <Card
                  icon={<i class="fa-solid fa-pencil fa-2xl"></i>}
                  title="Lorem ipsum generator"
                  desc="Create your placeholder texts with desired number of paragraphs and properties."
                />
                <Card
                  icon={<i class="fa-solid fa-calculator fa-2xl"></i>}
                  title="Letter counter"
                  desc="Count letters, words and sentences in a text and analyze this numbers with common limits."
                />
                <Card
                  icon={<i class="fa-solid fa-laptop-code fa-2xl"></i>}
                  title="Prettify json code"
                  desc="Format/beautify your JSON code and copy the formatted code to your clipboard."
                />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="Image tools" />
              <div className="row my-4">
                <Card
                  icon={<i class="fa-solid fa-image fa-2xl"></i>}
                  title="Image filters"
                  desc="Apply different filters to images and change color balance and distribution of the it."
                />
                <Card
                  icon={<i class="fa-solid fa-photo-film fa-2xl"></i>}
                  title="Image to Base64"
                  desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
                />
                <Card
                  icon={<i class="fa-solid fa-terminal fa-2xl"></i>}
                  title="Base64 to Image"
                  desc="Convert images into Base64 string for different image formats like PNG, JPEG, GIF, SVG."
                />
              </div>
            </div>
            <div className="col-lg-10">
              <Name name="File tools" />
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
