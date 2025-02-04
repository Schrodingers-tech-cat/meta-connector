import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/configuration.css"

function Configuration() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="button-group">
        <div className="button-item">
          <span>Login To FaceBook : </span>
          <button onClick={() => navigate("/facebook")}>Facebook</button>
        </div>
        <div className="button-item">
          <span>Login To Instagram : </span>
          <button onClick={() => navigate("/instagram")}>Instagram</button>
        </div>
      </div>
    </div>
  );
}

export default Configuration;
