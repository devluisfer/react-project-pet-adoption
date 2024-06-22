import { useState } from "react";

const Test = () => {

    const [toggle, setToggle] = useState(false);
    const HandleTogle = () => {
        setToggle(!toggle);
        console.log(toggle);
    }
  return (
    <>
      <div>
        <h1>Test</h1>
        <button onClick={HandleTogle}>boton</button>
        <p>{toggle ? "ON" : "OFF"}</p>
      </div>
    </>
  );
};

export default Test;