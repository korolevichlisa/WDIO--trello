import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage()
const signInPage = new SignIn()
const homePage = new HomePage()
const boardPage = new BoardPage()

describe('Operations with board elements', () => {
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


    it('Create a board @e2e', async () => {
        await homePage.header.item('createMenuBtn').click()
        await homePage.popUp.createBoardMenuPopOver('createBoardBtn').click()
        await browser.pause(2000)
        await homePage.popUp.createBoardMenuPopOver('nameBoard').setValue('test-board')
        await homePage.popUp.createBoardMenuPopOver('submitBoardBtn').click()
        await browser.pause(2000)
    
        await expect(await boardPage.workSpace.boardHeader('title').getText()).toEqual('test-board')
    })

    it('Create a list @e2e', async () => {
        await boardPage.workSpace.createList.click()
        await boardPage.workSpace.listItem('textArea').setValue('test log')
        await boardPage.workSpace.listItem('btn').click()
        await browser.pause(2000)
    
        await expect(await boardPage.workSpace.lastListTitle.getText()).toEqual('test log')
    })
    it('Create a card @e2e', async () => {
        await boardPage.workSpace.createCard.click()
        await boardPage.workSpace.cardItem('textArea').setValue('test task')
        await boardPage.workSpace.cardItem('btn').click()
        await browser.pause(2000)
    
        await expect(await boardPage.workSpace.createdCardName.getText()).toEqual('test task')
    })
    it('Chage a permissions @e2e', async () => {
        await boardPage.workSpace.boardHeader('menuBtn').click()
        await boardPage.workSpace.menuBoard('settings').click()
        const startPermission = await boardPage.workSpace.menuBoard('addRemoveMembers').getText()
        await boardPage.workSpace.menuBoard('permissionsAddRemoveMembers').click()
        await boardPage.workSpace.menuBoard('permissionsForAdminsAddRemoveMembers').click()
        await browser.pause(2000)
        const changedPermission = await boardPage.workSpace.menuBoard('addRemoveMembers').getText()
        await boardPage.workSpace.menuBoard('closeMenuPopUp').click()
        await expect(changedPermission).not.toEqual(startPermission)
    })
      
})