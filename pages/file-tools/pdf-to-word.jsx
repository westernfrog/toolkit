import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import { useState, useEffect } from "react";

export default function PDFToWord() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!file) return;

    const convertFile = async () => {
      const response = await fetch(
        "https://v2.convertapi.com/convert/pdf/to/docx?secret=1ik9m1MytHv1TWAf",
        {
          method: "POST",
          body: file,
        }
      );

      const data = await response.json();
      console.log(data);

      const downloadUrl = data.Files[0].Url;

      const convertedFileResponse = await fetch(downloadUrl);
      const convertedFileBlob = await convertedFileResponse.blob();
      setConvertedFile(URL.createObjectURL(convertedFileBlob));
    };

    convertFile();
  }, [file]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar pdftoword="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share name="PDF to Word converter" url="file-tools/pdf-to-word" />
            <div>
              <input type="file" onChange={handleFileChange} />
              {convertedFile && (
                <a href={convertedFile} download="converted-file.docx">
                  Download converted file
                </a>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
