import { WorkspaceComponent } from "../components/board/workspace.component.js";
import { HeaderHomeComponent } from "../components/header.home.component.js";

export class BoardPage{
    constructor() {
        this.header = new HeaderHomeComponent
        this.workSpace = new WorkspaceComponent
    }
}