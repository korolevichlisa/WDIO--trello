export class HeaderHomeComponent{
    
    item (param){
        const selectors = {
            createMenuBtn: 'button[@data-testid="header-create-menu-button"]',
            searchField: 'input[@data-testid="cross-product-search-input-skeleton"]',
            userName: 'div[contains(@title, "test_user (jijis24506)")]',
            logo:'a[@class="nNP_5Djh_w6vsG r1qqiIjlUDS6sp"]'
        }
        return $(`//nav[contains(@id,"header")]/descendant::${selectors[param]}`)
        
    }
}