import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function SigninPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  }
  return (
    <>
      <div>
        <h1>SigninPage</h1>

        <button onClick={handleClick}>Go to About</button>
      </div>
    </>
  );
}
export default SigninPage;
