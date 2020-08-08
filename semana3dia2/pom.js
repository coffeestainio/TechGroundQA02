class Base{
    goTo(url){
        // browser.url(url)
    }

    checkErrorAlert()

    clickOnSlider()

}

// inicio archio

class BrowserUtilities{

    selectFromDropDown(loctaor, valor)
    clickAndWait(loctaor)
    clearAndSendText(loctaor)
    uploadFile(loctaor)

}

let utilities = new BrowserUtilities()

// fin archivo


class HomePage extends Base{   
    constructor()(
        this.utilities = utilities
    )
}


class AccountPage extends Base{

}

var home = new HomePage()
home.goTo()
home.checkErrorAlert()
home.clickOnSlider()

var account = new AccountPage()
account.uploadFile
account.