import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from "../../po/pages/start.page.js" 
import { BoardPage } from "../../po/pages/board.page.js"


const startPage = new StartPage
const signInPage = new SignIn
const homePage = new HomePage
const boardPage = new BoardPage


describe('Search board', () => {
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
    
    after(async () => {
            for (let i = 1; i <= 2; i++){
            await $('//a[@class="nNP_5Djh_w6vsG r1qqiIjlUDS6sp"]').click()
            await homePage.boardList.firstBoard.click()
            await browser.pause(2000)
            await boardPage.workSpace.boardHeader('menuBtn').click()
            await boardPage.workSpace.menuBoard('closeBoard').scrollIntoView({block:'end'})
            await boardPage.workSpace.menuBoard('closeBoard').click()
            await boardPage.workSpace.menuBoard('confirmCloseBoard').click()
            await boardPage.workSpace.menuBoard('deleteBoard').scrollIntoView({block:'end'})
            await boardPage.workSpace.menuBoard('deleteBoard').click()
            await boardPage.workSpace.menuBoard('confirmDelBoard').click()
            await browser.pause(2000)
        }
        })
    // it('Sign up', async () => {
    //     // await $('//a[contains(@data-uuid,"MJFtCCgVhXrVl7v9HA7EH_login")]').waitForDisplayed()
    //     await browser.pause(2000)
    //     await startPage.header.item('signup').click()
    //     // await $('//a[contains(@data-uuid,"MJFtCCgVhXrVl7v9HA7EH_login")]').click()
    //     await browser.pause(2000)
    //     await $('input#username').setValue('jijis24506@orsbap.com')
    //     await $('#login-submit').click()
    //     await browser.pause(2000)
    //     await $('input#password').setValue('Crp8xmH8GL=39Fs')
    //     await $('#login-submit').click()
    //     await browser.pause(2000)

    //     await expect(await $('//div[contains(@title, "test_user (jijis24506)")]').isExisting()).toEqual(true)
    // })
   
    it('Create 3 boards @search', async () => {
        for (let i = 1; i <= 2; i++){
            await homePage.header.item('createMenuBtn').click()
            await homePage.popUp.createMenuPopOver('createBoardBtn').click()
            await browser.pause(2000)
            await homePage.popUp.createMenuPopOver('nameBoard').setValue('test-board' + i)
            await homePage.popUp.createMenuPopOver('submitBoardBtn').click()
            await browser.pause(2000)
        }
    
        // await expect(await $('//h1[contains(@data-testid, "board-name-display")]').getText()).toEqual('test-board')
    })
    it('Search a board @search', async () => {
        await $('//a[@class="nNP_5Djh_w6vsG r1qqiIjlUDS6sp"]').click()
        await homePage.header.item('searchField').setValue('test')
        // await expect(await $('//div[@class="css-1u2gdj3"]')).toBeDisplayed()
        await expect(await $('//div[@class="css-jzn3n4"]')).toBeDisplayed()
    })
    
})