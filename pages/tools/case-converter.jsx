import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function CaseConverter(params) {
  return (
    <>
      <Header />
      <Sidebar caseconverter="active-category" />
    </>
  );
}
