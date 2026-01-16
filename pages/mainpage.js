const header = require('../sections/header');
const intro = require('../sections/intro');
const ourMission = require('../sections/our-mission');
class MainPage{
    constructor(page){
        
        this.page = page;
        this.header = new header(this.page);
        this.intro = new intro(this.page);
        this.ourMission = new ourMission(this.page);
        
    }

    async navigateTo(){

        await this.page.goto("/");
    }
}

module.exports = MainPage;