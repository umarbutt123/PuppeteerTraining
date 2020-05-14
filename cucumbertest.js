const {When, Then, And, Given} = require("cucumber")
const puppeteer = require("puppeteer")

setDefaultTimeout(60 * 1000);

Given("The browser is open", async function(){
    this.browser = await puppeteer.launch({headless:false})
    this.page = await this.browser.newPage();
})

When('open the Google page', async function () {
    await this.page.goto("https://google.com")
});

When('search for chercher tech', async function () {
    await this.page.waitForSelector("[name='q']")
    await this.page.type("[name='q']", "chercher tech")
    await this.page.click("[name='btnK']")
});