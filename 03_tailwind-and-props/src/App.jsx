// import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObject = {
    username: "Alice",
    age: 22,
  };

  // let newArray = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username="chaiarucode" btnText="click me" />
      <Card username="Pranay Sanjule" btnText="visit me" />
    </>
  );
}

export default App;
