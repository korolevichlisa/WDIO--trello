import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from "../../po/pages/start.page.js" 
import { BoardPage } from "../../po/pages/board.page.js"


const startPage = new StartPage()
const signInPage = new SignIn()
const homePage = new HomePage()
const boardPage = new BoardPage()


describe('Search board', () => {
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
            for (let i = 1; i <= 2; i++){
                await homePage.header.item('logo').click()
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
   
    it('Create 3 boards @search', async () => {
        for (let i = 1; i <= 2; i++){
            await homePage.header.item('createMenuBtn').click()
            await homePage.popUp.createBoardMenuPopOver('createBoardBtn').click()
            await browser.pause(2000)
            await homePage.popUp.createBoardMenuPopOver('nameBoard').setValue('test-board' + i)
            await homePage.popUp.createBoardMenuPopOver('submitBoardBtn').click()
            await browser.pause(2000)
        }
    })
    it('Search a board @search', async () => {
        await homePage.header.item('logo').click()
        await homePage.header.item('searchField').setValue('test')
        await expect(await $('//div[@class="css-jzn3n4"]')).toBeDisplayed()
    })
    
})
