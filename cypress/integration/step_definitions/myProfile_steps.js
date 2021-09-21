import Login from '../../support/PageObjects/Wordpress_login_page';
import MyProfile from '../../support/PageObjects/Wordpress_MyProfile_page';
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const url = 'https://wordpress.com/me'
const login = new Login();
const myprofile = new MyProfile();


Given(/^Login to Wordpress App with "([^"]*)" and "([^"]*)"$/, (user, pass) => {
    cy.visit(url);
    cy.log(user, pass);
    login.login(user, pass);
});

Then(/^Navigate to My profile page$/, () => {
    myprofile.MyProfileIconClikc();
});

Then(/^Enter the "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)" and save$/, (Fname, Lname, DispName, AboutMe) => {
    cy.log(Fname, Lname, DispName, AboutMe);
    myprofile.fillDetails(Fname, Lname, DispName, AboutMe);
});


Then(/^Validate profile saved successfully which entered "([^"]*)" "([^"]*)" "([^"]*)" and "([^"]*)"$/, (Fname, Lname, Dname, AboutMe) => {
    cy.log(Dname);
    myprofile.verifyDispName(Dname);
});


When(/^Add wordpress Link to profile link part with "([^"]*)"$/, (SiteName) => {
    myprofile.AddwordPressSite();
});

Then(/^Validate site added successfully with "([^"]*)"$/, (SiteName) => {
    myprofile.verifyAddedsite(SiteName);
});


When(/^Add URL Link to profile link part by adding "([^"]*)" "([^"]*)" and "([^"]*)"$/, (SiteName, URL, URLnote) => {
    cy.log(SiteName, URL, URLnote);
    myprofile.AddURLSite(URL, URLnote);
});



Then(/^Validate URL site added successfully with "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});


Then(/^Hide my Gravatar profile$/, () => {
    myprofile.hideMyGravatar();
});


Then(/^Validate the Hide Gravatar$/, () => {
    myprofile.verifyHideGravatar();
});

Then(/^Un-Hide my Gravatar profile$/, () => {
    myprofile.unHideMyGravatar();
});


Then(/^Validate the un Hide Gravatar$/, () => {
    myprofile.verifyHideGravatar();
});



Then(/^Logout the system$/, () => {
    login.logout();
});
