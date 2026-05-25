import { Link } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";

export default function Sidebar() {

  return (

    <div className="sidebar">

      <h2>EMS</h2>

      <Link to="/">
        <FaHome />
        Dashboard
      </Link>

      <Link to="/employees">
        <FaUsers />
        Employees
      </Link>

      <Link to="/login">
        Login
      </Link>

    </div>
  );
}