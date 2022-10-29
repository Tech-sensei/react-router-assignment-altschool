import React from "react";
import Spinner from "../components/image/spinner.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} alt="" className="spinner" />
    </div>
  );
};

export default Loading;
