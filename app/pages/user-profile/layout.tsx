/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/react-in-jsx-scope */

"use client";

import styles from "../../../styles/layout.module.css";
import Header from "../../../src/components/main/Header";
import Footer from "../../../src/components/main/Footer";

export default function ProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.Full}>
      <Header />
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className={styles.Inner}>{children}</div>
      <Footer />
    </section>
  );
}
