import React from 'react';

import * as styles from "./Badge.module.css";

function Badge({
  type,
  children,
}) {
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      {children}
    </div>
  );
}

export default Badge;
