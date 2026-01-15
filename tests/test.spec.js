const {test, expect} = require("@playwright/test");
const MainPage = require ("../pageObjects/mainpage");



test("Test", async({page})=>{

    
    //asta putem face global si din config cu setatul viewport-ului
    await page.setViewportSize({width: 1283, height: 858});
    const mainPage = new MainPage(page);
    await mainPage.navigateTo();
    await mainPage.header.openHamburgerMenu();
    await mainPage.header.clickMissionLink();
    // await mainPage.header.closeMenu();
    




    
    






    







})