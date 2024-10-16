import styles from "../component/Display.module.css";
const Display = ({ currentValue }) => {
  return (
    <>
      <div className={styles.display}>
        <input type="text" value={currentValue} readOnly name="" id="" />
      </div>
    </>
  );
};
export default Display;
