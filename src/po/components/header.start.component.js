export class HeaderStartComponent{
    item(param) {
        const selectors = {
            logo:'logo',
            login: 'login',  
            signUp: 'signup',
        }
        return $(`//a[contains(@data-uuid,"MJFtCCgVhXrVl7v9HA7EH_${selectors[param.toLowerCase()]}")]`)
    }
}