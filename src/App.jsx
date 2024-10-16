import { useState } from "react";
import styles from "./component/App.module.css";
import Buttons from "./component/Buttons";
import Display from "./component/Display";
const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  let handleBtnClick = (ButtonName) => {
    setCurrentValue(currentValue + ButtonName);
    if (ButtonName === "C" || ButtonName === "CE") {
      setCurrentValue("");
    } else if (ButtonName === "=") {
      let result = eval(currentValue);
      setCurrentValue(result);
    } else if (ButtonName === "%") {
      let resulPer = currentValue * (1 / 100);
      setCurrentValue(resulPer);
    } else if (ButtonName === "DE") {
      let resultDe = currentValue.slice(0, -1);
      setCurrentValue(resultDe);
    } else if (ButtonName === "1/x") {
      let resultOneByX = eval(1 / currentValue);
      setCurrentValue(resultOneByX);
    } else if (ButtonName === "x^2") {
      let resultSquare = eval(currentValue * currentValue);
      setCurrentValue(resultSquare);
    } else if (ButtonName === "+/-") {
      setCurrentValue(-currentValue);
    } else if (ButtonName === "rootx") {
      let resultRoot = Math.sqrt(currentValue);
      setCurrentValue(resultRoot);
    }
  };
  return (
    <center>
      <h2 className={styles.heading}> Standard Calculator</h2>
      <div className={styles.calculator}>
        <Display currentValue={currentValue} />
        <Buttons handleBtnClick={handleBtnClick} />
      </div>
    </center>
  );
};
export default App;
