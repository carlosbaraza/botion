import { motion } from "framer-motion";
import * as React from "react";
import { useMainStore } from "../stores/main";
import { Header } from "./Header/Header";
import css from "./Modal.module.css";

export const Modal = () => {
  const { closeModal } = useMainStore();

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={css.Botion}
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.3 }}
        animate={{ scale: 1 }}
        className={css.Inner}
        onClick={(e) => e.stopPropagation()}
      >
        <Header />
        <div>This is a great Notion automation bot</div>
      </motion.div>
    </motion.div>
  );
};
