import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function PDFToWord(params) {
  return (
    <>
      <Header />
      <Sidebar pdftoword="active-category" />
    </>
  );
}
