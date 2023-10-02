import { overlay_sec } from "../app.js";
const body=document.body;
export function close(){
    body.style.setProperty("--pseudo-opacity", "0");
    body.style.setProperty("--pseudo-translate-body", "translate(0px,-100%)");

    overlay_sec.style.setProperty("--pseudo-opacity", "0");
    overlay_sec.style.setProperty("--pseudo-translate", "translate(2px, -100%)");
    overlay_sec.style.setProperty("--pseudo-translate-sm", "translate(1px, -100%)");


}