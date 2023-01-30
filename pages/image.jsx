import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Name from "@/components/Name";
import Sidebar from "@/components/Sidebar";

export default function Image() {
  return (
    <>
      <Header />
      <div class="container-fluid">
        <div class="row">
          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-5 my-5">
            <div className="col-lg-10">
              <Name id="image" name="Image tools" />
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
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
