const Header = require('../sectionobjects/header');


class MainPage{


    constructor(page){


        this.page = page;

        this.header = new Header(this.page);



    }



    async navigateTo(){

        await this.page.goto("/");

    }
}

module.exports = MainPage;