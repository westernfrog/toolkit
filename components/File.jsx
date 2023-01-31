import Card from "./Card";

export default function File0() {
  return (
    <>
      <Card
        url="/tools/pdf-to-word"
        icon={<i className="fa-regular fa-file-pdf fa-2xl"></i>}
        title="PDF to Word converter"
        desc="Convert PDF file to a Word file."
      />
      <Card
        url="/tools/word-to-pdf"
        icon={<i className="fa-regular fa-file-word fa-2xl"></i>}
        title="Word to PDF converter"
        desc="Convert Word file to a PDF file."
      />
    </>
  );
}
