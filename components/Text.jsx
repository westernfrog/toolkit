import Card from "./Card";

export default function TextCard() {
  return (
    <>
      <Card
        url="/tools/case-converter"
        icon={<i className="fa-solid fa-font fa-2xl"></i>}
        title="Case converter"
        desc="Convert your text or string to uppercase, lowercase, title-case or sentence-case."
      />
      <Card
        url="/tools/text-format"
        icon={<i className="fa-solid fa-text-height fa-2xl"></i>}
        title="Text formatting"
        desc="Convert your text into handwriting with desired paper type and ink color and download as PDF."
      />
      <Card
        url="/tools/lorem-ipsum-generator"
        icon={<i className="fa-solid fa-pencil fa-2xl"></i>}
        title="Lorem ipsum generator"
        desc="Create your placeholder texts with desired number of paragraphs and properties."
      />
      <Card
        url="/tools/letter-counter"
        icon={<i className="fa-solid fa-calculator fa-2xl"></i>}
        title="Letter counter"
        desc="Count letters, words and sentences in a text and analyze this numbers with common limits."
      />
      <Card
        url="/tools/javascript-formatter"
        icon={<i className="fa-solid fa-laptop-code fa-2xl"></i>}
        title="Prettify JavaScript"
        desc="Format/beautify your JavaScript code and copy the formatted code to your clipboard."
      />
    </>
  );
}
