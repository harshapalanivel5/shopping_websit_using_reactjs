import React from "react"
import { useNavigate, useParams } from "react-router-dom"

function Login() {

  let {newuser} = useParams()
  let navigate = useNavigate();

  let handlenavigate =()=>{
    navigate("/");
  }

  return (
    <div>
      Login {newuser}
      <button onClick={ handlenavigate }>Move to Home</button>
    </div>
  )
}

export default Login