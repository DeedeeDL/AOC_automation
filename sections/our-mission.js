const {expect} = require('@playwright/test');

class OurMission{


    constructor(page){
        this.page = page;

        //root
        this.ourMission = this.page.locator('#our-mission');
        this.heading = this.ourMission.getByRole('heading', {name: 'Misiunea noastră'});
        this.underline = this.ourMission.locator('.underline');

        this.description = this.ourMission.locator('.description');
        this.peviitorLink = this.description.locator('p > a');
        //sincer nu stiu ce face sageata asta
        this.arrow = this.description.getByAltText('right arrow');
        //practic e un href cu o imagine
        this.peviitorImageLink = this.ourMission.locator("//div[@class='search-engine aos-init aos-animate']//a");

    }


    async scrollToMission() {
        await this.heading.scrollIntoViewIfNeeded();
        
    }

    async expectLinksToBeCorrect() {
        await expect(this.peviitorLink).toHaveAttribute('href', 'https://peviitor.ro/');
        
        await expect(this.peviitorImageLink).toHaveAttribute('href', 'https://peviitor.ro/')
    }





}


module.exports = OurMission;