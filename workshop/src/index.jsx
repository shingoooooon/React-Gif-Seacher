import '../assets/stylesheets/application.scss';

import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./components/App";

// functional component
// const Hello = (props) => {
//   const { name, age } = props;
//   return <h1>Hi I'm { name }, { age } years old</h1>;
// };

// Class component
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     return <h1>Hi I'm { name }, { age } years old</h1>;
//   }
// }

const container = document.querySelector("#root");

if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(<App />);
}
