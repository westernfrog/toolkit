import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Share from "@/components/Share";
import { useState } from "react";

export default function LoremIpsum() {
  const [wordCount, setWordCount] = useState(200);

  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit, nunc eu rutrum luctus, lorem erat consequat enim, quis tincidunt erat ante eget justo. Nullam semper varius nisi, sit amet ullamcorper nisl laoreet non. Donec vestibulum, justo at tincidunt dictum, ex nisi blandit nisl, vel laoreet erat magna et massa. Sed euismod euismod est id laoreet. Sed ac velit vel eros auctor pellentesque. Proin vel accumsan velit, eget tincidunt tellus. In hac habitasse platea dictumst. Nunc malesuada faucibus varius. Nulla facilisi.Vivamus sit amet blandit nibh, euismod laoreet nulla. Sed tristique euismod ante, non tincidunt libero consectetur et. Aliquam fringilla volutpat turpis eget volutpat. Sed iaculis sapien vel nisi placerat, at consectetur velit tincidunt. Integer at ante id elit viverra blandit. Sed ullamcorper, lacus quis luctus accumsan, sem odio suscipit magna, vel suscipit ligula sem vitae sapien. Sed malesuada, est vel malesuada tempor, velit velit euismod nisi, vel dapibus enim lacus at lacus."
      .split(" ")
      .slice(0, wordCount)
      .join(" ");
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mx-0 px-md-5">
          <Sidebar loremipsum="active-category" />
          <main className="col-md-9 ms-sm-auto col-lg-9 col-xl-10 px-md-5 my-4">
            <Share
              name="Lorem Ipsum generator"
              url="text-tools/lorem-ipsum-generator"
            />
            <div className="text-rubik">
              <p>
                <label htmlFor="word-count">
                  Number of words:
                  <input
                    type="number"
                    id="word-count"
                    value={wordCount}
                    onChange={(e) => setWordCount(e.target.value)}
                  />
                </label>
              </p>
              <p className="text-dm">{loremIpsum}</p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
