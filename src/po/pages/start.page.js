import { HeaderStartComponent } from "../components/header.start.component.js"

export class StartPage{
    constructor() {
        this.header = new HeaderStartComponent
    }
    open() {
        return browser.url('https://trello.com/')
    }
}