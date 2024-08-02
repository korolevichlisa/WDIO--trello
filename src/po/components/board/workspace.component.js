export class WorkspaceComponent{
    get createList() {
        return $('//button[@data-testid="list-composer-button"]')
    }

    get lastListTitle() {
        return $('(//h2[@data-testid="list-name"])[last()]')
    }

    listItem(param) {
       const selectors = {
           textArea: 'textarea[@data-testid="list-name-textarea"]',
           btn: 'button[@data-testid="list-composer-add-list-button"]'
        }
        return $(`//form/descendant::${selectors[param]}`)
    }

    get createCard() {
        return $('(//button[@data-testid="list-add-card-button"])[last()]')
    }

    get createdCardName() {
        return $('//a[@data-testid="card-name"]')
    }

    cardItem(param) {
        const selectors = {
            textArea:'textarea[@data-testid="list-card-composer-textarea"]',
            btn: 'button[@data-testid="list-card-composer-add-card-button"]'
        }
        return $(`//form/descendant::${selectors[param]}`)
    }

    boardHeader(param) {
        const selectors = {
            menuBtn: 'span[@data-testid="OverflowMenuHorizontalIcon"]',
            filterBtn: 'button[@data-testid="filter-popover-button"]',
            title:'h1[contains(@data-testid, "board-name-display")]'
        }
        return $(`//div[@class="RPO6eTW4FLJhI0"]/descendant::${selectors[param]}`)
        // return $(`//span[@class="leC8WfkzmokiUl"]/descendant::${selectors[param]}`)
    }

    menuBoard(param) {
        const selectors = {
            closeBoard: '//a[contains(@class,"js-close-board")]',
            confirmCloseBoard: '//input[@data-testid="close-board-confirm-button"]',
            deleteBoard: '//button[@data-testid="close-board-delete-board-button"]',
            confirmDelBoard: '//button[@data-testid="close-board-delete-board-confirm-button"]',
            settings: '//a[contains(@class," js-open-settings")]',
            permissionsAddRemoveMembers: '//a[@data-testid="add-remove-members-item"]',
            permissionsForAdminsAddRemoveMembers: '//a[@name="admins"]',
            addRemoveMembers: '//a[@data-testid="add-remove-members-item"]/descendant::span[@class="Ok1H3hZ4AitKti"]',
            closeMenuPopUp: '//a[contains(@class,"board-menu-header-close-button")]'
        }
        return $(`${selectors[param]}`)
    }

    filterPopUp(param) {
        const selectors = {
            input: 'input[contains(@class,"nch-textfield__input")]',
            closeBtn: 'button[@data-testid="popover-close"]'
        }
        return $(`//section[@class="rX4pAv5sWHFNjp js-react-root"]/descendant::${selectors[param]}`)
    }
}

