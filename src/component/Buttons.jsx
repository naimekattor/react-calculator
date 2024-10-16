import styles from "../component/Buttons.module.css";
const Buttons = ({ handleBtnClick }) => {
  let buttonItems = [
    "%",
    "CE",
    "C",
    "DE",
    "1/x",
    "x^2",
    "rootx",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];
  return (
    <>
      <div className={styles.buttons}>
        {buttonItems.map((ButtonName) => (
          <button
            key={ButtonName}
            className=" active btn btn-info"
            onClick={() => handleBtnClick(ButtonName)}
          >
            {ButtonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default Buttons;
