import { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { ThemeContext } from "./ThemeContext";

export default function Layout({ children }) {

  const [open, setOpen] = useState(true);

  const { darkMode } =
    useContext(ThemeContext);

  return (

    <div className={
      darkMode ? "app dark" : "app"
    }>

      <Sidebar
        open={open}
        setOpen={setOpen}
      />

      <div className={
        open ? "main-content shift" : "main-content"
      }>

        <Navbar />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}