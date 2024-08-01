import { HeaderHomeComponent } from "../components/header.home.component.js";
import { PopUpComponent } from "../components/home/pop-up.component.js";
import { BoardListComponent } from "../components/home/boardList.js";

export class HomePage{
    constructor() {
        this.header = new HeaderHomeComponent
        this.popUp = new PopUpComponent
        this.boardList = new BoardListComponent
    }
}