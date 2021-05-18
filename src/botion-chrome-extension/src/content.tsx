// This file is injected as a content script

import * as ReactDOM from "react-dom";
import * as React from "react";
import { App } from "./App";
import css from "./content.module.css";
import { useMainStore } from "./stores/main";

const containerEl = document.createElement("div");
containerEl.id = "botion-container";
const body = document.getElementsByTagName("body");
body[0]?.prepend(containerEl);

ReactDOM.render(<App />, containerEl);

function init() {
  const els = document.querySelectorAll('.notion-focusable[role="button"]');

  let propertiesEl: Element | null = null;
  for (let index = 0; index < els.length; index++) {
    const el = els[index];
    if (el.textContent === "Properties") {
      propertiesEl = el;
    }
  }
  if (propertiesEl) {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add(css.AutomationButton);
    buttonEl.textContent = "Automations 🤖";
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      useMainStore.getState().openModal();
    });
    propertiesEl.parentElement?.prepend(buttonEl);
  } else {
    setTimeout(init, 2000);
  }
}

window.addEventListener("load", init);
