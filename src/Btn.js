import React from "react";
import "./Btn.css";
import { useState } from "react";
export default function Btn() {
  const [calc, setCalc] = useState("");

  const [result, setresult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updatecalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  };
  const createdigits = () => {
    const digit = [];
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button onClick={() => updatecalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digit;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deletelast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="Main">
      <div className="cal">
        <div className="display">
          {result ? <span>{result}</span> : ""}&nbsp;
          {calc || "0"}
          <div>
            <div className="opr">
              <button onClick={() => updatecalc("/")}>/</button>
              <button onClick={() => updatecalc("*")}>*</button>
              <button onClick={() => updatecalc("+")}>+</button>
              <button onClick={() => updatecalc("-")}>-</button>
              <button onClick={deletelast}>Del</button>
            </div>
            <div className="digits">
              {createdigits()}
              <button onClick={() => updatecalc("0")}>0</button>
              <button onClick={() => updatecalc(".")}>.</button>
              <button onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
