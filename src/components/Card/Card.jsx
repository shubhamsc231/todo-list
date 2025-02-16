import React, { useState, useEffect } from "react";
import styles from "./Card.module.css";
export const Card = ({ item, index }) => {
  console.log("item", item);
  return (
    <div className={styles.CardContainer} key={index}>
      <div>{item?.name}</div>
      <div>{item?.priority}</div>
    </div>
  );
};
