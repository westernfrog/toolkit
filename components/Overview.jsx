import Categories from "./Categories";
import PopCard from "./PopCard";

export default function Overview() {
  return (
    <>
      <div className="text-lg-center mx-3">
        <div className="col-md-6 mx-auto mt-5">
          <h1 className="display-5 text-rubik fw-bold">
            Welcome to The ToolKit.
          </h1>
          <p className="text-dm">
            The ToolKit is an online tool factory where you can get all tools
            you needed in one place. Every tool is designed to solve a problem
            with minimum number of steps to save time of the users and decrease
            the complexity of the operation.
          </p>
          <div className="row my-5 pb-5 border-bottom">
            <PopCard
              url="tools/text"
              title="Text formatters"
              desc="Case converters, Lorem ipsum generator and many more.."
              style="linear-gradient(300deg, #EBC7E6 0%, #645CBB 70%)"
            />
            <PopCard
              title="Image tools"
              desc="Image filters, Image to Base64 convertor and more.."
              style="linear-gradient(0deg, #FD8A8A 0%, #FF74B1 90%)"
            />
          </div>
          <Categories />
        </div>
      </div>
    </>
  );
}
