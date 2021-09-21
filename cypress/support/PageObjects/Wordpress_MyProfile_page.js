/// <reference types="Cypress" />
export default class MyProfile {
    constructor() {
        // Profile Part
        this.myProfileIcon = '.masterbar__item-me';
        this.firstName = '#first_name'
        this.lastName = '#last_name'
        this.displayName = '#display_name'
        this.aboutMe = '#description'
        this.hideMyProfile = '#inspector-toggle-control-0';
        this.saveProfileDetails = '.profile__submit-button-wrapper > .button'
        this.leftSide = '.profile-gravatar__user-display-name'
        this.hideToggle = '#primary > main > div.card.profile__settings > form > fieldset:nth-child(5) > div > div > span'

        // Profile Links Part
        this.addButton = '.button > span'
        this.wordPressSite = '.popover__menu > :nth-child(1)'
        this.addUrlSite = '.popover__menu > :nth-child(2)'
        this.wordPressSiteCheckbox = '.profile-links-add-wordpress__checkbox'
        this.AddSiteButton = '.profile-links-add-wordpress > .is-primary'
        this.AddURLSitebutton = '.profile-links-add-other__add'
        this.profileLink = '.profile-link'
        this.SiteTitle = '.profile-link__title'
        // this.SiteRemoveIcon = '.profile-links__list > :nth-child(1) > .button'
        this.SiteRemoveIcon = '#primary > main > div:nth-child(5) > div > ul > li'
        this.SiteRemoveIconClick = '.profile-links__list > :nth-child(1) > .button > .gridicon'
        this.EnterURlTextBox = '.profile-links-add-other__value'
        this.EterDiscriptionTextBox = '.profile-links-add-other__title'
    }

    MyProfileIconClikc() {
        cy.wait(2000);
        cy.get(this.myProfileIcon).click();
    }

    fillFirstName(Fname) {
        cy.get(this.firstName).clear();
        return cy.get(this.firstName).type(Fname);
    }

    fillLastName(Lname) {
        cy.get(this.lastName).clear();
        return cy.get(this.lastName).type(Lname);
    }

    PublicdisplayName(val) {
        cy.get(this.displayName).clear();
        return cy.get(this.displayName).type(val);
    }

    fillAboutMe(val) {
        cy.get(this.aboutMe).clear()
        return cy.get(this.aboutMe).type(val);
    }

    // displyNameFromRightMenu() {

    //     // const textVal = cy.get(this.leftSide).should(($div) => {
    //     //     const text = $div.text()
    //     //     console.log(text);
    //     //     return text;
    //     // })
    // }

    clikcAdd() {
        return cy.get(this.addButton).click();
    }

    clickWordPressSiteLink() {
        return cy.get(this.wordPressSite).click();
    }

    clickURLSiteLink() {
        return cy.get(this.addUrlSite).click();
    }

    Save() {
        return cy.get(this.saveProfileDetails).then(($btn) => {
            if ($btn.is(":enabled")) {
                cy.wrap($btn).click() //Button is enabled
            } else {
                //Button is disabled
            }
        })
    }

    fillDetails(Fname, Lname, DispName, AboutMe) {
        this.fillFirstName(Fname)
        this.fillLastName(Lname)
        this.PublicdisplayName(DispName)
        this.fillAboutMe(AboutMe)
        this.Save()
    }

    verifyDispName(Disp) {
        cy.get(this.leftSide).should('have.text', Disp);
    }

    removeAllURL() {
        return cy.get('body').then($body => {
            console.log($body.find(this.SiteRemoveIcon).length);
            var len = $body.find(this.SiteRemoveIcon).length;
            return len
        }).then((len) => {
            for (var i = 0; len != 0; i++) {
                cy.get(this.SiteRemoveIconClick).click()
                cy.wait(2000)
                len--;
            }
        })
    }

    setUrlVal(url, urlNote) {
        cy.get(this.EnterURlTextBox).clear()
        cy.get(this.EnterURlTextBox).type(url)
        cy.get(this.EterDiscriptionTextBox).clear()
        cy.get(this.EterDiscriptionTextBox).type(urlNote)
        return true;
    }

    AddwordPressSite() {
        this.removeAllURL();
        cy.get("body").then($body => {
            if ($body.find(".profile-link").length <= 0) {
                this.clikcAdd().then(() => {
                    this.clickWordPressSiteLink().then(() => {
                        cy.get(this.wordPressSiteCheckbox).click().then(() => {
                            cy.get(this.AddSiteButton).click();
                        })
                    })
                })
            }
        });

    }

    AddURLSite(url, urlNote) {
        this.removeAllURL();
        this.clikcAdd().then(() => {
            this.clickURLSiteLink().then(() => {
                this.setUrlVal(url, urlNote)
                cy.get(this.AddURLSitebutton).click()
            })
        })
    }

    hideMyGravatar() {
        cy.get("body").then($body => {
            if ($body.find("is-checked").length > 0) {
                cy.log('selected already');
            } else {
                cy.get(this.hideToggle).click();
            }
        }).then(() => {
            this.Save();
        })
    }

    verifyHideGravatar() {
        cy.get(this.saveProfileDetails).should('be.disabled');
    }

    unHideMyGravatar() {
        cy.get("body").then($body => {
            cy.log($body.find("is-checked").length)
            if ($body.find("is-checked").length > 0) {
                cy.get(this.hideToggle).click();
            } else {
                cy.log('Un selected already');
            }
        }).then(() => {
            this.Save();
        })
    }

    verifyHideGravatar() {
        cy.get(this.saveProfileDetails).should('be.disabled');
    }

    verifyAddedsite(val) {
        cy.get(this.SiteTitle).should('have.text', val);
    }


}
