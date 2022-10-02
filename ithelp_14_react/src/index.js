import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import HelloWorld from './day5/HelloWorld';
// import Counter from "./day6/Counter";
// import ChangeStr from "./day8/ChangeStr";
// import ChangeStr from "./day9/ChangeStr";
// import StrCodeChange from "./day11/StrCodeChange";
// import Welcome from "./day13/PropsSample";
// import ShowSample from "./day13/ShowSample";
// import ShowSample from "./day14/BioTool";
// import DegreeChange from "./day15/TempChange";
import StrCodeChange from "./day16/StrCodeChange";

//day4
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//day5
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloWorld />
//   </React.StrictMode>,
// );

// //day6
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />);
// // root.render(
// //   <React.StrictMode>
// //     <Counter />
// //   </React.StrictMode>,
// // );

// //day8
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(<ChangeStr />);

// //day9
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(<ChangeStr />);

// //day11
// const root11 = ReactDOM.createRoot(document.getElementById("root"));
// root11.render(<StrCodeChange />);

// //day13
// const root13 = ReactDOM.createRoot(document.getElementById("root"));
// // root13.render(<Welcome name="Eyelash" />);
// // root13.render(<Welcome name="睫毛" />);
// root13.render(<ShowSample />);

// //day14
// const root14 = ReactDOM.createRoot(document.getElementById("root"));
// root14.render(<ShowSample />);

// //day15
// const root15 = ReactDOM.createRoot(document.getElementById("root"));
// root15.render(<DegreeChange />);

//day16
const root16 = ReactDOM.createRoot(document.getElementById("root"));
root16.render(<StrCodeChange />);

// var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
// ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
