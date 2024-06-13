import { insertValue, keyboardInputHandler } from "./actions.js";
import { buttons } from "./display.js";
export function start() {
    document.addEventListener("keydown", keyboardInputHandler);
    for (let button of buttons) {
        button.addEventListener("click", insertValue);
    }
}
