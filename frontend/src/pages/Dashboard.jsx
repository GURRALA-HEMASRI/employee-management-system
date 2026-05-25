
// import {useEffect,useState} from "react";
// import API from "../api";

// export default function Dashboard(){
//  const [data,setData]=useState({});
//  useEffect(()=>{API.get("/dashboard/stats").then(r=>setData(r.data));},[]);
//  return(
//   <div>
//    <h2>Dashboard</h2>
//    <div className="card">Total Employees: {data.totalEmployees}</div>
//   </div>
//  )
// }
import { useEffect, useState } from "react";
import API from "../api";

export default function Dashboard() {

  const [data, setData] = useState({});

  useEffect(() => {
    API.get("/dashboard/stats")
      .then(res => setData(res.data));
  }, []);

  return (
    <div>

      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="card">

        <h2>Total Employees</h2>

        <h1 style={{marginTop:"10px"}}>
          {data.totalEmployees || 0}
        </h1>

      </div>

    </div>
  );
}