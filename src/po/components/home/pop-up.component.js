export class PopUpComponent{
    createBoardMenuPopOver(param) {
        const selectors = {
            createBoardBtn: 'button[@data-testid="header-create-board-button"]',
            nameBoard: 'input[contains(@data-testid, "create-board-title-input")]',
            submitBoardBtn: 'button[contains(@data-testid, "create-board-submit-button")]',
        }
        return $(`//section[contains(@data-testid,"header-create-menu-popover")]/descendant::${selectors[param]}`)
    }
}