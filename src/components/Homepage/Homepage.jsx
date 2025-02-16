import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from "./homepage.module.css";
import { Card } from "../Card/Card";

export const Homepage = () => {
  const sampleData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Task ${index + 1}`,
    priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
  }));
  const [data, setdata] = useState(sampleData ?? []);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [name, setname] = useState("");
  const [priority, setpriority] = useState("");
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#99e6e3",
      fontWeight: 600,
      fontSize: "24px",
    },
  };

  const handleModalClose = () => {
    setmodalIsOpen(false);
    handleReset();
  };

  const handleModalOpen = () => {
    setmodalIsOpen(true);
  };
  const handleReset = () => {
    setname("");
    setpriority("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setdata([...data, { id: data.length + 1, name: name, priority: priority }]);
    handleModalClose();
  };

  return (
    <section className={styles.homePageBox}>
      <div className={styles.homePageCardContainer}>
        {data.length > 0 &&
          data.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
      </div>
      <div className={styles.cardToolbar}>
        <button onClick={handleModalOpen} className={styles.addButton}>
          {data.length > 0 ? "Add" : "Create"}
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleModalClose}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <header style={{ textAlign: "center" }}>
              Enter your Task Details
            </header>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <div className={styles.modalField}>
                <label>Name:</label>
                <input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  className={styles.field}
                ></input>
              </div>
              <div className={styles.modalField}>
                <label>Priority:</label>
                <input
                  value={priority}
                  onChange={(e) => setpriority(e.target.value)}
                  className={styles.field}
                ></input>
              </div>
              <div className={styles.modalToolbar}>
                <button
                  className={styles.cancelButton}
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
                <button className={styles.addButton} type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </section>
  );
};
