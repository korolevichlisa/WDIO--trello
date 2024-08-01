export class Form{
    get btn() {
        return $('#login-submit')
    }
    item(param) {
        const selectors = {
            username:'username',
            password: 'password',
        }
        return $(`//input[contains(@data-testid, "${selectors[param]}")]`)
    }
}

