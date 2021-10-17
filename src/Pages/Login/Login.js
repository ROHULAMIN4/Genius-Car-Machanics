import React from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoole } = useAuth();
  return (
    <div>
      <h3>Login</h3>
      <div onClick={signInUsingGoole} className="btn btn btn-warning">
        Sign in Google
      </div>
    </div>
  );
};

export default Login;
