"use client";
import styles from "./Header.module.css";
import Clock from "react-live-clock";

export default function Header({ data }) {
  return (
    <div className={styles.header}>
      <h1>
        {data.titulo}
      </h1>
      <Clock format={"HH:mm"} ticking={true} timezone={"America/Sao_Paulo"} className={styles.clock} />
    </div>
  );
}