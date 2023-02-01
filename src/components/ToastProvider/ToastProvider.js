import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const createToast = (type, message) => {
    const nextToasts = [
      ...toasts,
      { id: Math.random(), type, message },
    ];
    setToasts(nextToasts);
  }
  
  const dismissToast = (toastId) => {
    const newToasts = toasts.filter(({ id }) => id !== toastId);
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ setToasts, dismissToast, toasts, createToast}}>
    {children}
  </ToastContext.Provider>
  )

}

export default ToastProvider;
 