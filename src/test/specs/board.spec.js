import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signInUp.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage
const signInPage = new SignIn
const homePage = new HomePage
const boardPage = new BoardPage

describe('Operations with board elements', () => {
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


    it('Create a board @e2e', async () => {
        await homePage.header.item('createMenuBtn').click()
        await homePage.popUp.createMenuPopOver('createBoardBtn').click()
        await browser.pause(2000)
        await homePage.popUp.createMenuPopOver('nameBoard').setValue('test-board')
        await homePage.popUp.createMenuPopOver('submitBoardBtn').click()
        await browser.pause(2000)
    
        await expect(await $('//h1[contains(@data-testid, "board-name-display")]').getText()).toEqual('test-board')
    })

    it('Create a list @e2e', async () => {
        await boardPage.workSpace.createList.click()
        await boardPage.workSpace.listItem('textArea').setValue('test log')
        await boardPage.workSpace.listItem('btn').click()
        await browser.pause(2000)
    
        await expect(await $('(//h2[@data-testid="list-name"])[last()]').getText()).toEqual('test log')
    })
    it('Create a card @e2e', async () => {
        await boardPage.workSpace.createCard.click()
        await boardPage.workSpace.cardItem('textArea').setValue('test task')
        await boardPage.workSpace.cardItem('btn').click()
        await browser.pause(2000)
    
        await expect(await $('//a[@data-testid="card-name"]').getText()).toEqual('test task')
    })
    it('Chage a permissions @e2e', async () => {
        await boardPage.workSpace.boardHeader('menuBtn').click()
        await boardPage.workSpace.menuBoard('settings').click()
        const startPermission = await $('//a[@data-testid="add-remove-members-item"]/descendant::span[@class="Ok1H3hZ4AitKti"]').getText()
        await boardPage.workSpace.menuBoard('permissions').click()
        await boardPage.workSpace.menuBoard('permissionsForAdmins').click()
        await browser.pause(2000)
        const changedPermission = await $('//a[@data-testid="add-remove-members-item"]/descendant::span[@class="Ok1H3hZ4AitKti"]').getText()
        await $("//a[contains(@class,'board-menu-header-close-button ')]").click()
        await expect(changedPermission).not.toEqual(startPermission)
    })
    it('Delete a board @e2e', async () => {
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

    
})