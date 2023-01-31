import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function LetterCounter(params) {
  return (
    <>
      <Header />
      <Sidebar lettercounter="active-category" />
    </>
  );
}
