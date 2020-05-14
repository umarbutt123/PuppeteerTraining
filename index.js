const puppeteer = require('puppeteer');
const expect = require('expect-puppeteer');

// const expect = require('chai')

  describe("testing", ()=>{

it ('dropbox',async () => {

    const browser = await puppeteer.launch({headless:false,timeout:90000,args: ['--window-size=1366,768']});
    const page = await browser.newPage();
    // await page.setViewport({ width: 1366, height: 768});

    await page.goto("https://www.dropbox.com/login")
    await page.screenshot({path: 'screenshots/dropboxpage.png'});
    // await page.click('[type="email"]');
    // await page.keyboard.type("umarb41@gmail.com")
    // await page.waitForXPath("[@name='login_email'][@type='email']")
    var [name]= await page.$x("//input[@name='login_email']")  //using xpath

    await name.click()
    await name.type("test@ga.com")
    await page.screenshot({path: 'screenshots/emailentered.png'});
    await page.click('[name="login_password"]')
    await page.keyboard.type("123456789")
    await page.screenshot({path: 'screenshots/passwordentered.png'});
    await page.click('[class="signin-text"]');
    await page.waitFor(9000)
    // await page.waitForXPath("(//span[@class='error-message'])");
    await expect(page).toMatch("Invalid email or password")
    await page.screenshot({path: 'screenshots/required.png'});
    await browser.close()
},1000000)


// it ('kayak',async () => {
//   const browser = await puppeteer.launch({headless:true,timeout:10000000});
//   const page = await browser.newPage();
  
//   await page.goto("https://www.kayak.com/hotels")
//   await page.screenshot({path: 'screenshots/kayak.png'});
//   //  await console.log("navigated to site")
//   await page.click('[id$="location-display"]');
//   await page.waitFor(2000)
//   // await console.log("entering text")
//   // await page.waitForSelector('div.id.location-display',{visible:true});
//   await page.keyboard.type("BCN")
//   await page.screenshot({path: 'screenshots/orginfieltext.png'});
//   // await console.log("text entered BCN")
//   // await console.log("pressing tab button to move on start date")
//   await page.keyboard.press("Tab")
//   // await console.log("tab pressed")
//   await page.waitFor(2000)
//   await page.keyboard.type("04/02/2020")
//   await page.screenshot({path: 'screenshots/startDate.png'});
//   // await page.waitFor(2000)
//   await page.click('[id$="checkOut"]');
//   // await console.log("clicking checkout dat to move on end date")
//   await page.waitFor(2000)
//   await page.keyboard.type("04/09/2020")
//   await page.screenshot({path: 'screenshots/endDate.png'});
//   // await page.waitFor(2000)
//   // await page.keyboard.press("Tab")
//   await page.click( '[id$="submit"]')
//   await page.close()
//   await browser.close()

// },1000000)


  })



  
