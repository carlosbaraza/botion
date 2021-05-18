import "dashvar/dist/dashvar.css";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { Modal } from "./components/Modal";
import { useMainStore } from "./stores/main";

export const App = () => {
  const { isModalOpen } = useMainStore();
  return <AnimatePresence>{isModalOpen && <Modal />}</AnimatePresence>;
};

export default App;
