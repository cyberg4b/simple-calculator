import { result } from './display.js'
import { state } from './state.js'

export function insertValue(val) {
    if (val == "C") {
        result.value = ""
        return 0
    }
    if (val == "<-") {
        inputFlag = ""
        Array.from(result.value).forEach(item => { // transcreve todo valor do result para inputFlag com um caractere a menos
            if (inputFlag.length < result.value.length - 1) {
                inputFlag += item
            }
        })
        result.value = inputFlag

    } else {
        result.value += val
    }
}

export function calcThis() {
    let resultValue = eval(result.value)

    if (isNaN(resultValue)) {
        result.value = "Syntax Error!"
        setTimeout(() => {
            result.value = "0"
        }, 1300)

    } else {
        result.value = resultValue
        state.haveOperator = false
    }
}

// Função para lidar com o input do teclado
export function keyboardInputHandler(e) {
    e.preventDefault()

    switch (true) {
        case /[0-9.]/.test(e.key):
            result.value += e.key
            break
        case /^[+\-*/%]/.test(e.key):
            if(state.haveOperator) {
                result.value = result.value.replace(result.value[result.value.length-1], e.key)
            } else {
                result.value += e.key
            }

            state.haveOperator = /[+\-*/%]/.test(e.key) // Verifica se tem algum operador matemático no input
            break
    }

    if (e.key === "Enter") {
        calcThis()
    }

    if (e.key === "Backspace") {
        const resultInput = result.value
        result.value = resultInput.substring(0, result.value.length - 1)

        if (result.value.length == 0) {
            state.haveOperator = false
        }
    }
}