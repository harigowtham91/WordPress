import Login from '../../support/PageObjects/Wordpress_login_page';
import MyProfile from '../../support/PageObjects/Wordpress_MyProfile_page';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const url = 'https://wordpress.com/me'
const login = new Login();
const myprofile = new MyProfile();


Given(/^Login with Wordpress App "([^"]*)" and "([^"]*)"$/, (user, pass) => {
    cy.visit(url);
    cy.log(user, pass);
    login.login(user, pass);
});

Then(/^Navigate to My profile page$/, () => {
    myprofile.MyProfileIconClikc();
});

Then(/^Enter the "([^"]*)" and "([^"]*)" "([^"]*)" "([^"]*)"$/, (Fname, Lname, DispName, AboutMe) => {
    cy.log(Fname, Lname, DispName, AboutMe);
    myprofile.fillDetails(Fname, Lname, DispName, AboutMe);
});


Then(/^Save and validate the data which we entered "([^"]*)"$/, (Dname) => {
    cy.log(Dname);
    myprofile.verifyDispName(Dname);
});


When(/^Add wordpress Link to profile link part "([^"]*)"$/, (SiteName) => {
	myprofile.AddwordPressSite();
    myprofile.verifyAddedsite(SiteName);
});


When(/^Add URL Link to profile link part "([^"]*)" "([^"]*)" "([^"]*)"$/, (SiteName,URL,URLnote) => {
	cy.log(SiteName,URL,URLnote);
	myprofile.AddURLSite(URL,URLnote);
});


Then(/^Hide my Gravatar profile$/, () => {
	myprofile.hideMyGravatar();
});

Then(/^Un-Hide my Gravatar profile$/, () => {
	myprofile.unHideMyGravatar();
});


Then(/^Logout the sytem$/, () => {
    login.logout();
});
