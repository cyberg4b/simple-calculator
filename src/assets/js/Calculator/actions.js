import { result } from './display.js'
import { state } from './state.js'

function calcThis() {
    try {
        let resultValue = eval(result.value)
    
        result.value = resultValue
        state.haveOperator = false

    } catch(SyntaxError) {
        result.value = "Syntax Error!"

        setTimeout(() => {
            result.value = ""
        }, 1300)
    }
}

export function insertValue(button) {
    const val = button.target.innerText

    switch(val) {
        case "AC":
            result.value = ""
            break
        case "←":
            let inputFlag = ""
            
            Array.from(result.value).forEach(item => { // transcreve todo valor do result para inputFlag com um caractere a menos
                if (inputFlag.length < result.value.length - 1) {
                    inputFlag += item
                }
            })
            result.value = inputFlag
            break
        case "x":
            result.value += "*"
            break
        case "÷":
            result.value += "/"
            break
        case "=":
            if(!result.value.length) {
                break
            } else {
                calcThis()
                break
            }
        default:
            result.value += val
    }
}

// Função para lidar com o input do teclado
export function keyboardInputHandler(e) {
    e.preventDefault()

    switch (true) {
        case /[0-9.]/.test(e.key):
            if(e.key == 0 && result.value.length == 0) { // Não acrescenta mais nenhum zero caso seja primeiro número
                break
            } else {
                result.value += e.key
                break
            }
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