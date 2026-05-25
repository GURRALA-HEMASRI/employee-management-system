
import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import API from "../api";

export default function EmployeeDetails(){
 const {id}=useParams();
 const [data,setData]=useState({});
 useEffect(()=>{
  API.get("/employees/"+id).then(r=>setData(r.data.data));
 },[id]);

 return(
  <div>
   <h2>Employee Details</h2>
   <div className="card">
    <p>Name: {data.name}</p>
    <p>Email: {data.email}</p>
    <p>Phone: {data.phone}</p>
    <p>Position: {data.position}</p>
    <p>Salary: {data.salary}</p>
   </div>
  </div>
 )
}
