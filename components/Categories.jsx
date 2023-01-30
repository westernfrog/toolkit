import Link from "next/link";
import Tools from "./Tools";

export default function Categories() {
  return (
    <>
      <h1 className="fs-3 text-rubik fw-bold">Tools Categories</h1>
      <div className="row my-4 g-4 text-start">
        <Tools
          icon={<i className="fa-solid fa-font fa-xl mx-auto text-light"></i>}
          title="Text tools"
          desc="Generate and edit text"
          url="tools/text"
          color={{ backgroundColor: "#19c37d" }}
        />
        <Tools
          icon={
            <i className="fa-regular fa-image fa-xl mx-auto text-light"></i>
          }
          title="Image tools"
          desc="Generate and edit images"
          url="tools/image"
          color={{ backgroundColor: "#dd5ce5" }}
        />
        <Tools
          icon={
            <i className="fa-regular fa-file-pdf fa-xl mx-auto text-light"></i>
          }
          title="File tools"
          desc="Convert files as your wish"
          url="tools/file"
          color={{ backgroundColor: "#5436da" }}
        />
        <Tools
          icon={
            <i class="fa-solid fa-laptop-code fa-xl mx-auto text-light"></i>
          }
          title="JSON formatter"
          desc="Prettify json code"
          url="tools/json"
          color={{ backgroundColor: "#ef4146" }}
        />
        <Tools
          icon={
            <i className="fa-solid fa-paragraph fa-xl mx-auto text-light"></i>
          }
          title="Lorem ipsum generator"
          desc="Generate and edit lorem text"
          url="tools/lorem"
          color={{ backgroundColor: "#f4ac36" }}
        />
      </div>
    </>
  );
}
