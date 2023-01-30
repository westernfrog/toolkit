import Card from "./Card";

export default function File0() {
  return (
    <>
      <Card
        color={{ color: "#D61355" }}
        icon={<i class="fa-regular fa-file-pdf fa-2xl"></i>}
        title="PDF to Word converter"
        desc="Convert PDF file to a Word file."
      />
      <Card
        color={{ color: "#3C79F5" }}
        icon={<i class="fa-regular fa-file-word fa-2xl"></i>}
        title="Word to PDF converter"
        desc="Convert Word file to a PDF file."
      />
    </>
  );
}
