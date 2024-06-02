import { keyboardInputHandler } from "./actions.js";

export function start() {
    document.addEventListener("keydown", keyboardInputHandler); // Ativa a escuta no teclado
}