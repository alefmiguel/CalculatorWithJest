import styles from "./Button.module.css";

function Button() {
  return (
    <div className={styles.container}>
      <p className={styles.mult}>
        <span className="material-symbols-outlined mult">close</span>
      </p>
    </div>
  );
}

export default Button;
