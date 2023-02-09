import ToolCard from "./Tool-Card";

export default function TextCard() {
  return (
    <>
      <ToolCard
        url="/text-tools/case-converter"
        icon={<i className="fa-solid fa-font fa-2xl"></i>}
        title="Case converter"
        desc="Convert your text or string to uppercase, lowercase, title-case or sentence-case."
      />
      <ToolCard
        url="/text-tools/lorem-ipsum-generator"
        icon={<i className="fa-solid fa-pencil fa-2xl"></i>}
        title="Lorem Ipsum generator"
        desc="Create your placeholder texts with desired number of paragraphs and properties."
      />
      <ToolCard
        url="/text-tools/letter-counter"
        icon={<i className="fa-solid fa-calculator fa-2xl"></i>}
        title="Letter counter"
        desc="Count letters, words and sentences in a text and analyze this numbers with common limits."
      />
      <ToolCard
        url="/text-tools/javascript-formatter"
        icon={<i className="fa-solid fa-laptop-code fa-2xl"></i>}
        title="Prettify JavaScript"
        desc="Format/beautify your JavaScript code and copy the formatted code to your clipboard."
      />
    </>
  );
}
