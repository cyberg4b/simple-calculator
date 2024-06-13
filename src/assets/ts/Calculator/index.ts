import { insertValue, keyboardInputHandler } from "./actions.js";
import { buttons } from "./display.js"

export function start(): void {
    document.addEventListener("keydown", keyboardInputHandler as EventListener); // Activate listening on the keyboard

    for(let button of buttons) {
        button.addEventListener("click", insertValue as EventListener)
    }
}