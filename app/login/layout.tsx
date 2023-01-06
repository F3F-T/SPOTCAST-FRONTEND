/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/react-in-jsx-scope */

"use client";

import styles from "../../styles/layout.module.css";

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.Full}>
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className={styles.InnerFull}>{children}</div>
    </section>
  );
}
