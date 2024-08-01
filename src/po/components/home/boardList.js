export class BoardListComponent{
    // boardList(param) {
    //     selectors = {
            
    //     }
    //     return $(``)
    // }

    get firstBoard() {
        return $(`//ul[@class="boards-page-board-section-list"]/descendant::a[1]`)
    }
}