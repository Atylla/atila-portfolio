import { loadingInitial } from "./inicial.js/loading.js";
import { navBar, toggleInterruptor } from "./navegacao/nav-bar.js";
import { cardsProjetos } from "./projetos/cards.js";
import { btnCircle } from "./sections/circle.js";
import { sectionFocus } from "./sections/section.js";
import { skills } from "./sections/skills.js";
import { verProjetos } from "./sections/ver-projeots.js";



document.addEventListener("DOMContentLoaded", () => {
    loadingInitial();
    btnCircle();
    navBar();
    skills();
    verProjetos();
    cardsProjetos();
    sectionFocus();
    toggleInterruptor();
});