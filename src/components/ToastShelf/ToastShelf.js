import React from "react";
import styles from "./ToastShelf.module.css";
import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { dismissToast, toasts } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ type, message, id }) => (
        <Toast key={id} type={type} dissmissToast={() => dismissToast(id)}>
          {message}
        </Toast>
      ))}
    </ol>
  );
}

export default ToastShelf;
