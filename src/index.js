import React from "react";
import ReactDOM from "react-dom";

const getButtonText = () => {
  return "click on me!";
};

const getTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  // const buttonText = { text: "click me!" };
  // const style = { backgroundColor: "blue", color: "white" };
  // return (
  //   <div>
  //     <label className="label" htmlFor="name">
  //       Enter name:
  //     </label>
  //     <input id="name" type="text" />
  //     <button style={style}>{buttonText.text}</button>
  //   </div>
  // );

  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()}</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
