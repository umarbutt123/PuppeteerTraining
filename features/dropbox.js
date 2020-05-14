const {When, Then, And, Given} = require("cucumber")
const puppeteer = require('puppeteer')
const expect = require('expect-puppeteer')
var{setDefaultTimeout} = require('cucumber')

setDefaultTimeout(60*1000)

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch()
    this.page = await this.browser.newPage();
})

When('open the dropbox page', async function () {
    await this.page.goto("https://www.dropbox.com/login")
});

When('enter empty values', async function () {
     await this.page.type('[name="login_email"]',"");  
     await this.page.type('[name="login_password"]',"")  //using xpath
     await this.page.click('[class="signin-text"]');
     await this.page.waitFor(2000)
});

Then('validate the error message', async function () {
    await expect(this.page).toMatch("Please enter your email")
    await this.browser.close()

});