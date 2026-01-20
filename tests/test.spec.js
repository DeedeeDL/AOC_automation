const {test, expect} = require('@playwright/test');
const MainPage = require('../pages/main-page');

test('test', async({page})=> {
    const mainPage = new MainPage(page);
    await mainPage.navigateTo();
    if(await mainPage.header.isMobile()){
        await mainPage.header.openHamburgerMenu();
    }

    const linksCount = await mainPage.header.getNavLinkCount();

    if(linksCount > 0){
        await mainPage.header.clickJoinDiscord();
    }

    
})

