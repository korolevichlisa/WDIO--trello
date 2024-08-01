import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage
const signInPage = new SignIn
const homePage = new HomePage
const boardPage = new BoardPage

describe('Edit profile', () => {
    before(async () => {
        await startPage.open()
        await startPage.header.item('login').click()
        await browser.pause(2000)
        await signInPage.form.item('username').setValue('jijis24506@orsbap.com')
        await signInPage.form.btn.click()
        await browser.pause(2000)
        await signInPage.form.item('password').setValue('Crp8xmH8GL=39Fs')
        await signInPage.form.btn.click()
        await browser.pause(2000)
    })

    it('Edit profile page @edit', async () => {
        await homePage.header.item('userName').click()
        await $('//a[@data-testid="account-menu-settings"]').scrollIntoView({block:'center'})
        await $('//a[@data-testid="account-menu-settings"]').click()

        await browser.pause(2000)
        
        // await expect(browser).toHaveUrl('https://trello.com/u/jijis24506/account')
        await expect(await $('//div/descendant::span[@class="GxX8JLMG4SGAvQ"]').getText()).toEqual('test_user')
    })

})