import * as React from "react";
import { FC, ReactNode } from "react";
import css from "./Heading.module.css";

type Props = {
  children: ReactNode;
  el: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: FC<Props> = (props) => {
  return <props.el className={css.Container}>{props.children}</props.el>;
};
