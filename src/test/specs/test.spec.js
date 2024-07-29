import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage

describe('Sign up/ Sign in', () => {
    before(async () => {
        await startPage.open()
    })
    it('Sign in', async () => {
        await $('//a[contains(@data-uuid,"MJFtCCgVhXrVl7v9HA7EH_login")]').click()
        await browser.pause(2000)
        await $('input#username').setValue('jijis24506@orsbap.com')
        await $('#login-submit').click()
        await browser.pause(2000)
        await $('input#password').setValue('Crp8xmH8GL=39Fs')
        await $('#login-submit').click()
        await browser.pause(2000)

        await expect(await $('//div[contains(@title, "test_user (jijis24506)")]').isExisting()).toEqual(true)
    })
    it('Create a board', async () => {
        await $('//button[contains(@data-testid, "header-create-menu-button")]').click()
        await $('//button[contains(@data-testid, "header-create-board-button")]').click()
        await browser.pause(2000)
        await $('//input[contains(@data-testid, "create-board-title-input")]').setValue('test-board')
        await $('//button[contains(@data-testid, "create-board-submit-button")]').click()
        await browser.pause(2000)
    
        await expect(await $('//h1[contains(@data-testid, "board-name-display")]').getText()).toEqual('test-board')
    })
})