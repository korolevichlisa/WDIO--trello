export class BoardListComponent{
      get firstBoard() {
        return $(`//ul[@class="boards-page-board-section-list"]/descendant::a[1]`)
    }
}