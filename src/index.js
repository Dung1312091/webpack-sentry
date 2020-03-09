import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
Sentry.init({
  dsn: "https://70cd0cb5f0c04de18bbd9a15203ff3c8@sentry.io/4160835"
});
const App = () => {
  const handleClick = () => {
    let a;
    a.forEach(element => {
      console.log(element);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
