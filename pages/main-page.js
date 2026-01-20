const Header = require('./page-fragments/header');
const Intro = require('./page-fragments/intro');
const OurMission = require('./page-fragments/our-mission');


class MainPage {

    constructor(page) {
        this.page = page;
        this.header = new Header(this.page);
        this.intro = new Intro(this.page);
        this.ourMission = new OurMission(this.page);
    }


    async navigateTo() {
        await this.page.goto("/");
    }
}

module.exports = MainPage;