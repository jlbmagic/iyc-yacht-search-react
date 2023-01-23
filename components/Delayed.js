import React from "react";

export const Delayed = ({ children, waitTime = 1000 }) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => setShow(true), waitTime);
    return () => clearTimeout(timeout);
  }, []);
  return show ? children : null;
};
