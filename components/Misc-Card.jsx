import ToolCard from "./Tool-Card";

export default function MiscCard() {
  return (
    <>
      <ToolCard
        url="/misc-tools/javascript-formatter"
        icon={<i className="fa-regular fa-file-pdf fa-2xl"></i>}
        title="Javascript formatter"
        desc="Format/beautify your JavaScript code and copy the formatted code to your clipboard or download as a file"
      />
    </>
  );
}
