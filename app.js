import { rule } from "./utils/rules.js";
import { close } from "./utils/close.js";

const rules_sec=document.querySelector(".rule-sec");
const close_icon=document.querySelector(".close");
export const overlay_sec=rules_sec.nextElementSibling;

rules_sec.addEventListener("click",()=>{
    rule()
})

close_icon.addEventListener("click",()=>{
    close()
})
