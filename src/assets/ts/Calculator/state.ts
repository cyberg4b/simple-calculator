interface State {
    firstNum: boolean,
    haveOperator: boolean,
    isResult: boolean,
    syntaxError: boolean
}

export const state: State = {
    firstNum: true,
    haveOperator: false,
    isResult: false,
    syntaxError: false
}