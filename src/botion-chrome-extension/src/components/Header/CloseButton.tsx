import * as React from "react";
import { IoMdClose } from "react-icons/io";
import { useMainStore } from "../../stores/main";
import css from "./CloseButton.module.css";

export const CloseButton = () => {
  const { closeModal } = useMainStore();
  return (
    <div role="button" className={css.Container} onClick={closeModal}>
      <IoMdClose />
    </div>
  );
};
