import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage
const signInPage = new SignIn
const homePage = new HomePage
const boardPage = new BoardPage

describe('Card filtering', () => {
    before(async () => {
        await startPage.open()
        await startPage.header.item('login').click()
        await browser.pause(2000)
        await signInPage.form.item('username').setValue(process.env.user_email)
        await signInPage.form.btn.click()
        await browser.pause(2000)
        await signInPage.form.item('password').setValue(process.env.user_pass)
        await signInPage.form.btn.click()
        await browser.pause(2000)
    })

    after(async () => {
        await boardPage.workSpace.boardHeader('menuBtn').click()
        await boardPage.workSpace.menuBoard('closeBoard').scrollIntoView({block:'end'})
        await boardPage.workSpace.menuBoard('closeBoard').click()
        await boardPage.workSpace.menuBoard('confirmCloseBoard').click()
        await boardPage.workSpace.menuBoard('deleteBoard').scrollIntoView({block:'end'})
        await boardPage.workSpace.menuBoard('deleteBoard').click()
        await boardPage.workSpace.menuBoard('confirmDelBoard').click()
        await browser.pause(2000)
        await expect(await homePage.header.item('userName').isExisting()).toEqual(true)
    })


    it('Create a board @filter', async () => {
        await homePage.header.item('createMenuBtn').click()
        await homePage.popUp.createMenuPopOver('createBoardBtn').click()
        await browser.pause(2000)
        await homePage.popUp.createMenuPopOver('nameBoard').setValue('test-board')
        await homePage.popUp.createMenuPopOver('submitBoardBtn').click()
        await browser.pause(2000)
    
        await expect(await $('//h1[contains(@data-testid, "board-name-display")]').getText()).toEqual('test-board')
    })
    
    it('Create 5 cards @filter', async () => {
        await boardPage.workSpace.createCard.click()
        for (let times = 1; times <= 5; times++){
            await boardPage.workSpace.cardItem('textArea').setValue('test task '+times)
            await boardPage.workSpace.cardItem('btn').click()
        }
        const result = await $('(//ol[@data-testid="list-cards"]/descendant::li)[1]')
        await expect(result).toHaveText('test task 1')
        })

    it('Filter a card @filter', async () => {
        await boardPage.workSpace.boardHeader('filterBtn').click()
        await $('//input[contains(@class,"nch-textfield__input")]').setValue('test')
        await browser.pause(2000)
        await $('//button[@data-testid="popover-close"]').click()
        await browser.pause(2000)
        
        const result = await $$('//ol[@data-testid="list-cards"]/descendant::li')
        await expect(result).toHaveText(['test task 1','test task 2','test task 3','test task 4','test task 5'])
    })


    
})