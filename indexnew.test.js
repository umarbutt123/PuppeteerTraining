const puppeteer = require('puppeteer');
const expect = require('expect-puppeteer');
const HomePage = require('./helper/homepage');
var homePage = new HomePage();
var msg = require('./utils/messages')
var val = require('./utils/constants')


  describe("testing", ()=>{

    it ('should give error on signing in with empty fields',async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await homePage.dropboxLogin(page,val.url,"","")
    await page.waitFor(2000)
    await expect(page).toMatch(msg.expectedRequiredEmailMessage)
    await browser.close()
  },1000000)

})



  
