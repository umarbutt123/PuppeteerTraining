const DropBox = require('../PageObjectModel/dropbox_POM');
var dropbox_pom = new DropBox()

class HomePage {


    async dropboxLogin(page,url,username,password){
        await page.goto(url)
        // await page.waitForNavigation();
        await page.screenshot({path: 'screenshots/dropboxpage.png'});
        // await page.type(dropbox_pom.getUserName(page,username));
        await this.typeUserName(page,username)
        await page.screenshot({path: 'screenshots/emailentered.png'});
        this.typePassword(page,password)
        await page.screenshot({path: 'screenshots/passwordentered.png'});
        await page.click(dropbox_pom.clickSignInButton());
        await page.screenshot({path: 'screenshots/buttonclicked.png'});
    }

    async typeUserName(page,text){
       await page.type(dropbox_pom.getUserName(),text);
    }

    async typePassword(page,text){
        var [password]= await page.$x(dropbox_pom.getUserPassword())  //using xpath
        password.click()
        password.type(text)
    }

    async clickButton(page)
    {
        await page.click(dropbox_pom.clickSignInButton());
    }

    // async getRequiredText(page){
    //     const val= await page.$eval( '[class="error-message"]',
    //             element=> element.textContent)
    //     return val;
    // }
    
}

module.exports = HomePage