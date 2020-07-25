import chalk from 'chalk'

export class Logger {

    private _isDebug: boolean

    constructor(isDebug: boolean = true) {
        this._isDebug = isDebug
    }

    log(...arg) {
        this._isDebug && console.log(...arg)
    }

    warn(...arg) {
        this._isDebug && console.log(chalk.yellow(...arg))
    }

    error(...arg) {
        this._isDebug && console.log(chalk.red(...arg))
    }

    info(...arg) {
        this._isDebug && console.log(chalk.green(...arg))
    }
}