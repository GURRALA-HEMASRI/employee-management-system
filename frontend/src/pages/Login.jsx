
// import {useNavigate} from "react-router-dom";
// export default function Login(){
//  const nav=useNavigate();
//  return(
//   <div>
//    <h2>Login</h2>
//    <input placeholder="Email"/>
//    <input placeholder="Password"/>
//    <button className="btn" onClick={()=>nav("/")}>Login</button>
//   </div>
//  )
// }
import { useNavigate } from "react-router-dom";

export default function Login() {

  const nav = useNavigate();

  return (

    <div className="login-container">

      <div className="card">

        <h1 className="page-title">
          Login
        </h1>

        <input placeholder="Email" />

        <input
          type="password"
          placeholder="Password"
        />

        <button
          className="btn"
          style={{width:"100%"}}
          onClick={()=>nav("/")}
        >
          Login
        </button>

      </div>

    </div>
  );
}