import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, type, dissmissToast }) {
  const Icon = ICONS_BY_VARIANT[type];
  return (
    <li className={styles.toastWrapper}>
      <div className={`${styles.toast} ${styles[type]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{type} -</VisuallyHidden>
          {children}
        </p>
        <button
          aria-label="Dismiss message"
          aria-live="off"
          className={styles.closeButton}
          onClick={dissmissToast}
        >
          <X size={24} />
        </button>
      </div>
    </li>
  );
}

export default Toast;
