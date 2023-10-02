const body=document.body;
import { overlay_sec } from "../app.js";
export function rule(){
    body.style.setProperty("--pseudo-opacity", "1");
    body.style.setProperty("--pseudo-translate-body", "translate(0px,0px)");

    overlay_sec.style.setProperty("--pseudo-opacity", "1");
    overlay_sec.style.setProperty("--pseudo-translate", "translate(2px, 49px)");
    overlay_sec.style.setProperty("--pseudo-translate-sm", "translate(0px, 0px)");



}
