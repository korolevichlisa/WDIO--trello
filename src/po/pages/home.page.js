import { HeaderHomeComponent } from "../components/header.home.component.js";
import { PopUpComponent } from "../components/home/pop-up.component.js";
import { BoardListComponent } from "../components/home/boardList.js";
import { ProfilePopUp } from "../components/home/profile-pop-up.component.js";

export class HomePage{
    constructor() {
        this.header = new HeaderHomeComponent()
        this.popUp = new PopUpComponent()
        this.boardList = new BoardListComponent()
        this.profilePopUp = new ProfilePopUp()
    }
}