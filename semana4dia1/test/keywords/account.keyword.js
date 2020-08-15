const InventoryPage = require('../pageobjects/inventory.page');
const Header = require('../pageobjects/header.page');
const SideBar = require('../pageobjects/sidebar.page');
const LoginPage = require('../pageobjects/login.page');

class AccountKeyword {

    logout(){
        if (InventoryPage.isUserOnInventoryPage()){
            Header.iconMenu.click()
            SideBar.lnkLogout.click()
        }
    }

    login() {
        LoginPage.open();
        LoginPage.login();
    }

}

module.exports = new AccountKeyword();
