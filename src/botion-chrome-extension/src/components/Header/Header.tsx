import * as React from "react";
import { Heading } from "../Heading";
import { CloseButton } from "./CloseButton";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.Container}>
      <Heading el="h1">Automations</Heading>
      <div className={css.Actions}>
        <CloseButton />
      </div>
    </div>
  );
};
