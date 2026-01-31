import Header from './page-fragments/header.js';
import { Intro } from './page-fragments/intro.js';
import { OurMission } from './page-fragments/our-mission.js';


export class MainPage {

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

