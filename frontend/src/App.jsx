
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import EmployeeDetails from "./pages/EmployeeDetails";
import Login from "./pages/Login";

export default function App(){
 return(
  <BrowserRouter>
   <Sidebar/>
   <div className="content">
    <Routes>
     <Route path="/" element={<Dashboard/>}/>
     <Route path="/employees" element={<Employees/>}/>
     <Route path="/employees/:id" element={<EmployeeDetails/>}/>
     <Route path="/login" element={<Login/>}/>
    </Routes>
   </div>
  </BrowserRouter>
 )
}
