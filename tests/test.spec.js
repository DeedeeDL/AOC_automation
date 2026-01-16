const {test, expect} = require("@playwright/test");
const MainPage = require ("../pages/mainpage");



test("Test", async({page})=>{
    const mainPage = new MainPage(page);
    await mainPage.navigateTo();
    
    await mainPage.ourMission.scrollToMission();
    await mainPage.ourMission.expectLinksToBeCorrect();

    
})



test("Test2", async({page})=>{

    const mainPage = new MainPage(page);
    await mainPage.navigateTo();
    await mainPage.intro.scrolltoIntro();
    await expect(mainPage.intro.logo).toBeVisible();






  

    
})
