class Intro{

    constructor(page){
        
        this.page = page;
        //root
        this.intro = page.locator('.intro');

        //logo-ul din banner
        this.logo = this.intro.locator('.intro__container__logo-image');
        //titlul de langa logo
        this.title = {
            asociatie : this.intro.getByRole('heading', {name : 'ASOCIAȚIA'}),
            oportunitati : this.intro.getByRole('heading', {name: "OPORTUNITĂȚI"}),
            cariere : this.intro.getByRole('heading', {name : 'ȘI CARIERE'})
        }
        //poza cu ceas
        this.watchImage = this.intro.locator(".intro__container-watch");
        //sageata cu care poti naviga mai jos
        this.missionArrow = this.intro.getByRole("link", { name : 'our-mission' })

    }


    async scrolltoIntro(){
        await this.logo.scrollIntoViewIfNeeded();
    }


    //Metode
    async clickMissionArrow() {
        await this.missionArrow.click();
    }


}


module.exports = Intro;