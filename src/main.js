import "./styles/tw.css";
import "./styles/main.scss";

import { initThemeToggle } from "./js/common/theme";

initThemeToggle();

// 👇 ВОТ ОН — CODE SPLITTING
const page = document.body.dataset.page;

if (page === "about") {
  import("./js/app/aboutPage").then(m => m.initAbout());
}