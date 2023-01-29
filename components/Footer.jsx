import { useState, useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const year = new Date().getFullYear();
    setnewYear(year);
  }, []);

  const [newYear, setnewYear] = useState(" ");

  return (
    <>
      <div className="border-top">
        <footer className="container py-3 mx-auto">
          <div className="text-center">
            <span className="text-dm" style={{ fontSize: "15px" }}>
              &copy; {newYear} • The ToolKit, Inc
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
